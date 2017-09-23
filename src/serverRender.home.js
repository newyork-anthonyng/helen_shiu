import React from 'react';
import App from '../src/screens/App';
import { StaticRouter } from "react-router";
import { renderToString } from 'react-dom/server';

function serverRender(req, res) {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.render('home', { markup });
}

export default serverRender;
