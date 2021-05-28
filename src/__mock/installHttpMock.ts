import { createServer } from 'miragejs';
import { ManyMessages } from '../components/message-list/MessageList.stories';

export const installHttpMock = ({ environment = 'dev' } = {}) => {
  createServer({
    environment,
    routes() {
      this.urlPrefix = 'http://localhost:4000';
      this.namespace = '/api';

      this.get('/messages', () => ({
        ...ManyMessages.args
      }));
    }
  });
};
