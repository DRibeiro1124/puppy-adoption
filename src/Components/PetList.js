import React, { Component } from 'react';



class PetList extends Component {
    render() {
        return (
            <div>
                {this.props.animals.map((pet, i) => {
                    return (
                        <section className="pet-list" key={i}>
                            <header className="pet-name">{pet.name.$t}</header>
                            <img src={pet.media.photos.photo[3].$t} className="pet-image" />
                            <button className="pet-button">Save for Later! arf!</button>
                        </section>
                    );
                })}
            </div>
        );
    }
}

export default PetList;
