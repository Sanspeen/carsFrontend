import React, {Fragment, useState, useContext} from 'react';
import { useForm } from 'react-hook-form';
import {Store} from '../utils/Store.js'
import '../styles/Form.css'

const Form = () => {

    const { dispatch, state } = useContext(Store);

    const {register, formState: {errors }, handleSubmit} = useForm();

    const onSubmit = (data, e) =>{
        addCar(data)
        e.target.reset();
    }

    const addCar = (data)=>{
        const request = {
            id: null,
            mark: data.mark,
            model: data.model,
            origin: data.origin,
            cylinder_capacity: data.cylinder_capacity,
            electric: data.isElectric
        };

        fetch("http://localhost:8080/api/cars/saveCar", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then((car) => {
            fetch("http://localhost:8080/api/cars/list")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list-category", list })
            })
        });
    }

    return (
        <Fragment >
            <center><h1>INGRESE LOS DATOS DE SU VEHICULO.</h1></center><br></br>
            <form className = "form-car  col-sm" onSubmit = {handleSubmit(onSubmit)}>

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
                    {...register("model", {required: true, min: 1886, max: 2022})}
                ></input>
                {errors.model && <span className = "text-danger text-small d-block mb-2"> El campo "Modelo" es obligatorio y debe ser mayor que 1886 y menor que 2023.</span>}
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
                <br></br>
                <h6>¿Es electrico?</h6>
                <select type = "text" name="isElectric"  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" {...register("isElectric", {required: true})}>
                    <option value={true}>Sí</option>
                    <option value={false} selected>No</option>
                </select><br></br><br></br>
                <input
                    type = "text"
                    placeholder = "CILINDRAJE"
                    className = "form-control"
                    name = "cylinder_capacity"
                    {...register("cylinder_capacity", {required: true, min: 800, max: 8383})}
                ></input>
                {errors.cylinder_capacity && <span className = "text-danger text-small d-block mb-2"> El campo "CILINDRAJE" es obligatorio y debe ser mayor que 800 y menor que 8384.</span>}
                <br></br>

                <center><button className="btn btn-primary" type="submit">AGREGAR</button></center>

            </form>

        </Fragment>
);
}

export default Form;