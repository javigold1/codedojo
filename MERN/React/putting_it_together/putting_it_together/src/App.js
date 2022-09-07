import React from 'react';
import './App.css';
import PersonComponent from './components/MyNewComponent';
// import { useState } from 'react';

var peopleArr =[
  {"firstName":"Jane", "lastName":"Doe", "age": "20", "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age": "38","hairColor":"Brown"},
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      
      }
    </div>
  );
}

export default App;