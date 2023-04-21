import { Component, useState , useEffect} from 'react';
import CardList from './card-list/card-list.component';
import SerachBox from './search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';

// class component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       "person" : [],
//       "search_value" : ""
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>{return response.json()}) // either use response.json() without return & curly braces, or use like return + curly braces
//     //.then(response=> console.log(response))
//     .then(response=>this.setState(
//     ()=>{
//           return {'person' : response}
//         }
//     ))
//     // console.log(this.state.person) // this will come as empty array, because present state should be used from the callback of setState()
//   }

//   // for performance issue we got rid off the anonymous function and replaced with a class method     
//   onSearchChange = (e)=>{
//     this.setState(()=>{return {search_value : e.target.value.toLowerCase()}})
//   }

//   render(){
//     console.log('render from App.js')
//     const filteredNames = this.state.person.filter((person)=>{
//       return person.name.toLowerCase().includes(this.state.search_value)
//     });

//     return (
//     <div className='App'>
//       <h2 className='app-title'>Know Your Buddy</h2>
//       <SerachBox className='persons-search-box' onSearchChangeHandler={this.onSearchChange} placeholder='search persons'/>
//       <CardList persons={filteredNames}/>
//     </div>
//     )
//     }
//   }

const App = () =>{

  const [searchField , setSearchField] = useState(''); //This will be an array [statevalue, setstate fuction]
  const [data,setData] = useState([])

  useEffect(()=>{
    console.log('useEffect fired here')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(data=>setData(data));
  },[]) //takes a callback, a dependency array(any statevalue)

  const onSearchChange = (event)=>{
    const serachString = event.target.value.toLowerCase();
    setSearchField(serachString.toLowerCase())
  }

  const filteredNames = data.filter(val=>{
    return val.name.toLowerCase().includes(searchField)
  })

  return (
    <div className='App'>
      {console.log('render')}
      <h2 className='app-title'>Know Your Buddy</h2>
      <SerachBox className='persons-search-box' onSearchChangeHandler={onSearchChange} placeholder='search persons'/>
      <CardList persons={filteredNames}/>
    </div>
    )
}

export default App;
