import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';

// Mock Global Console to avoid annoying console messages when running tests
Object.assign(global.console, {
  // error: jest.fn(),
  // warn: jest.fn(),
  // info: jest.fn(),
});

// Override the Read-only property document.body sizes to meet the window sizes
jest.spyOn(global.document.body, 'clientWidth', 'get').mockImplementation(() => global.innerWidth);
jest.spyOn(global.document.body, 'clientHeight', 'get').mockImplementation(() => global.innerHeight);

process.env.ENV = 'test';

// Log Node Unhandled Behaviours
process.on('uncaughtException', (exception) => {
  fail(exception);
});

process.on('unhandledRejection', (reason) => {
  fail(reason);
});
