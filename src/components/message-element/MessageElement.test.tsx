import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BigText, MyMessage, OthersMessage } from './MessageElement.stories';

it('renders MyMessage story', async () => {
  render(<MyMessage {...MyMessage.args} />);
  expect(screen.getAllByAltText('User who send this message')).toHaveLength(1);
});

it('renders BigText story', async () => {
  render(<BigText {...BigText.args} />);
  expect(screen.getAllByAltText('User who send this message')).toHaveLength(1);
});

it('renders OthersMessage story', async () => {
  render(<OthersMessage {...OthersMessage.args} />);
  expect(screen.getAllByAltText('User who send this message')).toHaveLength(1);
});
