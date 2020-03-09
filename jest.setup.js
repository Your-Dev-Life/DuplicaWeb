import '@testing-library/jest-dom';
import 'mutationobserver-shim';
import 'regenerator-runtime/runtime';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
