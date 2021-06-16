import { Meta, Story } from '@storybook/react/types-6-0';
import { IoIosSend } from 'react-icons/io';
import { MIconButton, MIconButtonProps } from './MIconButton';

export default {
  title: 'Design system/Buttons',
  component: MIconButton
} as Meta;

const Template:Story<MIconButtonProps> = (args) => <MIconButton {...args} />;

export const DefaultIconButton = Template.bind({});
DefaultIconButton.args = {
  onClick: () => {},
  children: (<IoIosSend size="40" />)
};

export const IconButtonBorder = Template.bind({});
IconButtonBorder.args = {
  ...DefaultIconButton.args,
  border: 'md'
};

export const IconButtonBorderLg = Template.bind({});
IconButtonBorderLg.args = {
  ...DefaultIconButton.args,
  border: 'lg'
};
