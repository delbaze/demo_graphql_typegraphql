import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
console.log('%c⧭', 'color: #00e600', resolvers);

import datasource from "./lib/datasource";
const start = async (): Promise<void> => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  server.listen().then(async (data) => {
    await datasource.initialize();
    console.log(`le serveur a été lancé sur ${data.url}`);
  });
};

start();
