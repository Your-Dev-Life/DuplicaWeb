import { fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';

const setInputValue = (component, placeholderName, value) => {
  const { getByPlaceholderText } = component;
  const element = getByPlaceholderText(placeholderName);
  fireEvent.change(element, { target: { value } });
};

const clickButtonByTestId = async (component, testId) => {
  const { findByTestId } = component;
  user.click(await findByTestId(testId));
  return findByTestId(testId);
};

const clickButtonByTitle = async (component, title) => {
  const { getByTitle } = component;
  user.click(await getByTitle(title));
  return getByTitle(title);
};

export {
  setInputValue,
  clickButtonByTestId,
  clickButtonByTitle,
};
