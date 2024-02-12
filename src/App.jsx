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

  const updateFeedback = () => {
    setReview(review => ({
      ...review,
      good: review.good + 1
    }))
  };

  return (
    <div>
      <Description />
      <Options fn={updateFeedback} />
      <Feedback good={review.good} neutral={review.neutral} bad={review.bad} />
    </div>
  );
};

export default App;
