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

           console.log(data)

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
                        <header style={{backgroundImage:`url(${necessities.img_nec_url})` }}/> 
                        <strong> {necessities.name}</strong>
                        <span> {necessities.qtd ? `Quantidade: ${necessities.qtd}` : 'Quantidade Indefinida'}</span>
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