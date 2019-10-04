import React from 'react';
import PlayerList from './components/PlayerList';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      player: []
    });
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(data => this.setState({ player: data }))
      .catch(err => console.log(err))
  }


  render() {
  return (
    <div className="App">
      <Navbar />
      <PlayerList players={this.state.player} />
    </div>
    );
  }
}

export default App;
