import React from 'react';

class CarList extends React.Component {

    carsList = [];

    componentDidMount(){
    fetch('http://localhost:8080/api/cars/list')
        .then(response => response.json())
        .then(data => this.carsList=data);
    }

    render() {
    return (
        <div>
            <ul>
                {this.carsList.map((car,index) => {
                    return (
                    <li key={index}>
                        {car.mark} - {car.model}
                    </li>
                    )
                })}
            </ul>
        </div>
    );
    }
}

export default CarList;
