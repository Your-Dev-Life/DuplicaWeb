import errorHandler from './errorHandler';

const defaultMessage = 'Default Message';
const error = {
  response: {
    data: {
      error: {
        status: 401,
        message: 'Unauthorized error message',
      },
    },
  },
};

describe('ErrorHandler', () => {
  test('should get error message', () => {
    const message = errorHandler.getErrorMessage(error, defaultMessage);
    expect(message).toEqual(error.response.data.error.message);
  });

  test('should get default error message when error is not defined', () => {
    const message = errorHandler.getErrorMessage(undefined, defaultMessage);
    expect(message).toEqual(defaultMessage);
  });
});
