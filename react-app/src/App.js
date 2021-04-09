
import './App.css';
import Person from './Person/Person';
import React, {Component} from 'react'

class App extends Component {
  state = {
    persons: [
      {name: 'Howie', age: 23},
      {name: 'Kumar', age: 24},
      {name: 'Jordan', age: 22}
    ]
  }

  switchNamesHandler = () => {
    this.setState({
      persons: [
        {name: 'Laura', age: 23},
        {name: 'Kumar', age: 24},
        {name: 'Jordan', age: 22}
      ]
    });
  }

  render() { return (
    <div className="App">
      <h1>I'm a React App</h1>
      <button onClick={this.switchNamesHandler}>Switch Names</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>This one's me</Person>
    </div>
  );
  }
}

export default App;
