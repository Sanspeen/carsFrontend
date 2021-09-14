import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    const {register, formState: {errors }, handleSubmit} = useForm();

    const [cars, setcars] = useState([])

    const onSubmit = (data, e) =>{
        setcars([
            ...cars,
            data
        ])
        e.target.reset();
    }

    return ( 
        <Fragment >
            <center><h1>INGRESE LOS DATOS DE SU VEHICULO.</h1></center><br></br>
            <form className = "col-sm" onSubmit = {handleSubmit(onSubmit)}>

                <input
                    type = "text"
                    placeholder = "MARCA"
                    className = "form-control"
                    name = "mark"
                ></input><br></br>

                <input
                    type = "text"
                    placeholder = "MODELO"
                    className = "form-control"
                    name = "model"
                ></input><br></br>

                <input
                    type = "text"
                    placeholder = "ORIGEN"
                    className = "form-control"
                    name = "origin"
                ></input><br></br>

                <select type = "text" name="isElectric"  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="Yes">Sí</option>
                    <option value="No" selected>No</option>
                </select><br></br><br></br>
                <input
                    type = "text"
                    placeholder = "MARCA"
                    className = "form-control"
                    name = "mark"
                ></input><br></br>

                <center><button className="btn btn-primary" type="submit">AGREGAR</button></center>

            </form>

        </Fragment>
     );
}
 
export default Form;