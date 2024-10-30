import 'modern-normalize';
import './App.css';
import { useState, useEffect } from 'react';
import Descriptions from './Description/Descriptions';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [data, setData] = useState(() => {
    const savedState = localStorage.getItem('saved-state');
    if (savedState) {
      return JSON.parse(savedState);
    }

    return {
      Good: 0,
      Neutral: 0,
      Bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('saved-state', JSON.stringify(data));
  }, [data]);

  const { Good, Neutral, Bad } = data;
  const totalFeedback = Good + Neutral + Bad;
  const positiveFeedback = Math.round((Good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setData(prev => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 };
    });
  };

  const resetFeedback = () => {
    setData({
      Good: 0,
      Neutral: 0,
      Bad: 0,
    });
  };

  return (
    <>
      <Descriptions />
      <Options
        data={data}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback data={data} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
