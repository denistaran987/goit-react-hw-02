import s from './Options.module.css';

const Options = ({ data, updateFeedback, resetFeedback, totalFeedback }) => {
  const keys = Object.keys(data);
  return (
    <div>
      {keys.map(key => {
        return (
          <button className={s.button} key={key} onClick={() => updateFeedback(key)}>
            {key}
          </button>
        );
      })}
      {totalFeedback > 0 && (
        <button className={s.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
