import { ChatService } from '@metall/common1';
// @ts-ignore
// import commonModule from '@metall/common';
import { MessageList } from './MessageList';

export interface MessageListContainerProps {

}

export const MessageListContainer: React.FC<MessageListContainerProps> = () => {
  // console.log(commonModule);
  const { data, status } = ChatService().useMessages('3');
  console.log({ data });
  return (
    <MessageList messages={data?.messages} status={status} />
  );
};
