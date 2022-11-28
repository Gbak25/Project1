import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { mostViewdData, newData } from '../../../infrastructure/data/data';
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
            {newData.map((d) => {
              return (
                <li key={d.id} className={styles.newitemcontainer}>
                  <img src={d.thumbnailPath} />
                  {d.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.mostcontainer}>
          <p className={styles.title}> Most Viewed</p>
          <ul>
            {mostViewdData.map((d) => {
              return (
                <li key={d.id} className={styles.newitemcontainer2}>
                  <img src={d.thumbnailPath} />
                  <div className={styles.mrspace}>
                    <div>
                      <p className={styles.title2}>{d.title}</p>
                      <p className={styles.name}>{d.uploaderName}</p>
                    </div>
                    <p className={styles.date}>{d.createdAt}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(Home, isEqual);
