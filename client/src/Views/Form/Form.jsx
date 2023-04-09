import { useState } from "react";
import style from "./Form.module.css"

const Form = ()=>{

    const [form, setform] = useState({
        nombre: "",
        dificultad: "",
        temporada: "",
        countries: [],
        duracion: "",
    });
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        //validate({...form, [property]:value})

        setform({...form, [property]:value})
    };

    const [errors,setErrors]=useState({
        nombre: "",
        dificultad: "",
        temporada: "",
        countries: [],
        duracion: ""
    });

    const validate =(form)=>{

        if(!form.nombre){
            setErrors({...errors,nombre:"Ingrese un nombre"})
        }
        if(form.dificultad>5 || form.dificultad<1){
            setErrors({...errors,dificultad:"Ingrese un valor válido (entre 1 y 5)"})
        }
        if(form.duracion>24 || form.duracion<1){
            setErrors({...errors,duracion:"Ingrese un valor válido (entre 1 y 24)"})
        }

    };

    const submitHandler = (event)=>{
        event.preventDefault()
    }

    return (
        <form onSubmit={submitHandler} className={style.form}>
            <div>
                <label>Nombre: </label>
                <input name="nombre" placeholder="Nombre" type="text" value={form.nombre} onChange={handleChange}></input>
                <span>{errors.nombre}</span>
            </div>

            <div>
                <label>Dificultad: </label>
                <input name="dificultad" placeholder="Dificultad" type="text" value={form.dificultad} onChange={handleChange}></input>
                <span>{errors.dificultad}</span>
            </div>

            <div>
                <label>Duración: </label>
                <input name="duracion" placeholder="Duración" type="text" value={form.duracion} onChange={handleChange}></input>
                <span>{errors.duracion}</span>
            </div>

            <div>
                <label>Temporada: </label>
                <select >
                    <option name="temporada" value="Otoño" onChange={handleChange} selected>Otoño</option>
                    <option name="temporada" value="Invierno" onChange={handleChange}>Invierno</option>
                    <option name="temporada" value="Primavera" onChange={handleChange}>Primavera</option>
                    <option name="temporada" value="Verano" onChange={handleChange}>Verano</option>
                </select>
            </div>
            
            <div>
                <label>País: </label>
                <select name="country" onChange={handleChange}>
                    
                </select>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;