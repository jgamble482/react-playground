
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import React, {Component} from 'react';

class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Howie', age: 23},
      {id:'2', name: 'Kumar', age: 24},
      {id: '3', name: 'Jordan', age: 22}
    ],
    showPersons: true
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIdx]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIdx] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() { 
    
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
            <Persons 
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}/>
        </div>
      )
    }


    return (
    <div className="App">
      <Cockpit style={style} click={this.togglePersonsHandler}/>
      {persons}
    </div>
  );
  }
}

export default App;
