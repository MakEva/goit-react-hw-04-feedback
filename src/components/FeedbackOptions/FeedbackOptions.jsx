import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  const feedbackButton = options.map(option => (
    <button
      key={option}
      type="button"
      className={css.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));

  return <div>{feedbackButton}</div>;
};
