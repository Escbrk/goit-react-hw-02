import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = review;

  const updateFeedback = (e) => {
    const target = e.target.textContent.toLowerCase();

    switch (target) {
      case "good":
        setReview(() => ({
          ...review,
          good: good + 1,
        }));
        break;

      case "neutral":
        setReview(() => ({
          ...review,
          neutral: neutral + 1,
        }));
        break;

      case "bad":
        setReview(() => ({
          ...review,
          bad: bad + 1,
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

  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

  const reviews = {
    good,
    neutral,
    bad,
    total: totalFeedback,
    positive,
  };
  localStorage.setItem("reviews", JSON.stringify(reviews))
  

  return (
    <div className="container">
      <Description />
      <Options value={updateFeedback} total={totalFeedback} />
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
