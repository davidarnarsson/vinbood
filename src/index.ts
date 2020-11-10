import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import SearchResolver from "./resolvers/SearchResolver";
import { search } from "./data/api";

async function main() {
  const schema = await buildSchema({
    resolvers: [SearchResolver],
    validate: true,
  });

  const server = new ApolloServer({
    playground: true,
    schema,
  });

  const { url } = await server.listen(process.env.PORT ?? 3000);

  console.log(`Vinbood running: ${url}`);
}

(async () => await main())();
