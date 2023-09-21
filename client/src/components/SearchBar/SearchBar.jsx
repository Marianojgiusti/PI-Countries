import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountriesbyname } from "../../redux/actions";
import "./Search.style.css";

export const SearchBar = ({ setCurrentPage, setNoResults }) => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setState(e.target.value);
    setNoResults(false); // Reiniciamos el estado cuando se realiza una nueva búsqueda
  }

  useEffect(() => {
    dispatch(getCountriesbyname(state))
      .then((response) => {
        // Verificamos si la búsqueda no devolvió ningún resultado
        if (response && response.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false); // Restablecemos a false si se encuentran resultados
        }
      })
      .catch((error) => {
        console.error("Error al buscar países:", error);
      });

    setCurrentPage(1);
  }, [state, setCurrentPage, dispatch, setNoResults]);

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