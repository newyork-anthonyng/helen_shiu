import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

const HoverEffectLink = ({ children, className, ...rest }) => (
  <a
    className={cx(styles.hoverEffect, className)}
    data-hover={children}
    {...rest}
  >
    {children}
  </a>
)

HoverEffectLink.propTypes = {
  children: PropTypes.string.isRequired
};

export default HoverEffectLink;
