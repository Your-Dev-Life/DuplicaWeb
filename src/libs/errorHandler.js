import { pathOr } from 'ramda';

const getErrorMessage = (error, defaultMessage) => pathOr(defaultMessage, ['response', 'data', 'error', 'message'], error);

export default {
  getErrorMessage,
};
