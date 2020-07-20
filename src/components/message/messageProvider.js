import React, { useState, useCallback } from 'react';

export const MessageContext = React.createContext({
  message: null,
  addMessage: () => {},
  removeMessage: () => {}
});

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const removeMessage = () => {
    setMessage(null);
  };

  const addMessage = (title, text, type) => {
    setMessage({ title, text, type });
  };

  const contextValue = {
    message,
    addMessage: useCallback((title, text, type) => addMessage(title, text, type), []),
    removeMessage: useCallback(() => removeMessage(), [])
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
