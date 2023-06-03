import React, { Component } from 'react';
import image from './profile-image.jpg';
import './App.css'
class App extends Component {  
 // Définition de l'état initial
  state = {
    person: {
      fullName: 'Hamza Hossani',
      bio: 'Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: image,
      profession: 'Profession: Engineer'
    },
    show: false,
    lastMountedTime: null
  };
// Méthode du cycle de vie
  componentDidMount() {
    this.setState({ lastMountedTime: new Date() });
    this.interval = setInterval(() => {
      this.setState({ lastMountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
// Fonction pour formater l'intervalle de temps
  formatTimeInterval = (interval) => {
    const seconds = Math.floor((interval / 1000) % 60);
    const minutes = Math.floor((interval / (1000 * 60)) % 60);
    const hours = Math.floor((interval / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

   // Méthode de rendu pour définir l'interface utilisateur du composant
  render() {
    const { person, show, lastMountedTime } = this.state;

    return (
      <div className="app-container">
        {show && (
          <div className="profile">
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="image" width="350" height="350" />
            <p>{person.profession}</p>
          </div>
        )}
        <button onClick={() => this.setState({ show: !show })}>
          Toggle Profile
        </button>
        {lastMountedTime && (
          <p>
            Last mounted: {this.formatTimeInterval(new Date() - lastMountedTime)}
          </p>
        )}
      </div>
    );
  }
}

export default App;
