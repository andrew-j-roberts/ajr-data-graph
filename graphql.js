import { ApolloServer } from 'apollo-server-lambda'
import typeDefs from './schema'
import resolvers from './resolvers'

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  }
});