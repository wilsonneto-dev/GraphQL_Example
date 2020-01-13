const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://omni:omni@cluster0-o37eq.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUriParser: true
  }
);

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers: resolvers
});

server.start();
