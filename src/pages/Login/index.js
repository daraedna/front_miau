import React, { useState } from 'react';
import api from '../../services/api';


export default function Login({history}){

    const [emailInst, setEmailInst] = useState('');
    const [passwordInst, setPasswordInst] = useState('');
  
    async function handleSubmit(event){
      event.preventDefault();
     
      const  { data }  =  await api.post('/authenticateInst', { emailInst, passwordInst });
      
     const { inst } = data;
     const { id } = inst;
  
     localStorage.setItem('inst', id);

     history.push('/dashboard');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

            <label htmlFor="email"> E-MAIL * </label>
            <input 
                id="email"
                type="email"
                placeholder="Digite seu E-mail"
                value={emailInst}
                onChange={event => setEmailInst(event.target.value)}
            /> <br/>

            <label htmlFor="password"> SENHA * </label>
            <input 
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={passwordInst}
                onChange={event => setPasswordInst(event.target.value)}
            /><br/>

            <button className="btn" type="submit"> Entrar </button>

            </form>
        </>
    )
}

