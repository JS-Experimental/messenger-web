import { render, screen } from '@testing-library/react';
import { Default } from './MainPage.stories';
import { ComponentWithMuiAndReactQuery } from '../../../config/testSetups';

it('renders main page', async () => {
  render(
    <ComponentWithMuiAndReactQuery>
      <Default {...Default.args} />
    </ComponentWithMuiAndReactQuery>
  );

  expect(screen.getByText('START CHAT')).toBeInTheDocument();
});
