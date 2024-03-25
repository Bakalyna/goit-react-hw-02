import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notifications from './components/Notifications/Notifications';
import './App.css';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = JSON.parse(window.localStorage.getItem('key'));
    return savedReviews !== null
      ? savedReviews
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    if (reviews !== null) {
      window.localStorage.setItem('key', JSON.stringify(reviews));
    }
  }, [reviews]);

  const updateFeedback = feedbackType => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notifications />
      )}
    </>
  );
}
export default App;
