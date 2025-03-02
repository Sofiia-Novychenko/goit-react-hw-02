import styles from './Options.module.css';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { BsEmojiNeutral } from 'react-icons/bs';
import { RiResetLeftFill } from 'react-icons/ri';
export default function Options({
  updateFeedback,
  totalFeedback,
  handleReset,
}) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => updateFeedback('good')}>
        Good <AiOutlineLike />
      </button>
      <button className={styles.btn} onClick={() => updateFeedback('neutral')}>
        Neutral <BsEmojiNeutral />
      </button>
      <button className={styles.btn} onClick={() => updateFeedback('bad')}>
        Bad <AiOutlineDislike />
      </button>
      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={handleReset}>
          Reset <RiResetLeftFill />
        </button>
      )}
    </div>
  );
}
