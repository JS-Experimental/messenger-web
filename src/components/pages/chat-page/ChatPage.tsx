import React from 'react';
import { MessageListContainer } from '../../message-list/MessageList.container';
import MessageInputContainer from '../../message-input/MessageInput.container';
import { UsernameDialogContainer } from '../../username-dialog/UsernameDialog.container';

export interface ChatPageProps {

}

export const ChatPage: React.FC<ChatPageProps> = () => (
  <>
    <MessageListContainer />
    <MessageInputContainer />
    <UsernameDialogContainer />
  </>
);
