import React from 'react';
import App from '../src/screens/App';
import { renderToString } from 'react-dom/server';

import path from 'path';

function serverRender(req, res) {
  const markup = renderToString(<App />);
  res.render('client', { markup });
}

export default serverRender;
