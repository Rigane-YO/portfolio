import React from "react";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerStar}>
        {[...Array(30)].map((_, i) => (
          <div key={i} className={styles.star1}></div>
        ))}
        {[...Array(30)].map((_, i) => (
          <div key={i + 30} className={styles.star2}></div>
        ))}
      </div>
      <div className={styles.containerTitle}>
        <div className={styles.title}>
          <span className={styles.number}>4</span>
          <div className={styles.moon}>
            <div className={styles.face}>
              <div className={styles.eyes}>
                <div className={styles.eyeLeft}></div>
                <div className={styles.eyeRight}></div>
              </div>
              <div className={styles.mouth}></div>
            </div>
          </div>
          <span className={styles.number}>4</span>
        </div>
        <p className={styles.subtitle}>Oops! Page not found</p>
        <button onClick={() => window.location.href = "/"}>Go Home</button>
      </div>
      <div className={styles.containerBird}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`${styles.birdAnim} ${styles[`bird${i + 1}`]}`}></div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;



