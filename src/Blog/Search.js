import React from "react";

const Search = ({ search }) => {
  return (
    <div id="search_box">
      <label className="fa fa-search lens" />
      <input
        onInput={(e) => search(e.target.value)}
        type="text"
        placeholder="Search my blogs"
        id="search_bar"
      />
    </div>
  );
};

export default Search;
