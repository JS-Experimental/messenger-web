import { Story, Meta } from '@storybook/react/types-6-0';
import { LayoutMessenger, LayoutMessengerProps } from './LayoutMessenger';
import { ChatPage } from '../../pages/chat-page/ChatPage';

export default {
  title: 'Screens/Messenger',
  component: LayoutMessenger
} as Meta;

const Template: Story<LayoutMessengerProps> = ((args) => <LayoutMessenger {...args} />);

export const ChatScreen = Template.bind({});
ChatScreen.args = {
  children: (
    <>
      <ChatPage />
    </>
  )
};
