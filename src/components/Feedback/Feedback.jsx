import styles from './Feedback.module.css';
export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  PositiveFeedback,
}) {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} ${styles.good}`}>Good:{good}</p>
      <p className={styles.text}>Neutral:{neutral}</p>
      <p className={`${styles.text} && ${styles.bad}`}>Bad:{bad}</p>
      <p className={styles.text}>Total:{totalFeedback}</p>
      <p className={`${styles.text} && ${styles.positive}`}>
        Positive:{PositiveFeedback}%
      </p>
    </div>
  );
}
