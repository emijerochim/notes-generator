import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";

async function startApolloServer(app, typeDefs, resolvers) {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  httpServer.listen({ port: 3000 }, () => {
    console.log(`🚀 Server ready at http://localhost:3000/graphql`);
  });
}

export { startApolloServer };
