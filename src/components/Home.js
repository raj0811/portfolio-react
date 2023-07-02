import React from 'react';
import Typewriter from 'react-typewriter-effect';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <h1>Hi There ....</h1>
          <h2 className={styles.type}>Hello I am Raj Barmaiya </h2>
          <div className={styles.ico}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
