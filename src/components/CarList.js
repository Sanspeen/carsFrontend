import React,{useEffect, useState, useContext} from 'react';
import {Store} from  '../utils/Store.js'
import '../styles/Table.css'

const CarList = () => {

    const [cars, setcars] = useState([])

    const { dispatch, state } = useContext(Store);

    useEffect(() => {
        fetch("http://localhost:8080/api/cars/list")
            .then(response => response.json())
            .then((list) => {
            dispatch({ type: "update-list-category", list })
            })

    }, [state.cars.list.length, dispatch]);


    return (
        <div>
            <table id="cars">
                <thead>
                    <tr>
                    <td>Id</td>
                    <td>Marca</td>
                    <td>Modelo</td>
                    <td>Origen</td>
                    <td>Cilindraje</td>
                    </tr>
                </thead>
                <tbody>
                    {state.cars.list.map((car) => {
                    return <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.mark}</td>
                        <td>{car.model}</td>
                        <td>{car.origin}</td>
                        <td>{car.cylinder_capacity}</td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default CarList
