import express from 'express';
import path from 'path';

import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from './src/screens/App';

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'dist', 'views'));

app.get('*', (req, res) => {
  const context = {};
  const markup = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  if (context.status === 404) {
    res.status(404).render('index', { markup });
  } else {
    res.render('index', { markup });
  }
});

app.listen(3000, () => {
  console.log('Server running on PORT 3000');
});
