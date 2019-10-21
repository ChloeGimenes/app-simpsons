import React from 'react';
import DisplaySimpsons from './Components/DisplaySimpsons';
import './App.css';
import axios from 'axios';

const sampleSimpsons = [
    {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
    }
  ]


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      simpsons: sampleSimpsons
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }


  getSimpsons() {
  
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
     
      .then(response => response.data)
 

      .then(data => {
        console.log(data);
        this.setState({
          simpsons: data
        });
    });
  }

  
  render() {
    const { simpsons } = this.state;
    return (
      <div className="App">
      {simpsons.map(memberFamily => <DisplaySimpsons simpsons={memberFamily} />)}
        <DisplaySimpsons simpsons={this.state.simpsons} />
        <button type="button" onClick={this.getSimpsons}>Get Simpsons</button>
      </div>
    );
  }
}



export default App;
