import React from 'react';
import Work from '../src/screens/Work';
import { StaticRouter } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from "fs";

let workFiles = [];
let cssLinks = "";

fs.readdir("./dist", (err, files) => {
  workFiles = files.filter(file => {
    const shouldSave = file.indexOf("work.client") !== -1 || file.indexOf("vendor.client") !== -1;
    return shouldSave;
  });

  // construct CSS links
  workFiles
    .filter(file => file.indexOf(".css") !== -1)
    .forEach(file => {
      cssLinks += `
        <link rel="stylesheet" type="text/css" href="../${file}">
      `;
    });
});

function renderHead() {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Helen Shiu</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
        ${cssLinks}
      </head>
      <body>
  `;
}

function renderEnd(markup) {
  return `
      <div id="app">${markup}</div>

      <script type="text/javascript">
        // Register Service worker
        (function(serviceWorkerFilename) {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register(serviceWorkerFilename)
              .then(function() {
                console.log('Service worker registered!');
              })
              .catch(function(error) {
                console.log('Error registering service worker: ', error);
              });
          } else {
            log('Not supported by browser');
          }
        })('../sw.js');
      </script>
    </body>
  </html>
  `;
}

function serverRender(req, res) {
  // Stream <head> first because renderToString is synchronous
  const head = renderHead();
  res.write(head);

  const markup = renderToStaticMarkup(
    <StaticRouter context={{}} location={req.url}>
      <Work />
    </StaticRouter>
  );
  const end = renderEnd(markup);
  res.write(end);

  res.end();
}

// function serverRender(req, res) {
//   const markup = renderToStaticMarkup(
//     <StaticRouter context={{}} location={req.url}>
//       <Work />
//     </StaticRouter>
//   );
//   res.render('work', { markup });
// }

export default serverRender;
