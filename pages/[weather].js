import React from 'react';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { query } from '../graphql/query';
import Layout from '../components/Layout';

function Weather({ data }) {
  return <Layout data={data} />;
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { lat, lon } = context.query;
  const parsedQuery = { lat: parseFloat(lat), lon: parseFloat(lon) };

  const { data } = await apolloClient.query({
    query,
    variables: parsedQuery
  });

  const { GetWeather } = data;

  return addApolloState(apolloClient, {
    props: { data: GetWeather }
  });
}

export default Weather;
