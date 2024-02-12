import css from "./Options.module.css";

const Options = ({fn}) => {
  return (
    <ul className={css.listContainer}>
      <li>
        <button type="button" onClick={fn}>
          Good
        </button>
      </li>
      <li>
        <button type="button">Neutral</button>
      </li>
      <li>
        <button type="button">Bad</button>
      </li>
      {/* <li>
        <button type="button">Reset</button>
      </li> */}
    </ul>
  );
};

export default Options;
