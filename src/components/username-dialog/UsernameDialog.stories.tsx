import { Story, Meta } from '@storybook/react/types-6-0';
import { UsernameDialog, UsernameDialogProps } from './UsernameDialog';

export default {
  title: 'Components/Username Dialog',
  component: UsernameDialog
} as Meta;

const Template: Story<UsernameDialogProps> = (args) => (<UsernameDialog {...args} />);

export const Dialog = Template.bind({});

export const DialogOpen = Template.bind({});
DialogOpen.args = {
  open: true
};
