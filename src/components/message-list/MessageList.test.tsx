import { render, screen } from '@testing-library/react';
import { ManyMessages } from './MessageList.stories';

it('renders Message list with Many messages', async () => {
  render(<ManyMessages {...ManyMessages.args} />);
  expect(screen.getAllByAltText('User who send this message')).toHaveLength(3);
});
