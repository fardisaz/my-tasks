/* global process */
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
server.listen(process.env.PORT || 5001, () => {
  console.log("JSON Server is running");
});
