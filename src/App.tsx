import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HTTP } from '@metall/common1';
import { LayoutMessenger } from './components/layouts/layout-messenger/LayoutMessenger';
import { theme, variables } from './config/theme/Theme.v1';
import { ChatPage } from './components/pages/chat-page/ChatPage';
import { installHttpMock } from './__mock/installHttpMock';
import { MainPage } from './components/pages/main-page/MainPage';
import { RouteWithLayout } from './routes/RouteWithLayout';
import { LayoutMain } from './components/layouts/layout-main/LayoutMain';
import { UsernameDialogProvider } from './context/UsernameDialog';

function App() {
  HTTP.createClient('http://localhost:4000/api/');
  // HTTP.createClient('https://messenger-web-api.herokuapp.com/api');

  installHttpMock();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  // installHttpMock();
  return (
  // provide application theme
    <MuiThemeProvider theme={{ ...theme, ...variables }}>

      {/* provide http query client provider */}
      <QueryClientProvider client={queryClient}>

        <UsernameDialogProvider>
          {/* main application block */}
          <div className="App">

            {/* define application routes */}
            <Router>
              <Switch>
                <RouteWithLayout path="/" Layout={LayoutMain} exact>
                  <MainPage />
                </RouteWithLayout>
                <RouteWithLayout path="/messenger" Layout={LayoutMessenger}>
                  <ChatPage />
                </RouteWithLayout>
              </Switch>
            </Router>
          </div>
        </UsernameDialogProvider>
      </QueryClientProvider>
    </MuiThemeProvider>
  );
}

export default App;
