import { render, screen } from '@testing-library/react';
import { ComponentWithMuiAndReactQuery } from '../../../config/testSetups';
import { MainScreen } from './LayoutMain.stories';

it('renders Main layout', async () => {
  render(
    <ComponentWithMuiAndReactQuery>
      <MainScreen {...MainScreen.args} />
    </ComponentWithMuiAndReactQuery>
  );
  expect(screen.getByText('Messenger')).toBeInTheDocument();
  expect(screen.getByText('START CHAT')).toBeInTheDocument();
});
