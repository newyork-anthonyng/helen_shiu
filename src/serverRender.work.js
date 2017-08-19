import React from 'react';
import Work from '../src/screens/Work';
import { StaticRouter } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';

function serverRender(req, res) {
  const markup = renderToStaticMarkup(
    <StaticRouter context={{}} location={req.url}>
      <Work />
    </StaticRouter>
  );
  res.render('work', { markup });
}

export default serverRender;
