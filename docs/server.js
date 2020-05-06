const express = require("express");
const next = require("next");
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { prepPages } = require("./compile/makePages");

const { exportMap } = prepPages();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    if (req.url in exportMap) {
      let { page, ...rest } = exportMap[req.url];
      return app.render(req, res, page, rest);
    } else {
      console.log("Unhandled URL:", req.url);
      return handle(req, res);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});