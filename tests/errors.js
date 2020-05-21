const getErrorWithMessage = (message) => ({
  response: {
    data: {
      error: message,
    },
  },
});

export {
  getErrorWithMessage,
};
