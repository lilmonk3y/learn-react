import './TodoSearch.css';
import '../Header.css'
import React from "react";

interface TodoSearchType {
    searchValue :string,
    setSearchValue :React.Dispatch<React.SetStateAction<string>>,
    loading? : boolean,
}

function TodoSearch({searchValue, setSearchValue, loading} : TodoSearchType) {
    return (
        <div className="search" >
            <input
                className={`search_button ${loading && "loading"}`}
                placeholder="¿Qué quieres buscar?"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                disabled={loading}
            />
        </div>
    );
}

export {TodoSearch}