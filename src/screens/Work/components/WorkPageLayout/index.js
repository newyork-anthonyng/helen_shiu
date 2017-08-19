import React from 'react';
// import Footer from '../../../../shared/Footer';
import Footer from 'components/Footer/index.js';
import styles from './styles.css';

const WorkPageLayout = ({ children }) => (
  <div className={styles.container}>
    {children}

    <Footer />
  </div>
);

export default WorkPageLayout;
