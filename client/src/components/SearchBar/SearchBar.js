import { React } from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {

  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Filtre pela linguagem que preferir."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
