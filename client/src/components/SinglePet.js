import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const SinglePet =(props)=>{
    const[pet, setPet]=useState('');
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/singlepet/${props._id}`)
            .then( res =>{
                console.log('getting dog..')
                console.log(res.data)
                setPet(res.data.single)
                console.log(pet)
            })
            .catch (err => console.log(err))

    }, []);

    const adoptPet=(e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/delete/${props._id}`)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1 style={{backgroundColor: 'green', width:'600px', margin:'10px auto', marginBottom: '50px'}}>Pet Shelter</h1>
            <h3>Details about: {pet.name}</h3>
            <div className='details'>
            <h4>Description: <p>{pet.description}</p> </h4>
            <h4>Skills: <p>{pet.skill1}</p><p>{pet.skill2}</p> <p>{pet.skill3}</p>
            </h4></div>
        <form onSubmit={(e)=>adoptPet(e)}> 
            <input className='adoptbtn' type='Submit' value="Adopt Pet!"/>
        </form>
        </div>
    );
}

export default SinglePet;