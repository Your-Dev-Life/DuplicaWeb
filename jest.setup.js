import '@testing-library/jest-dom';
import 'mutationobserver-shim';
import 'regenerator-runtime/runtime';
import 'jest-canvas-mock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key })
}));
