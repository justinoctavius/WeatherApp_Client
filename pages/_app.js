import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { useApollo } from '../lib/apolloClient';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>WeatherApp</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charset="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* google font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Goldman&family=Poppins&display=swap"
            rel="stylesheet"
          />
          {/* font awesome */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
            crossorigin="anonymous"
          ></link>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
      <style global jsx>{`
        body {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          margin: 0;
          padding: 0;
          height: 100vh;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default MyApp;
