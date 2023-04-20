import { Component } from 'react';
import CardList from './card-list/card-list.component';
import SerachBox from './search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';

// class component
class App extends Component {
  constructor() {
    super();
    this.state = {
      "person" : [],
      "search_value" : ""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{return response.json()}) // either use response.json() without return & curly braces, or use like return + curly braces
    //.then(response=> console.log(response))
    .then(response=>this.setState(
    ()=>{
          return {'person' : response}
        }
    ))
    // console.log(this.state.person) // this will come as empty array, because present state should be used from the callback of setState()
  }

  // for performance issue we got rid off the anonymous function and replaced with a class method     
  onSearchChange = (e)=>{
    this.setState(()=>{return {search_value : e.target.value}})
  }

  render(){
    console.log('render from App.js')
    const filteredNames = this.state.person.filter((person)=>{
      return person.name.toLowerCase().includes(this.state.search_value)
    });

    return (
    <div className='App'>
      {/* <input className='search-box' type='search' placeholder='search person' onChange={this.onSearchChange}/> */}
      {/* {
        filteredNames.map(person=>{
          return <h3 key={person.name}>{person.name}</h3>
        })
      } */}

    <div>

    </div>
      <SerachBox className='persons-search-box' onSearchChangeHandler={this.onSearchChange} placeholder='search persons'/>
      <CardList persons={filteredNames}/>
    </div>
    )
    }
  }

export default App;
