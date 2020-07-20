import { useContext } from 'react';
import { MessageContext } from './messageProvider';

const useMessageNotification = () => {
  const { message, addMessage, removeMessage } = useContext(MessageContext);
  return { message, addMessage, removeMessage };
}

export default useMessageNotification;
