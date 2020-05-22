import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link} from '@reach/router';

const AllPets=(props)=>{
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
    }, [pets]);

    return(
        <div>
            <h1 style={{margin:'auto'}}>All these wonderful pets need homes!!</h1>

        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {pets.map( (pet)=>
        <tr key={pet._id}>
            <td >{pet.name}</td>
            <td>{pet.type}</td>
            <td><Link to={'/edit/'+pet._id}><button>Edit</button></Link>|<Link to={'/singlepet/'+pet._id}><button>Details</button></Link></td></tr>
        )}

        </tbody>
        </table> 
        <Link to='/new'>Add a Pet to Our Family!</Link>

        </div>
    );
}

export default AllPets;