import { Meta, Story } from '@storybook/react';
import { MessageElement, MessageElementProps } from './MessageElement';

export default {
  title: 'Components/Message element',
  component: MessageElement
} as Meta;

const Template: Story<MessageElementProps> = (args) => <MessageElement {...args} />;

export const MyMessage = Template.bind({});
MyMessage.args = {
  id: '1',
  sender: 'me',
  senderImage: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
  messageText: 'Hi, how are you?'
} as MessageElementProps;

export const BigText = Template.bind({});
BigText.args = {
  ...MyMessage.args,
  id: '2',
  messageText: 'Where does it come from?\n'
        + 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
} as MessageElementProps;

export const OthersMessage = Template.bind({});
OthersMessage.args = {
  ...MyMessage.args,
  id: '3',
  sender: 'others',
  messageText: 'Fine, you?'
} as MessageElementProps;
