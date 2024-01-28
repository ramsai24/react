import "./search.css";

export const Search = (props) => {
  const { onSearchEl, onSearchBtn } = props;
  return (
    <div className="search-container">
      <input
        id="inputEl"
        className="input-search-element "
        type="text"
        placeholder="Search for companies and press enter....."
        onInput={onSearchEl}
      />
      <button
        className="btn btn-primary seach"
        type="button"
        onClick={onSearchBtn}
      >
        Search
      </button>
    </div>
  );
};
