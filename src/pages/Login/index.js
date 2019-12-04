import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';


export default function Login({history}){

    const [emailInst, setEmailInst] = useState('');
    const [passwordInst, setPasswordInst] = useState('');
  
    async function handleSubmit(event){
      event.preventDefault();
     
      const  { data }  =  await api.post('/authenticateInst', { emailInst, passwordInst });
      
     const { inst } = data;
     const { _id } = inst;
  
     localStorage.setItem('inst', _id);

     history.push('/dashboard');
    }

    return (
        <>
           
            <form onSubmit={handleSubmit}>
            <p>  Insira as credenciais da sua instituição </p>

            <label htmlFor="email"> E-MAIL * </label>
            <input 
                id="email"
                type="email"
                placeholder="Digite seu E-mail"
                value={emailInst}
                onChange={event => setEmailInst(event.target.value)}
            /> 

            <label htmlFor="password"> SENHA * </label>
            <input 
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={passwordInst}
                onChange={event => setPasswordInst(event.target.value)}
            />

            <button className="btn" type="submit"> Entrar </button>
            <Link to="/register"> 
                    Cadastrar
            </Link>

            </form>
        </>
    )
}

