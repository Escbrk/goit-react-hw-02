import css from "./Options.module.css";

const Options = ({ value }) => {
  return (
    <ul className={css.listContainer}>
      <li>
        <button type="button" onClick={value}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={value}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={value}>
          Bad
        </button>
      </li>
      <li>
        <button type="button" onClick={value}>
          Reset
        </button>
      </li>
    </ul>
  );
};

export default Options;
