import React from 'react';
import './App.css'

// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  adress: string;
  city: string;
 }

 const Welcome: React.FC<WelcomeProps> = ({ name, age, adress, city}) => {
  return (<div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old.</p>
    <p>Live in {adress} - {city}!</p>
    </div>
    );
   }

  function App() {
  return (
  <div className='App'>
  <Welcome name='Alice' age={25} adress='brooklyn' city='New York'/>
  <Welcome name='Bob' age={30} adress='comptom' city='Los angeles'/>
  <Welcome name='Charlie' age={35} adress='bel-air' city='Los Angeles' />
  </div>
  );
  }
 
export default App
