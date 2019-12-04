const jsonServer = require('json-server');
const server = jsonServer.create();
const rewriter = jsonServer.rewriter({
  "/api/*": "/$1",
  "/movies/dashboard-items": "/movies-dashboard-items"
});
const router = jsonServer.router('./src/mocks/data.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(rewriter);
server.use(router);
server.listen(port);
