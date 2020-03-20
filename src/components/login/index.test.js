import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, fireEvent, cleanup, wait,
} from '@testing-library/react';
import Login from '.';

const authentication = () => ({
  doLogin: jest.fn(),
});
const renderComponent = (auth, history) => render(
  <Router history={history}>
    <Login auth={auth} />
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

const clickSignInButton = (component) => {
  const { getByTestId } = component;
  const elementSignInButton = getByTestId('SignInButton');
  fireEvent.click(elementSignInButton);
  return wait(() => getByTestId('SignInButton'));
};

const clickAlertCloseButton = (component) => {
  const { getByTitle } = component;
  const elementAlertCloseButton = getByTitle('Close');
  fireEvent.click(elementAlertCloseButton);
  return wait(() => getByTestId('SignInButton'));
};

let auth;
let history;
let component;

describe('Login', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    auth = authentication();
    component = renderComponent(auth, history);
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

  test('should show error message \'Invalid username and/or password\' when login with invalid username and dismiss message', async () => {
    auth.doLogin.mockRejectedValue(getErrorWithMessage('Invalid username and/or password'));
    const {
      getByTestId, getByText, debug, getByTitle, container,
    } = component;

    debug(container);
    setInputValue(component, /Username/i, 'InvalidUsername');
    setInputValue(component, /Password/i, 'InvalidPassword');
    await clickSignInButton(component);
    debug(container);

    const elementAlertMessage = getByText('Invalid username and/or password');
    expect(elementAlertMessage).toBeInTheDocument();

    const elementAlertCloseButton = getByTitle('Close');
    fireEvent.click(elementAlertCloseButton);

    await wait(() => getByTestId('Alert'));
    debug(container);
    expect(getByTestId('Alert')).not.toBeInTheDocument();
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
