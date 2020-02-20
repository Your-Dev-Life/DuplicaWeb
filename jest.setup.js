import '@testing-library/jest-dom';
import 'mutationobserver-shim';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
