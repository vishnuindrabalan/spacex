import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import serialize from "serialize-javascript";
import loadData from "../src/helpers/loadData";

import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/*", (req, res) => {
  let promise;
  promise = loadData();
  promise.then((data) => {
    const context = { data };
    const sheets = new ServerStyleSheets();
    const app = ReactDOMServer.renderToString(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      )
    );

    const indexFile = path.resolve("./build/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }
      const css = sheets.toString();
      return res.send(
        data
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            '<style id="jss-server-side"></style>',
            `<style id="jss-server-side">${css}</style>`
          )
          .replace(
            "</body>",
            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
