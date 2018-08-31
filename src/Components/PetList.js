import React, { Component } from 'react';
import petData from "../Data/pet.json";
import {Link} from 'react-router-dom';






class PetList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }
    componentDidMount() {
        this.setState({
            pets: petData.petfinder.pets.pet
        });
        console.log(petData);
    }


    render() {
        return (
            <div className="pet-container">
                {this.state.pets.map((pet, i) => {
                    return (
                        <section className="pet-list" key={i}>
                        <Link to={`./${pet.name.$t}/${i}`}>
                                <header className="pet-name">{pet.name.$t}</header>
                                <img src={pet.media.photos.photo[3].$t} className="pet-image" />
                        </Link>
                                <button onClick={console.log()} className="pet-button">Save for Later! arf!</button>
                            </section>
                    );
                })
                }
            </div >
        );
    }
}

export default PetList;
