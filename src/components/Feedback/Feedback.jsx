import s from './Feedback.module.css';

const Feedback = ({ data, totalFeedback, positiveFeedback }) => {
  const { Good, Neutral, Bad } = data;
  return (
    <div>
      <ul className={s['feedback-list']}>
        <li className={s.good}>{`Good: ${Good}`}</li>
        <li className={s.neutral}>{`Neutral: ${Neutral}`}</li>
        <li className={s.bad}>{`Bad: ${Bad}`}</li>
        <li className={s.total}>{`Total: ${totalFeedback}`}</li>
        <li className={s.positive}>{`Positive: ${positiveFeedback}%`}</li>
      </ul>
    </div>
  );
};

export default Feedback;
