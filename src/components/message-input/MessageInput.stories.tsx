import { Story, Meta } from '@storybook/react/types-6-0';
import { MessageInput, MessageInputProps } from './MessageInput';

export default {
  title: 'Components/Message Input',
  component: MessageInput
} as Meta;

const Template: Story<MessageInputProps> = (args) => <MessageInput {...args} />;

export const EmptyInput = Template.bind({});
