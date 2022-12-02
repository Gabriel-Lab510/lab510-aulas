import {  ApolloClient, InMemoryCache  } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clb5eh7di047n01t57qdv1j5b/master',
  cache: new InMemoryCache()
})