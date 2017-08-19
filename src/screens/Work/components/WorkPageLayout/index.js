import React from 'react';
import Footer from 'components/Footer/index.js';
import styles from './styles.css';

const WorkPageLayout = ({ children }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.childContainer}>{children}</div>
    </main>

    <Footer className={styles.footer} />
  </div>
);

export default WorkPageLayout;
