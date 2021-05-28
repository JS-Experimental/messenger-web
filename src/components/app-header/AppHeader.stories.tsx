import { Story, Meta } from '@storybook/react/types-6-0';
import { AppHeader, AppHeaderProps } from './AppHeader';

export default {
  title: 'Components/Application header',
  component: AppHeader
} as Meta;

const Template: Story<AppHeaderProps> = (args) => <AppHeader {...args} />;

export const Main = Template.bind({});
Main.args = {};
