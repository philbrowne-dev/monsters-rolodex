import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      username: 'Hello Phil Browne'
    }
  }
  render(){
    return (
          <div className="App">
            <header className="App-header">
    <p>{this.state.username}</p>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <button onClick={() => this.setState({username: 'Hello Phil'})}>Change Text</button>
            </header>
          </div>
      
    )
  }
}

export default App;
