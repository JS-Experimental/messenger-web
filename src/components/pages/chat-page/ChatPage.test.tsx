import { render, screen, waitFor } from '@testing-library/react';
import { Default } from './ChatPage.stories';
import { ComponentWithMuiAndReactQuery } from '../../../config/testSetups';

it('renders Message list with Many messages', async () => {
  render(
    <ComponentWithMuiAndReactQuery>
      <Default {...Default.args} />
    </ComponentWithMuiAndReactQuery>
  );

  const item = await waitFor(() => screen.getAllByAltText('User who send this message'));
  expect(item).toHaveLength(3);
});
