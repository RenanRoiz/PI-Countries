import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarPorNombre } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar=()=>{
    const [input,setInput]=useState("");
    const dispatch = useDispatch;

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleButton = () => {
        input
            ? dispatch(buscarPorNombre(input)).catch((err) => alert(err.response.data))
            : alert("Ingrese un país");
        setInput('');
    };

    return (
        <div>
            <input className="" placeholder="Ingrese un país" name="name" type="text" value={input} onChange={handleInput}></input>
            <button className={style.boton} onClick={handleButton}></button>
        </div>
    )
}

export default SearchBar;