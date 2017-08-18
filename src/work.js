import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Work from './screens/Work';

ReactDOM.render(
  <BrowserRouter>
    <Work />
  </BrowserRouter>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
