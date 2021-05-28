import { Story, Meta } from '@storybook/react/types-6-0';
import { MessageList, MessageListProps } from './MessageList';
import { BigText, MyMessage, OthersMessage } from '../message-element/MessageElement.stories';
import { MessageElement } from '../message-element/MessageElement';

export default {
  title: 'Components/Message list',
  component: MessageList,
  subcomponents: { MessageElement }
} as Meta;

const Template: Story<MessageListProps> = (args) => <MessageList {...args} />;

export const ManyMessages = Template.bind({});
ManyMessages.args = {
  messages: [
    { ...BigText.args },
    { ...MyMessage.args },
    { ...OthersMessage.args }
  ]
} as MessageListProps;
