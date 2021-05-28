import React from 'react';
import { MessageListContainer } from '../../message-list/MessageList.container';
import MessageInputContainer from '../../message-input/MessageInput.container';

export interface ChatPageProps {

}

export const ChatPage: React.FC<ChatPageProps> = () => (
  <>
    <MessageListContainer />
    <MessageInputContainer />
  </>
);
