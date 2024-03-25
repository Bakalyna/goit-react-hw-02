import css from './Options.module.css';
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const handleClick = e => {
    updateFeedback(e.target.textContent.toLowerCase());
  };
  return (
    <div className={css['options-btn']}>
      <button onClick={handleClick}>Good</button>
      <button onClick={handleClick}>Neutral</button>
      <button onClick={handleClick}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
