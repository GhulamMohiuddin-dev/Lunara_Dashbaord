// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyle } from '../styles/GlobalStyles';
import { store } from '../state/store';
import '../styles/styles.less';

const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
