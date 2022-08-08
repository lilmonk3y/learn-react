import './TodoSearch.css'
import React from "react";
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext) as TodoContextType

    return (
        <div className="search" >
            <input
                className="search_button"
                placeholder="¿Qué quieres buscar?"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}/>
        </div>
    )
}

export {TodoSearch}