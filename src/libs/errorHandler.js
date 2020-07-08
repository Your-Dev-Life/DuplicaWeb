import { pathOr } from "ramda";

const getErrorMessage = (error, defaultMessage) => {
  return pathOr(defaultMessage, ['response', 'data', 'error', 'message'], error);
}

export default {
  getErrorMessage,
};
