import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '.';

const authentication = () => ({
  doLogin: jest.fn(),
});
const renderComponent = (api, history) => render(
  <Router history={history}>
    <Login api={api} />
  </Router>,
);

const getErrorWithMessage = (message) => ({
  response: {
    data: {
      error: message,
    },
  },
});

const setInputValue = (component, placeholderName, value) => {
  const { getByPlaceholderText } = component;
  const element = getByPlaceholderText(placeholderName);
  fireEvent.change(element, { target: { value } });
};

const clickSignInButton = async (component) => {
  const { findByTestId } = component;
  user.click(await findByTestId('SignInButton'));
  return findByTestId('SignInButton');
};

const clickAlertCloseButton = async (component) => {
  const { findByTitle, findByTestId } = component;
  user.click(await findByTitle('Close'));
  return findByTestId('SignInButton');
};

const clickAway = async (component) => {
  const { getByPlaceholderText, findByTestId } = component;
  user.click(await getByPlaceholderText(/Username/i));
  return findByTestId('SignInButton');
};

const generateErrorMessage = async (errorMessage) => {
  auth.doLogin.mockRejectedValue(getErrorWithMessage(errorMessage || 'Invalid username and/or password'));
  setInputValue(component, /Username/i, 'InvalidUsername');
  setInputValue(component, /Password/i, 'InvalidPassword');
  await clickSignInButton(component);
};

let auth;
let history;
let component;

describe('Login', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    auth = authentication();
    component = renderComponent({ auth }, history);
  });
  afterEach(cleanup);

  test('should show Login page with all starting components', () => {
    const { queryByText, getByPlaceholderText } = component;
    const elementTitle = queryByText(/Login/i);
    const elementUsername = getByPlaceholderText(/Username/i);
    const elementPassword = getByPlaceholderText(/Password/i);
    expect(elementTitle).toBeInTheDocument();
    expect(elementUsername).toBeInTheDocument();
    expect(elementPassword).toBeInTheDocument();
  });

  test('should show message \'Username is required\' when username is not informed', async () => {
    await clickSignInButton(component);
    const { getByText } = component;
    const elementUsernameIsRequired = getByText('Username is required');
    expect(elementUsernameIsRequired).toBeInTheDocument();
  });

  test('should show error message \'Invalid username and/or password\'', async () => {
    const { findByText } = component;
    await generateErrorMessage();

    const elementAlertMessage = await findByText('Invalid username and/or password');
    expect(elementAlertMessage).toBeInTheDocument();
  });

  test('should dismiss error message when Close button is clicked', async () => {
    const { findByTestId } = component;
    await generateErrorMessage();
    await clickAlertCloseButton(component);

    const alert = await findByTestId('Alert');
    expect(alert.style._values.opacity).toEqual('0');
  });

  test('should not dismiss error message when User clicks away', async () => {
    const { findByTestId } = component;
    await generateErrorMessage();
    await clickAway(component);

    const alert = await findByTestId('Alert');
    expect(alert.style._values.opacity).toEqual('1');
  });

  test('should redirect to /home when username and password are correct', async () => {
    expect(history.location.pathname).toEqual('/');

    auth.doLogin.mockResolvedValue('');
    setInputValue(component, /Username/i, 'CorrectUsername');
    setInputValue(component, /Password/i, 'CorrectPassword');
    await clickSignInButton(component);

    expect(history.location.pathname).toEqual('/home');
  });
});
