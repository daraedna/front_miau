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

    const deleteItem = async (_id) => {

        const inst_id = localStorage.getItem('inst');

        const { data } = await api.delete(`/necessities/${_id}`, { 
            headers: { inst_id },
          
        });

        const { necessities } = data;
        console.log( data)
        setNecessities(necessities);
    }

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
                        <header style={{backgroundImage:`url(${necessities.img_nec_url.replace('10.0.0.104', '10.0.0.107')})` }}/> 
                        <strong> {necessities.name}</strong>
                        <span> {necessities.qtd ? `Quantidade: ${necessities.qtd}${' '}${necessities.uni_medida}` : 'Quantidade Indefinida'}</span>
                        <button id="delete" type='button' onClick={() => deleteItem(necessities._id)}>DELETAR</button>
                        
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