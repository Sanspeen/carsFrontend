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
                    {...register("mark", {required: true})}
                ></input>
                {errors.mark && <span className = "text-danger text-small d-block mb-2"> El campo "Marca" es obligatorio.</span>}
                <br></br>

                <input
                    type = "text"
                    placeholder = "MODELO"
                    className = "form-control"
                    name = "model"
                    {...register("model", {required: true})}
                ></input>
                {errors.model && <span className = "text-danger text-small d-block mb-2"> El campo "Modelo" es obligatorio.</span>}
                <br></br>

                <input
                    type = "text"
                    placeholder = "ORIGEN"
                    className = "form-control"
                    name = "origin"
                    {...register("origin", {required: true})}
                ></input>
                {errors.origin && <span className = "text-danger text-small d-block mb-2"> El campo "Origen" es obligatorio.</span>}
                <br></br>

                <select type = "text" name="isElectric"  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" {...register("isElectric", {required: true})}>
                    <option value={true}>Sí</option>
                    <option value={false} selected>No</option>
                </select><br></br><br></br>
                <input
                    type = "text"
                    placeholder = "CILINDRAJE"
                    className = "form-control"
                    name = "cylinder_capacity"
                    {...register("cylinder_capacity", {required: true, min: 1886, max: 2022})}
                ></input>
                {errors.cylinder_capacity && <span className = "text-danger text-small d-block mb-2"> El campo "Origen" es obligatorio.</span>}
                <br></br>

                <center><button className="btn btn-primary" type="submit">AGREGAR</button></center>

            </form>

        </Fragment>
     );
}
 
export default Form;