import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import Edit from './components/Edit';
import SinglePet from './components/SinglePet';
import AllPets from './components/AllPets';

function App() {
  const [pets, setPets]=useState([]);
  

  const fetchPets=()=>{
    axios.get('http://localhost:8000/api/pets')
      .then(res => {
        console.log(res)
        setPets(res.data)
      })
      .catch(err => console.log(err));
  }
  useEffect( ()=>{
    fetchPets();
  }, []);


  return (
    <div className="App">
    
    
  
    <Router>
      <Form path="/new"/>
      <Edit path="/edit/:_id"/>
      <SinglePet path='/singlepet/:_id'/>
      <AllPets path='/'/>
    </Router>
    
    </div>
  );
}

export default App;
