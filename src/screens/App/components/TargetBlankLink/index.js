import React from 'react';

const TargetBlankLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default TargetBlankLink;
