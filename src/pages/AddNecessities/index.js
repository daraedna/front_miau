import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';


export default function AddNecessities({ history }){

    const [name, setName] = useState('');
    const [qtd, setQtd] = useState('');
    const [obs, setObs] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const inst_id = localStorage.getItem('inst');
        
        await api.post('/necessitie', {name, qtd, obs}, {
            headers: {inst_id}
        })
         
        history.push('/dashboard');
    }



    return (
<>
       
        <form onSubmit={handleSubmit}>
        <p> Cadastre uma necessidade </p>
            <label htmlFor> Necessidade: </label>
            <input
                id= "name"
                placeholder="Nome da necessidade"
                value={name}
                onChange={event => setName(event.target.value)}
            /><br/>

            <label htmlFor> Quantidade: </label>
            <input
                 id= "qtd"
                 placeholder="Quantidade necessaria"
                 value={qtd}
                 onChange={event =>setQtd(event.target.value)}
             /><br/>

            <label htmlFor> Observações: </label>
            <input
                id= "obs"
                placeholder="Alguma coisa a mais "
                value={obs}
                onChange={event => setObs(event.target.value)}
            /><br/>
            
            <button className="btn" type="submit"> Cadastrar </button>

            <Link to="/Dashboard"> 
                    Cancelar
            </Link>
            
 
        </form>
     </>   
    )
}