const express = require("express");
const cors = require("cors");
const http = require("http")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const bodyParser = require("body-parser");
const typeDefs = require("./graphql/typeDefs.ts")
const resolvers = require("./graphql/resolvers.ts")
const upload = multer();
const router = require("./routes/router");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

dotenv.config();

const startApp = async () => {
  const app = express();
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start();

  app.use(cors());
  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/", require("./routes/userRouter"));
  app.use("/", router);

  const gqlRouter = express.Router();

  app.use('/graphql', [expressMiddleware(server)]);

  const port = process.env.PORT || 7000;

  const MONGO_URL = process.env.MONGO_URL;
  mongoose.connect(MONGO_URL);


  httpServer.listen({port: port}, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startApp()