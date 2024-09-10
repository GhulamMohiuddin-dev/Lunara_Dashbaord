// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyle } from '../styles/GlobalStyles';
import { store } from '../state/store';
import '../styles/styles.less';
import withAuthorization from '../HOC/Authorization';
import { Role } from '../config/permissions';


const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const role: Role = 'admin';
function MyApp({ Component, pageProps }: AppProps) {
  const AuthorizedComponent = withAuthorization(Component, role); 
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthorizedComponent {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
