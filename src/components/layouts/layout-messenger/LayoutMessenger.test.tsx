import { render, screen } from '@testing-library/react';
import { ComponentWithMuiAndReactQuery } from '../../../config/testSetups';
import { ChatScreen } from './LayoutMessenger.stories';

it('renders Messenger layout', async () => {
  render(
    <ComponentWithMuiAndReactQuery>
      <ChatScreen {...ChatScreen.args} />
    </ComponentWithMuiAndReactQuery>
  );
  expect(screen.getByText('Messenger')).toBeInTheDocument();
});
