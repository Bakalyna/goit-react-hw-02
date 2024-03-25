import css from './Feedback.module.css';

const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = reviews;
  return (
    <ul className={css['feedback-list']}>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>
        <p>Total:{totalFeedback}</p>
      </li>
      <li>
        <p>Positive:{positiveFeedback}</p>
      </li>
    </ul>
  );
};

export default Feedback;
