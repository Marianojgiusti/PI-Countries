import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesbyname } from "../../redux/actions";
import "./Search.style.css";

export const SearchBar = ({ setCurrentPage,}) => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setState(e.target.value);
  }

  useEffect(() => {
    dispatch(getCountriesbyname(state))
    setCurrentPage(1);
  }, [state, setCurrentPage, dispatch]);


  return (
    <div className="searchBar">
      <input
        onChange={(e) => handleInputChange(e)}
        type="text"
        value={state}
        placeholder="Buscar País..."
      />
    </div>
  );
};