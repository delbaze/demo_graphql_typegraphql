import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { WilderResolver } from "./graphql/resolvers";
import datasource from "./lib/datasource";
import { buildSchema } from "type-graphql";
import "reflect-metadata";

const start = async (): Promise<void> => {
  const schema = await buildSchema({ resolvers: [WilderResolver], validate: false });
  const server = new ApolloServer({
    schema,
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
