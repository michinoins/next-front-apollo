import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Update to match your GraphQL server's URI
  cache: new InMemoryCache(),
});

export default apolloClient;
