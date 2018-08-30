import React, { Component } from 'react';
import photo1 from "../images/adoptMe.jpeg";
import photo2 from "../images/adoption_homeless.jpg";
import photo3 from "../images/adoptMe1.jpeg";
import photo4 from "../images/Paws.jpg";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-intro">
                    <span className="intro-title">Pets for Adoption</span>
                </header>
                <section className="intro-photo">
                    <img src={photo4} alt="photo5" className="header-photo" />
                    <img src={photo1} alt="photo1" className="header-photo" />
                    <img src={photo2} alt="photo2" className="header-photo" />
                    <img src={photo3} alt="photo3" className="header-photo" />
                    <img src={photo4} alt="photo4" className="header-photo" />
                </section>
            </div>
        );
    }
}

export default Header;
