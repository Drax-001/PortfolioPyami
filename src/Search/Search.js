import React, { useEffect, useState } from "react";
import search from "./search.gif";
import "./search.css";

export default function Search({ text, length, searchtext }) {
  const [projLength, setLength] = useState(length);

  useEffect(() => {
    if (text === "") {
      setLength("22 projects");
    } else if (length === 0) {
      setLength("No projects");
    } else if (length === 1) {
      setLength(`${length} project`);
    } else {
      setLength(`${length} projects`);
    }
  }, [length, text]);

  return (
    <div className="searchBox">
      <img src={search} alt="searchIcon" />
      <input
        type="text"
        placeholder="Category...."
        value={text}
        onInput={(e) => searchtext(e.target.value)}
      />
      <div className="results">
        <p>{projLength}</p>
      </div>
    </div>
  );
}
