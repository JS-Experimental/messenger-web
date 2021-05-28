import { render, screen } from '@testing-library/react';
import { EmptyInput } from './MessageInput.stories';

it('renders MessageInput story', async () => {
  render(<EmptyInput {...EmptyInput.args} />);
  expect(screen.getByLabelText('Input message')).toBeInTheDocument();
});
