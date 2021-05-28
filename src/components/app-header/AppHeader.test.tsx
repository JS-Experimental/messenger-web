import { render, screen } from '@testing-library/react';

import { Main } from './AppHeader.stories';
import { ComponentWithMui } from '../../config/testSetups';

it('renders App Header', async () => {
  render(
    <ComponentWithMui>
      <Main {...Main.args} />
    </ComponentWithMui>
  );
  expect(screen.getByText('Messenger')).toBeInTheDocument();
});
