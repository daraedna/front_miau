import React, { useState } from 'react';
import api from '../../services/api';

export default function Register({ history }){

    const [nameInst, setNameInst] = useState('');
    const [emailInst, setEmailInst] = useState('');
    const [passwordInst, setPasswordInst] = useState('');
    const [phoneInst, setPhoneInst] = useState('');
    const [descritionInst, setDescritionInst] = useState('');
    const [cityInst, setCityInst] = useState('');
    const [stateInst, setStateInst] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        await api.post('/registerInst', { nameInst, emailInst, passwordInst, phoneInst, descritionInst, cityInst, stateInst })
         
        history.push('/dashboard');
    }


    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor> Nome: </label>
            <input
                id= "nameInst"
                placeholder="Nome da Instituição"
                value={nameInst}
                onChange={event => setNameInst(event.target.value)}
            /><br/>

            <label htmlFor> Email: </label>
            <input
                 id= "emailInst"
                 type= "email"
                 placeholder="Insira um email valido"
                 value={emailInst}
                 onChange={event =>setEmailInst(event.target.value)}
             /><br/>

            <label htmlFor> Senha: </label>
            <input
                id= "passwordInst"
                type="password"
                placeholder="Insira uma senha"
                value={passwordInst}
                onChange={event => setPasswordInst(event.target.value)}
            /><br/>

            <label htmlFor> Telefone: </label>
            <input
                id= "phone"
                placeholder="Insira um contato"
                value={phoneInst}
                onChange={event => setPhoneInst(event.target.value)}
            /><br/>

            <label htmlFor> Descrição: </label>
            <input
                id= "descrition"
                placeholder="Fale sobre a instituição"
                value={descritionInst}
                onChange={event => setDescritionInst(event.target.value)}
            /><br/>

            <label htmlFor> Cidade: </label>
            <input
                id= "city"
                placeholder="Mossoró"
                value={cityInst}
                onChange={event => setCityInst(event.target.value)}
            /><br/>

            <label htmlFor> Estado: </label>
            <input
                id= "state"
                placeholder="RN"
                value={stateInst}
                onChange={event => setStateInst(event.target.value)}
            /><br/>
            
            <button className="btn" type="submit"> Cadastrar </button>
            
        </form>
    )


}