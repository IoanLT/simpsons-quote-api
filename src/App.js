import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

// const initialQuote = [
//   {
//     "quote": "By chilling my loins I increase the chances of impregnating my wife.",
//     "character": "Apu Nahasapeemapetilon",
//     "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
//     "characterDirection": "Left"
//   }
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then(response => response.data)
    // console.log(data);
    // Use this data to update the state
    .then(data => {
      console.log(data);
      this.setState({
        quote: data
      });
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.quote 
            ?  <QuoteCard quote={this.state.quote} /> 
            :  <p>Loading..</p>
        }
        
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
