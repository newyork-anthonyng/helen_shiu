import React from 'react';
import styles from './styles.css';

const WorkPageLayout = ({ children }) => (
  <div className={styles.container}>
    {children}

    <footer>© 2017 Helen Shiu. All rights reserved.</footer>
  </div>
);

export default WorkPageLayout;
