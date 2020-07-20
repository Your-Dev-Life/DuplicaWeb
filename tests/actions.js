import { act, fireEvent, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

const setInputValue = async (placeholderName, value) => {
  const element = screen.getByPlaceholderText(placeholderName);
  fireEvent.change(element, { target: { value } });
};

const clickButtonByTitle = async title => user.click(await screen.getByTitle(title));

const clickButtonByRole = async (role, name) => user.click(await screen.getByRole(role, { name }));

const clickButtonByText = async text => user.click(await screen.getByText(text));

export {
  setInputValue,
  clickButtonByTitle,
  clickButtonByText,
  clickButtonByRole,
};
