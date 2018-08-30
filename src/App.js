import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";

import Header from "./Components/Header";
import PetList from "./Components/PetList";

class App extends Component {
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
      <div className="App">
        <section className="header-container">
          <Header />
        </section>
        {/*  */}
        <nav>
          <ul className="nav-category">
            <li>View all pets</li>
            <li>Potential adoptees</li>
          </ul>
        </nav>
        {/*  */}
        <section>
          <PetList animals={this.state.pets} />
        </section>
        
      </div>
    );
  }
}

export default App;
