import { useState } from 'react';
import { ChatService } from '@metall/common1';
import { MessageInput, OnChangeMessageInput } from './MessageInput';

export default function MessageInputContainer() {
  const sendMessage = ChatService().useSendMessage();

  const [message, setMessage] = useState('');

  const onSubmitMessage = () => {
    sendMessage.mutate(message);
  };

  const onChangeMessage:OnChangeMessageInput = (e) => {
    setMessage(e.currentTarget.value);
  };

  console.log(sendMessage.isLoading, sendMessage.error);

  return (
    <MessageInput onChange={onChangeMessage} onEnter={onSubmitMessage} />
  );
}
