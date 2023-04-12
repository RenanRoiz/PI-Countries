import { useState } from "react";
import styles from "./Form.module.css";
import { useSelector } from "react-redux";
import validate from "./validates.js";
import axios from 'axios'

export default function Form() {
  const allCountries = useSelector((state) => state.countries); //Traer los países
  const ordenarCountry = allCountries.sort((a,b)=>{ return a.name.localeCompare(b.name)}) //Ordenar alfabeticamente

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    durationHours:"",
    season: "",
    countries: [],
  });

  const borrarHandler = (country) => {
    const newCountries = form.countries.filter((c) => c !== country);
    setForm({ ...form, countries: newCountries });
  };
  
  const submitHandler = (e) => {
    const validado = validate(form)
    if(validado){
      const countriesId = []
      for(let i = 0; i < form.countries.length; i++){
        for(let k = 0; k < allCountries.length; k++){
          if(form.countries[i] === allCountries[k].name) countriesId.push(allCountries[k].id)
        }
      }
     
      const {name, difficulty, durationHours, season} = form
      const duration = durationHours.toString()
    
      axios.post("http://localhost:3001/activities", {
        "name": name,
        "dificultad": difficulty,
        "temporada": season,
        "duracion": duration,
        "paises": [countriesId]
      })
      e.preventDefault()
      alert("La actividad se creo correctamente")
    } else {
       e.preventDefault()
    }
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    if (property === "countries") {
      if (form.countries.includes(value)) {
        alert(`El pais ${value} ya ha sido seleccionado`);
      } else {
        setForm({ ...form, countries: [...form.countries, value] });
      }
    } else {
      setForm({ ...form, [property]: value });
    }
  };

  return (
    <div className={styles.container}>
    <form className={styles.form}>
      <div>
        <label>Nombre:</label>
        <input onChange={handleChange} name="name" type="text" value={form.name} />
      </div>
      <div>
        <label htmlFor="dificultad"> Selecciona la dificultad: </label>
        <div>
          <label>1.</label>
          <input onChange={handleChange} type="radio" name="difficulty" value="1" checked={form.difficulty === "1"}/>
          <label>2.</label>
          <input onChange={handleChange} type="radio" name="difficulty" value="2" checked={form.difficulty === "2"}/>
          <label>3.</label>
          <input onChange={handleChange} type="radio" name="difficulty" value="3" checked={form.difficulty === "3"}/>
          <label>4.</label>
          <input onChange={handleChange} type="radio" name="difficulty" value="4" checked={form.difficulty === "4"}/>
          <label>5.</label>
          <input onChange={handleChange} type="radio" name="difficulty" value="5" checked={form.difficulty === "5"}/>
        </div>
      </div>
      <div>
        <label>Duracion: </label>
        <input name="durationHours" type="number" min="0" value={form.duration} onChange={handleChange}/>{" "}
      </div>
      <div>
        <label>Temporada:</label>
        <select name="season" onChange={handleChange}>
          <option> Seleccionar temporada </option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
      </div>
      <div>
        <label>Paises:</label>
        <select name="countries" onChange={handleChange}>
          <option key="" value=""> Seleccionar paises</option>
          {ordenarCountry.map((u) => {
            return (<option key={u.name} value={u.name}>{u.name}</option>);})}
        </select>
      </div>
      <div>
        {form.countries.map((c) => (
    <div key={c} value={c} onChange={() => handleChange(c)} className="selected-country">
      {c} <button onClick={() => borrarHandler(c)} name={c}>x</button>
    </div>
  ))}
      </div>
      <button onClick={submitHandler} type="submit"> Crear actividad </button>
    </form>
    </div>
  );
}
