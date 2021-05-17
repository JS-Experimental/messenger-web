import { Story } from '@storybook/react';
import { MessageInput, MessageInputProps } from './MessageInput';

export default {
  title: 'Components/Message Input',
  component: MessageInput
};

const Template: Story<MessageInputProps> = (args) => <MessageInput {...args} />;

export const EmptyInput = Template.bind({});
