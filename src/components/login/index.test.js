import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '.';
import {
  setInputValue,
  clickButtonByTitle,
  clickButtonByRole
} from '../../../tests/actions';
import auth from '../../../tests/auth';
import { getErrorWithMessage } from '../../../tests/errors';

const renderComponent = (api, history) =>
  render(
    <Router history={history}>
      <Login api={api} />
    </Router>
  );

const clickAway = () => {
  user.click(screen.getByPlaceholderText('Username'));
  return screen.findByRole('button', { name: 'Sign in' });
};

const generateErrorMessage = async (errorMessage) => {
  auth.doLogin.mockRejectedValue(
    getErrorWithMessage(errorMessage || 'Invalid username and/or password')
  );
  await setInputValue('Username', 'InvalidUsername');
  await setInputValue('Password', 'InvalidPassword');
  await act(async () => {
    await clickButtonByRole('button', 'Sign in');
  });
};

let history;

describe('Login', () => {
  beforeEach(async () => {
    history = createMemoryHistory();
    await renderComponent({ auth }, history);
  });

  test('should show Login page with all starting components', () => {
    expect(screen.queryByText('Login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('should show error messages for required fields', async () => {
    await clickButtonByRole('button');
    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  test("should show error message 'Invalid username and/or password'", async () => {
    await generateErrorMessage();
    await waitFor(async () => {
      expect(
        await screen.findByText('Invalid username and/or password')
      ).toBeInTheDocument();
    });
  });

  test('should dismiss error message when Close button is clicked', async () => {
    await generateErrorMessage();
    await clickButtonByTitle('Close');
    expect(await screen.findByRole('alert')).toHaveStyle('opacity: 0');
  });

  test('should not dismiss error message when User clicks away', async () => {
    await generateErrorMessage();
    await clickAway();
    expect(await screen.findByRole('alert')).toHaveStyle('opacity: 1');
  });

  test('should redirect to /home when username and password are correct', async () => {
    expect(history.location.pathname).toEqual('/');

    auth.doLogin.mockResolvedValue('');
    await setInputValue('Username', 'CorrectUsername');
    await setInputValue('Password', 'CorrectPassword');
    await act(async () => {
      await clickButtonByRole('button', 'Sign in');
    });

    expect(history.location.pathname).toEqual('/home');
  });
});
