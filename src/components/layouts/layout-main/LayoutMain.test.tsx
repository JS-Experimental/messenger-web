import { render, screen } from '@testing-library/react';
import { ComponentWithMuiAndReactQuery } from '../../../config/testSetups';
import { ChatScreen } from './LayoutMain.stories';

it('renders Main layout', async () => {
  render(
    <ComponentWithMuiAndReactQuery>
      <ChatScreen {...ChatScreen.args} />
    </ComponentWithMuiAndReactQuery>
  );
  expect(screen.getByText('Messenger')).toBeInTheDocument();
});
