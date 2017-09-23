import React from 'react';
import App from '../src/screens/App';
import { StaticRouter } from "react-router";
import { renderToString } from 'react-dom/server';
import fs from "fs";

let homeFiles = [];
let preloadLinks = "";
let cssLinks = "";
let scriptLinks = "";

fs.readdir("./dist", (err, files) => {
  homeFiles = files.filter(file => {
    const shouldSave = file.indexOf("home.client") !== -1 || file.indexOf("vendor.client") !== -1;
    return shouldSave;
  });

  // construct preload/script links
  homeFiles
    .filter(file => file.indexOf(".css") === -1)
    .forEach(file => {
      preloadLinks += `
      <link ref="preload" href="${file}" as="script">
      `;
      scriptLinks += `
        <script type="text/javascript" src="${file}"></script>
      `;
    });

  // construct CSS links
  homeFiles
    .filter(file => file.indexOf(".css") !== -1)
    .forEach(file => {
      cssLinks += `
        <link rel="stylesheet" type="text/css" href="${file}">
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
        ${preloadLinks}
        ${cssLinks}
      </head>
      <body>
  `;
}

function renderEnd(markup) {
  return `
      <div id="app">${markup}</div>

      ${scriptLinks}

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
        })('sw.js');
      </script>
      <noscript>
        <style>
          .titleOverlay {
            display: none;
          }
        </style>
      </noscript>
    </body>
  </html>
  `;
}

function serverRender(req, res) {
  // Stream <head> first because renderToString is synchronous
  const head = renderHead();
  res.write(head);

  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const end = renderEnd(markup);
  res.write(end);

  res.end();
}

export default serverRender;
