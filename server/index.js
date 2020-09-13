// import path from "path";
// import fs from "fs";

// import React from "react";
// import express from "express";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
// import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
// import theme from "../src/theme";

// import App from "../src/App";

// const PORT = process.env.PORT || 3006;
// const app = express();

// app.get("/*", (req, res) => {
//   const context = {};
//   const sheets = new ServerStyleSheets();
//   const app = ReactDOMServer.renderToString(
//     sheets.collect(
//       <ThemeProvider theme={theme}>
//         <StaticRouter location={req.url} context={context}>
//           <App />
//         </StaticRouter>
//       </ThemeProvider>
//     )
//   );

//   const indexFile = path.resolve("./build/index.html");
//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.error("Something went wrong:", err);
//       return res.status(500).send("Oops, better luck next time!");
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });

// app.listen(PORT, () => {
//   console.log(`😎 Server is listening on port ${PORT}`);
// });

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import App from "../src/App";
import theme from "../src/theme";
import { StaticRouter } from "react-router-dom";

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>My page</title>
        <style id="jss-server-side">${css}</style>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <body>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  // Render the component to a string.
  const context = {};
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    )
  );

  // Grab the CSS from our sheets.
  const css = sheets.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css));
}

const app = express();

app.use("./build/index.html", express.static("build"));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${port}`);
});
