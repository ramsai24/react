import "./search.css";

export const Search = (props) => {
  const { onSearchEl } = props;
  return (
    <div className="search-container">
      <input
        id="inputEl"
        onInput={onSearchEl}
        className="input-search-element "
        type="text"
        placeholder="Search for companies and press enter....."
      />
      <button className="btn btn-primary seach" type="button">
        Search
      </button>
    </div>
  );
};
