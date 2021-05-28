import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HTTP } from '@metall/common1';
import { LayoutMain } from './components/layouts/layout-main/LayoutMain';
import { theme, variables } from './config/theme/Theme.v1';
import { ChatPage } from './components/pages/chat-page/ChatPage';
// import { installHttpMock } from './__mock/installHttpMock';

function App() {
  // HTTP.createClient('/api');
  HTTP.createClient('https://messenger-web-api.herokuapp.com/api');

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  // installHttpMock();
  return (
    <MuiThemeProvider theme={{ ...theme, ...variables }}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <LayoutMain>
            <Router>
              <Switch>
                <Route path="/messenger">
                  <ChatPage />
                </Route>
              </Switch>
            </Router>
          </LayoutMain>
        </div>
      </QueryClientProvider>
    </MuiThemeProvider>
  );
}

export default App;
