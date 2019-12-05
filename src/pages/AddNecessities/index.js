import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

import camera from '../../assets/logo.png'

export default function AddNecessities({ history }){
    const [img_nec, setImg_nec] = useState('');
    const [name, setName] = useState('');
    const [qtd, setQtd] = useState('');
    const [obs, setObs] = useState('');

    const preview = useMemo(() => {
        return img_nec ? URL.createObjectURL(img_nec) : null;  
    }, [img_nec])

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        const inst_id = localStorage.getItem('inst');

        data.append('img_nec', img_nec);
        data.append('name', name);
        data.append('qtd', qtd);
        data.append('obs', obs);

        await api.post('/necessitie', data, {
            headers: { inst_id }
        })

        // const inst_id = localStorage.getItem('inst');
        
        // await api.post('/necessitie', {name, qtd, obs}, {
        //     headers: {inst_id}
        // })
         
        history.push('/dashboard');
    }



    return (
<>
       
        <form onSubmit={handleSubmit}>
        <p> Cadastre uma necessidade </p>
            
            <label
                id="img_nec"
                style={{ backgroundImage: `url(${preview})` }}
                className={img_nec ?'has-img_nec' : ''}
            >
                <input type ="file" onChange={event => setImg_nec(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>



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