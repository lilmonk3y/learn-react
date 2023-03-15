import './TodoSearch.css';
import React from "react";

interface TodoSearchType {
    searchValue :string,
    setSearchValue :React.Dispatch<React.SetStateAction<string>>,
}

function TodoSearch({searchValue, setSearchValue} : TodoSearchType) {
    return (
        <div className="search" >
            <input
                className="search_button"
                placeholder="¿Qué quieres buscar?"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}/>
        </div>
    );
}

export {TodoSearch}