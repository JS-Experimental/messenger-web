import {MuiThemeProvider} from "@material-ui/core";
import {theme, variables} from "../src/config/theme/Theme.v1";
// import installMockStories from "../src/__mock/stories";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import {installHttpMock} from "../src/__mock/installHttpMock";
import {HTTP} from "@metall/common1";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

installHttpMock();

HTTP.createClient('http://localhost:4000/api');

export const decorators = [
  (Story) => {

    const queryClient = new QueryClient();

    return (
        <MuiThemeProvider theme={{...theme, ...variables}}>
          <QueryClientProvider client={queryClient}>
            <Story />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MuiThemeProvider>
    )
  }
];