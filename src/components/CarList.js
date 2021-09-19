import React,{useEffect, useState} from 'react';
import '../styles/Table.css'

const CarList = () => {

    const [cars, setcars] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/cars/list")
            .then(response => response.json())
            .then(list => {
                setcars(list)
            })
    }, []);


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
                    <td>Electrico</td>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => {
                    return <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.mark}</td>
                        <td>{car.model}</td>
                        <td>{car.origin}</td>
                        <td>{car.cylinder_capacity}</td>
                        <td>{car.electric}</td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default CarList
