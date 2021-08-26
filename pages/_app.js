// state
import { Provider } from 'react-redux';
import { store } from '../state/store';
// react
import React, { Fragment } from 'react';
import Head from 'next/head';
// styles
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/index';
import { Main as MainLayout } from '../ui/layouts';



function GSFApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Global Secure Finance: Application</title>
        <meta name='viewport' content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
         <MainLayout>
           <Component {...pageProps} />
         </MainLayout>
        </ThemeProvider>
      </Provider>
    </Fragment>
  )
}

export default GSFApp;
