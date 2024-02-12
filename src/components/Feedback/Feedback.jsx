// import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      {/* <li></li>
      <li></li> */}
    </ul>
  );
};

export default Feedback;
