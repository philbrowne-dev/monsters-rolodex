import React from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      username: 'Phil Browne',
      monsters: [],
      searchfield: ''
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json(response => response.json())
    .then(users => this.setState({monsters: users}))
    )

  }

  handleChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render(){
    const { monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    return (
          <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox 
            placeholder='Search Monsters'
            handleChange={this.handleChange}
            />

            <CardList monsters={filteredMonsters}>
           
            </CardList>
        
          </div>
      
    )
  }
}

export default App;
