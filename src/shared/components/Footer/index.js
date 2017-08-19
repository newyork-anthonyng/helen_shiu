import React from 'react';
import T from 'prop-types';

const Footer = ({ className }) => (
  <footer className={className}>
    © 2017 Helen Shiu. All rights reserved.
  </footer>
);

Footer.propTypes = {
  className: T.string,
};

export default Footer;
