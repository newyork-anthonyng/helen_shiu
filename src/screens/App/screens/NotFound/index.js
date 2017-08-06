import React from 'react';
import Status from 'components/Status';

const NotFound = () => (
  <Status code={404}>
    <h1>Page Not Found. Sad Face.</h1>
  </Status>
);

export default NotFound;
