import { memo } from 'react';
import isEqual from 'react-fast-compare';
import styles from './style.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.herocontainer} ${styles.testcolor}`}>
        <img src="leftarrow.svg" />
        <img className={styles.Group7} src="Group 7.svg" />
        <img src="arrow.svg" />
      </div>

      <div className={styles.videocontainer}>
        <div className={styles.newcontainer}>
          <p className={styles.title}> What's New</p>
          <ul>
            <li className={styles.newitemcontainer}>
              <img src="Rectangle 35.png" /> afdfdfs
            </li>
            <li className={styles.newitemcontainer}>
              <img src="Rectangle 36.png" /> afdfdfs
            </li>
            <li className={styles.newitemcontainer}>
              <img src="Rectangle 37.png" /> afdfdfs
            </li>
            <li className={styles.newitemcontainer}>
              <img src="Rectangle 35.png" /> afdfdfs
            </li>
            <li className={styles.newitemcontainer}>
              <img src="Rectangle 36.png" /> afdfdfs
            </li>
            <li className={styles.newitemcontainer}>
              <img src="Rectangle 37.png" /> afdfdfs
            </li>
          </ul>
        </div>
        <div className={styles.mostcontainer}>
          <p className={styles.title}> Most Viewed</p>
          <ul>
            <li className={styles.newitemcontainer2}>
              <img src="R1.png" />
              <div className={styles.mrspace}>
                <div>
                  <p className={styles.title2}>Title</p>
                  <p className={styles.name}>Name</p>
                </div>
                <p className={styles.date}>Date</p>
              </div>
            </li>

            <li className={styles.newitemcontainer2}>
              <img src="R2.png" />
              <div className={styles.mrspace}>
                <div>
                  <p className={styles.title2}>Title</p>
                  <p className={styles.name}>Name</p>
                </div>
                <p className={styles.date}>Date</p>
              </div>
            </li>
            <li className={styles.newitemcontainer2}>
              <img src="R3.png" />
              <div className={styles.mrspace}>
                <div>
                  <p className={styles.title2}>Title</p>
                  <p className={styles.name}>Name</p>
                </div>
                <p className={styles.date}>Date</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(Home, isEqual);
