import { Meta, Story } from '@storybook/react';
import { ChatPage, ChatPageProps } from './ChatPage';

export default {
  title: 'Pages/Chat',
  component: ChatPage
} as Meta;

const Template:Story<ChatPageProps> = (args: any) => <ChatPage {...args} />;

export const Default = Template.bind({});
