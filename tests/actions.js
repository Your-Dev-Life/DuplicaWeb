import { fireEvent, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

const setInputValue = (placeholderName, value) => {
  const element = screen.getByPlaceholderText(placeholderName);
  fireEvent.change(element, { target: { value } });
};

const clickButtonByTestId = async (testId) => {
  user.click(await screen.findByTestId(testId));
  return screen.findByTestId(testId);
};

const clickButtonByTitle = async (title) => {
  user.click(await screen.getByTitle(title));
  return screen.getByTitle(title);
};

const clickButtonByRole = async (role, name) => user.click(await screen.getByRole(role, { name }));

const clickButtonByText = async (text) => {
  user.click(await screen.getByText(text));
  return screen.getByText(text);
};

export {
  setInputValue,
  clickButtonByTestId,
  clickButtonByTitle,
  clickButtonByText,
  clickButtonByRole,
};
