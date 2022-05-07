import React from 'react';
import './App.css';


function App() {


  const users = [
    {id:1,name: "Andre E", age: 33},
    {id:2,name: "Alex X", age: 24},
    {id:3,name: 'Dima A', age: 18}
  ]

  // const liElements = users.map((u,index) => <li key={index}>{u.name}</li>)
  const liElements = users.map((u) => <li key={u.id}>{u.name}</li>)
  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
