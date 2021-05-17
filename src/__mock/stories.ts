import MockAdapter from 'axios-mock-adapter';
import { HTTP } from '@metall/common1';
import { ManyMessages } from '../components/message-list/MessageList.stories';

export default function installMockStories() {
  const mock = new MockAdapter(HTTP.createClient('http://localhost:4000/api/'));

  mock.onGet('/messages').reply(200, {
    ...ManyMessages.args
  });
}
