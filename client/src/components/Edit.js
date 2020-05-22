import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link} from '@reach/router';

const Edit=(props)=>{
    const[name, setName]=useState('');
    const [type, setType]=useState('')
    const [description, setDescription]=useState('')
    const[skill1, setSkill1]=useState('');
    const[skill2, setSkill2]=useState('');
    const[skill3, setSkill3]=useState('');
    const [errors, setErrors]=useState('');
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/singlepet/${props._id}`)
            .then(res=>{
                console.log(res)
                setName(res.data.single.name)
                setType(res.data.single.type)
                setDescription(res.data.single.description)
                setSkill1(res.data.single.skill1)
                setSkill2(res.data.single.skill2)
                setSkill3(res.data.single.skill3)


            })

    }, []);
    const updatePet=(e)=>{
        e.preventDefault();
        const updatePet={name, type, description, skill1, skill2, skill3};
        axios.put(`http://localhost:8000/api/pets/edit/${props._id}`, updatePet)
            .then(res=>{
                console.log(res)
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate('/');
                }
        })
            .catch(err=> console.log(err))
    }
    return(
        <div>
            <h1>Edit Pet!</h1>
            <form onSubmit={updatePet}>
            <p>Pet Name: <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/></p>
            {errors.name ? <p style={{color:'red'}}>{errors.name.message}</p> : ''}
            <p>Pet Type: <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/></p>
            {errors.type ? <p style={{color:'red'}}>{errors.type.message}</p> : ''}
            <p>Pet Description:<input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/></p>
            {errors.description ? <p style={{color:'red'}}>{errors.description.message}</p> : ''}
            <p>Skill 1:<input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill1}/></p>
            <p>Skill 2:<input type="text" onChange={(e)=>setSkill2(e.target.value)}value={skill2}/></p>
            <p>Skill 3:<input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill3}/></p>
            <p><input type='submit' value='Edit Pet!'/></p>
            <Link to='/'>Home</Link>
        </form>
        </div>
    );
}

export default Edit;