import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (e) => {
    const target = e.target.textContent.toLowerCase();

    switch (target) {
      case "good":
        setReview(() => ({
          ...review,
          good: review.good + 1,
        }));
        break;

      case "neutral":
        setReview(() => ({
          ...review,
          neutral: review.neutral + 1,
        }));
        break;

      case "bad":
        setReview(() => ({
          ...review,
          bad: review.bad + 1,
        }));
        break;

      default:
        setReview(() => ({
          good: 0,
          neutral: 0,
          bad: 0,
        }));
        break;
    }
  };

  return (
    <div>
      <Description />
      <Options value={updateFeedback} />
      <Feedback good={review.good} neutral={review.neutral} bad={review.bad} />
    </div>
  );
};

export default App;
