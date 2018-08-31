import React, { Component } from 'react';
import petData from "../Data/pet.json";

class IndividualPet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: {

            }
        }
    }
    

    componentDidMount() {
        console.log(petData.petfinder.pets.pet[this.props.match.params.IndividualPet])
    }
    render() {
        return (
            <div className="individual-container">
                <span className="individual-pet-name">{petData.petfinder.pets.pet[this.props.match.params.IndividualPet].name.$t}</span>
                <span className="individual-pet-info">{petData.petfinder.pets.pet[this.props.match.params.IndividualPet].description.$t}</span>
            </div>
        );
    }
}

export default IndividualPet;
