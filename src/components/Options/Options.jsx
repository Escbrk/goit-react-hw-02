import css from "./Options.module.css";

const Options = ({ value, total, reset }) => {
  return (
    <ul className={css.listContainer}>
      <li>
        <button name="good" type="button" onClick={value}>
          Good
        </button>
      </li>
      <li>
        <button name="neutral" type="button" onClick={value}>
          Neutral
        </button>
      </li>
      <li>
        <button name="bad" type="button" onClick={value}>
          Bad
        </button>
      </li>
      {total > 0 && (
        <li>
          <button name="reset" type="button" onClick={reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
