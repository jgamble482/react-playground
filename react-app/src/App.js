
import './App.css';
import Person from './Person/Person';
import React, {Component} from 'react'

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
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => <Person 
          key={person.id} 
          name={person.name} 
          age={person.age}
          changed={(event) => this.nameChangedHandler(event, person.id)} 
          click={() => this.deletePersonHandler(index)}/>)}
      </div>
      )
    };

    return (
    <div className="App">
      <h1>I'm a React App</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Display</button>
      {persons}
    </div>
  );
  }
}

export default App;
