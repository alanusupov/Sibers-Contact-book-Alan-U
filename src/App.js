import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AddContact from './components/AddContact';
import ShowContact from './components/ShowContact';
export default class PersonList extends React.Component {
  state = {
    persons: [],
    
  }

    addPerson = (person) => {
      let persons = this.state.persons;
      persons.unshift(person);
      this.setState({
        persons
      })
      
 console.log(this.state);
    };
    
    deletePerson = (person) => {
      const persons = [...this.state.persons];
      persons.splice(person, 1);
      this.setState({persons})
    }
  componentDidMount() {
        
    axios.get(`http://demo.sibers.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons : this.state.persons.concat(persons)});
        console.log(this.state.persons);
      })
  }
  

  render() {
    
    return (
      <div className="container">
        <h1>Contact Book</h1>
        <AddContact persons={this.state.persons} addPerson={this.addPerson}  />
        <ShowContact persons={this.state.persons} 
        deletePerson={this.deletePerson} />
      </div>
      
    )
  }
}
