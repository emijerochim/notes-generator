import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { startApolloServer } from "./app.js";

const app = express();

startApolloServer(app, typeDefs, resolvers);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
