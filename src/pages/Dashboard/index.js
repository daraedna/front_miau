import React, { useEffect, useState} from 'react';
import api from '../../services/api';


export default function Dashboard(){
    const [necessities, setNecessities] = useState([]);

    useEffect(() => {
        async function loadNecessities(){
           const inst_id = localStorage.getItem('inst');
           const {data} = await api.get('/necessities', {
               headers: { inst_id }
           });

           const { necessities } = data;
            setNecessities(necessities);
        }
      
        loadNecessities();
    }, []); 

    
    
    return (
        <>
            <ul className="necessities-list" >
                {necessities.map(necessities => (
                <li key={necessities._id}>
                    <strong> {necessities.inst}</strong>
                    <span> {necessities.name}</span>
                </li>
                ))}
            </ul>
        </>
    )
} 