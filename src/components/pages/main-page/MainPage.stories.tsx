import { Story, Meta } from '@storybook/react/types-6-0';
import { MainPage } from './MainPage';

export default {
  title: 'Pages/Main',
  component: MainPage
} as Meta;

const Template:Story = (args: any) => <MainPage {...args} />;

export const Default = Template.bind({});
