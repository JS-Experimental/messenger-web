import { Story, Meta } from '@storybook/react/types-6-0';
import { LayoutMain, LayoutMainProps } from './LayoutMain';
import { MainPage } from '../../pages/main-page/MainPage';

export default {
  title: 'Screens/Main',
  component: LayoutMain
} as Meta;

const Template: Story<LayoutMainProps> = ((args) => <LayoutMain {...args} />);

export const MainScreen = Template.bind({});
MainScreen.args = {
  children: (
    <>
      <MainPage />
    </>
  )
};
