import { createServer } from 'miragejs';
import { ManyMessages } from '../components/message-list/MessageList.stories';

export const installHttpMock = () => {
  createServer({
    routes() {
      this.urlPrefix = 'http://localhost';
      this.namespace = 'api';

      this.get('/messages', () => ({
        ...ManyMessages.args
      }));
    }
  });
};
