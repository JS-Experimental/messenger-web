import { Story, Meta } from '@storybook/react/types-6-0';
import { UsernameDialog, UsernameDialogProps } from './UsernameDialog';

export default {
  title: 'Components/Username Dialog',
  component: UsernameDialog
} as Meta;

const Template: Story<UsernameDialogProps> = (args) => (<div><UsernameDialog {...args} /></div>);

export const Dialog = Template.bind({});
