import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const getInitialReview = () => {
  const savedReview = localStorage.getItem("saved-review");
  return savedReview !== null
    ? JSON.parse(savedReview)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
    };
  
  // if (savedReview !== null) {
  //   return JSON.parse(savedReview);
  // }

  // return {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
};

const App = () => {
  const [review, setReview] = useState(getInitialReview);
  const { good, neutral, bad } = review;

  useEffect(() => {
    localStorage.setItem("saved-review", JSON.stringify(review));
  }, [review]);

  const updateFeedback = (e) => {
    const target = e.target.name;

    setReview(() => ({
      ...review,
      [target]: review[target] + 1,
    }));
  };

  const resetFeedback = () => {
    setReview(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div className="container">
      <Description />
      <Options
        value={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
};
export default App;
