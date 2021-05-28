import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MyMessage } from './MessageElement.stories';

it('renders the button in the primary state', async () => {
  render(<MyMessage {...MyMessage.args} />);
  expect(screen.getAllByAltText('User who send this message')).toHaveLength(1);
});
