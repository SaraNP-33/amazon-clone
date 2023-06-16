import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api-us-west-2.hygraph.com/v2/cliyfjadx083i01uuasw36bz0/master',
        useGETForQueries:true,
    }),
    cache: new InMemoryCache(),
  });

  export default client;