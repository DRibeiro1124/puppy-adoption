import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import petData from "./Data/pet.json";

import Header from "./Components/Header";
import PetList from "./Components/PetList";
import HomePage from "./Components/HomePage";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pets: []
  //   }
  // }


  // componentDidMount() {
  //   this.setState({
  //     pets: petData.petfinder.pets.pet
  //   });
  //   console.log(petData);
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <section className="header-container">
            <Header />
          </section>
          {/*  */}
          <nav>
            <ul className="nav-category">
              <li><Link to ="/">Home Page</Link></li>
              <li><Link to="/:AnimalList">View all pets</Link></li>
              <li>Potential adoptees</li>
            </ul>
          </nav>
          {/*  */}
          <section>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/:AnimalList" exact component={PetList} />
               {/* <PetList animals={this.state.pets}/> */}
            </Switch>
          </section>

        </div>
      </Router>
    );
  }
}

export default App;
