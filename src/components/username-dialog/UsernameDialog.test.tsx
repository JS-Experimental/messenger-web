import { render, screen } from '@testing-library/react';
import { Dialog, DialogOpen } from './UsernameDialog.stories';

describe('Username dialog', () => {
  it.only('renders closed Dialog story', async () => {
    render(<Dialog {...Dialog.args} />);
  });

  it.only('renders open Dialog story', async () => {
    render(<DialogOpen {...DialogOpen.args} />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });
});
