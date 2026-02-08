import styles from './TimeElapsed.module.scss';

const TimeElapsed = ({ time }) => {
  return (
    <div className={styles.timeElapsed}>
      <p>{time}</p>
    </div>
  );
};

export default TimeElapsed;
