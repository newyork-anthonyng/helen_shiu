import React from 'react';
import styles from './styles.css';

const WinnieThePooh = () => (
  <div>
    <h1>The Complete Tales of Winnie the Pooh</h1>

    <img src="/winnie/winnie_1.jpg" />

    <p>
      Combining my favorite childhood Disney character, Winnie the Pooh, and my interest in paper crafts, I redesigned the book cover for The Complete Tales of Winnie the Pooh by A. A. Milne with my interpretation of the stories using card stock paper. The book cover draws from memories of creating elementary school diorama projects, light hearted life lessons, and never ending adventures with friends.
    </p>

    <img src="/winnie/winnie_2.jpg" />

    <p>
      Student work created using InDesign and Photoshop
    </p>

    <div className={styles.squareImageContainer}>
      <div className={styles.imageWrapper}><img src="/winnie/winnie_3.jpg" /></div>
      <div className={styles.imageWrapper}><img src="/winnie/winnie_4.jpg" /></div>
      <div className={styles.imageWrapper}><img src="/winnie/winnie_5.jpg" /></div>
      <div className={styles.imageWrapper}><img src="/winnie/winnie_6.jpg" /></div>
    </div>

    <p>
      With more card stock paper available to use, I continued building on my initial creation as a personal side project.
    </p>

    <div className={styles.gridImageContainer}>
      <div className={styles.gridOne}>
        <img src="/winnie/winnie_7.jpg" />
      </div>
      <div className={styles.gridTwo}>
        <img src="/winnie/winnie_8.jpg" />
        <img src="/winnie/winnie_9.jpg" />
        <img src="/winnie/winnie_10.jpg" />
      </div>
    </div>
  </div>
);

export default WinnieThePooh;
