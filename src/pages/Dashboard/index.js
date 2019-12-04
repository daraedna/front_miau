import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import  './styles.css';
import { Link } from 'react-router-dom';

export default function Dashboard({history}){
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

    async function addNecessities(event){
        event.preventDefault();

        history.push('/AddNecessities');
    }

    
    
    return (
        <>
          
            <form>
            <p> Necessidades Cadastradas</p>
                <ul className="necessities-list" >
                    {necessities.map(necessities => (
                    <li key={necessities._id}>
                        <strong> {necessities.name}</strong>
                        <span> {necessities.qtd}</span>
                    </li>
                    ))}
                </ul> 

                <button className="btn" onClick={addNecessities}> Adicionar Necessidade </button>

                <Link to="/"> 
                        Sair
                </Link>
            
            </form>
            
        </>
    )
} 