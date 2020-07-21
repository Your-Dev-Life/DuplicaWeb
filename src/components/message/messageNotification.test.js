import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { clickButtonByRole } from '../../../tests/actions';
import MessageProvider from './messageProvider';
import MessageNotification from "./messageNotification";
import useMessageNotification from "./useMessageNotification";

let message;


const MessageNotificationTest = () => {
  const { addMessage } = useMessageNotification();

  const setMessage = () => {
    addMessage(message.title, message.text, message.type);
  };

  return (
    <button name='MyButton' onClick={setMessage} />
  );
}

const renderComponent = () =>
  render(<MessageProvider>
    <MessageNotificationTest />
    <MessageNotification />
  </MessageProvider>);

describe('Message Notification', () => {
  const cases = [
    ['info', 'MuiAlert-standardInfo'],
    ['warning', 'MuiAlert-standardWarning'],
    ['success', 'MuiAlert-standardSuccess'],
    ['error', 'MuiAlert-standardError'],
  ];

  test.each(cases)(
    'should show message notification with title, type %p and message',
    async (type, alertClass, done) => {
      message = { title: 'Message title', text: 'Any text', type };
      renderComponent();

      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      expect(screen.queryByText(message.title)).not.toBeInTheDocument();
      expect(screen.queryByText(message.text)).not.toBeInTheDocument();

      await clickButtonByRole('button');

      await waitFor(() => {
        expect(screen.queryByRole('alert')).toBeInTheDocument();
        expect(screen.queryByRole('alert')).toHaveClass(alertClass);
        expect(screen.queryByText(message.title)).toBeInTheDocument();
        expect(screen.queryByText(message.text)).toBeInTheDocument();
      });
      done();
    },
  );

  test.each(cases)(
    'should show message notification with type %p and message, and without title',
    async (type, alertClass, done) => {
      message = { text: 'Any text', type };
      renderComponent();

      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      expect(screen.queryByText(message.text)).not.toBeInTheDocument();

      await clickButtonByRole('button');
      await waitFor(() => {
        expect(screen.queryByRole('alert')).toBeInTheDocument();
        expect(screen.queryByRole('alert')).toHaveClass(alertClass);
        expect(screen.queryByRole('alert')).not.toHaveClass('MuiAlertTitle-root');
        expect(screen.queryByText(message.text)).toBeInTheDocument();
      });
      done();
    },
  );

  test('should show message notification with message and title, and with success type when type is not set', async done => {
    message = { title: 'Message title', text: 'Any text' };
    renderComponent();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    await clickButtonByRole('button');
    await waitFor(() => {
      expect(screen.queryByRole('alert')).toBeInTheDocument();
      expect(screen.queryByRole('alert')).toHaveClass('MuiAlert-standardSuccess');
      expect(screen.queryByRole('alert')).not.toHaveClass('MuiAlertTitle-root');
      expect(screen.queryByText(message.text)).toBeInTheDocument();
    });
    done();
  });

  test('should close message notification', async done => {
    message = { text: 'Any text' };
    renderComponent();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    await clickButtonByRole('button');
    await waitFor(() => {
      expect(screen.queryByRole('alert')).toBeInTheDocument();
    });

    await clickButtonByRole('button', 'Close');
    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
    done();
  });
});
