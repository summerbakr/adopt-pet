import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const Form =(props)=>{
    const[name, setName]=useState('');
    const [type, setType]=useState('')
    const [description, setDescription]=useState('')
    const[skill1, setSkill1]=useState('');
    const[skill2, setSkill2]=useState('');
    const[skill3, setSkill3]=useState('');
    const [errors, setErrors]=useState('');
    
    const addNew = (e) => {
        e.preventDefault();
        console.log('creating new pet..')
        const newPet={name:name, type: type, description: description, skill1: skill1, skill2:skill2, skill3:skill3}
        console.log(newPet)
        axios.post('http://localhost:8000/api/pets/new', newPet)
            .then(res=>{
                console.log(res)

            if (res.data.errors){
                setErrors(res.data.errors)
            }
            else{
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }
        return(
        <div className="form">
        <h1>Add a Pet to Our Family!</h1>
        <form onSubmit={(e) =>  addNew(e) }>
            <p>Pet Name: <input type="text" onChange={(e)=>setName(e.target.value)}/></p>
            {errors.name ? <p style={{color:'red'}}>{errors.name.message}</p> : ''}
            <p>Pet Type: <input type="text" onChange={(e)=>setType(e.target.value)}/></p>
            {errors.type ? <p style={{color:'red'}}>{errors.type.message}</p> : ''}
            <p>Pet Description:<input type="text" onChange={(e)=>setDescription(e.target.value)}/></p>
            {errors.description ? <p style={{color:'red'}}>{errors.description.message}</p> : ''}
            <p>Skill 1:<input type="text" onChange={(e)=>setSkill1(e.target.value)}/></p>
            <p>Skill 2:<input type="text" onChange={(e)=>setSkill2(e.target.value)}/></p>
            <p>Skill 3:<input type="text" onChange={(e)=>setSkill3(e.target.value)}/></p>
            <p><input type='submit' value='Add Pet!'/></p>
            <Link to='/'>See all the pets</Link>
        </form>
    </div>
    );
}
export default Form;