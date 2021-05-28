import { Story, Meta } from '@storybook/react/types-6-0';
import { LayoutMain, LayoutMainProps } from './LayoutMain';
import { ChatPage } from '../../pages/chat-page/ChatPage';

export default {
  title: 'Screens/Messenger',
  component: LayoutMain
} as Meta;

const Template: Story<LayoutMainProps> = ((args) => <LayoutMain {...args} />);

export const ChatScreen = Template.bind({});
ChatScreen.args = {
  children: (
    <>
      <ChatPage />
    </>
  )
};
