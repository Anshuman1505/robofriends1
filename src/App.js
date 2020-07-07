import React, {Component} from 'react';
import CardList from './CardList';
import ErrorBoundry from './ErrorBoundry';
//import {robots} from './robots';
import SearchBox from "./SearchBox";
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
       robots:[],
       searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
     return  response.json()
    }).then(users=>{
      this.setState({robots:users})
    });
  }
  onSearchChange = (event) => {
    // console.log(event.target.value);
     this.setState({searchfield:event.target.value});
  }
  render(){
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filterRobots);
  return(
      <div className = "tc">
        <h1 className ="f2">RoboFriends</h1>
        <SearchBox searchchange = {this.onSearchChange}/>
        <ErrorBoundry>
        <CardList robots = {filterRobots}/>
        </ErrorBoundry>
      </div>
    );
  }
}
export default App;