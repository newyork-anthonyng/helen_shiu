const express = require("express");
const path = require("path");
const compression = require("compression");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.use("/static", express.static(path.join(__dirname, "public")));

    server.get("/work/:title", (req, res) => {
      const actualPage = "/work";
      const queryParams = { title: req.params.title };

      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;

      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
