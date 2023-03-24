import { Header } from "@/components/Header";
import { useInsertionEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import {api} from '../lib/axios';

function setLocalStorage(id:string){
    localStorage.setItem('id', id);
}

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(evt: FormEvent){
        evt.preventDefault();
        
        api.post('/login', {email, password}).then(function(res) {
            if(!res.data.error){
                alert(`Bem-vindo(a) ${res.data.name}` );
                setLocalStorage(res.data.id)
                console.log("Não existe")
            }else{
                alert(res.data.error)
            }
        })
        
        

    }

    return (
        <div className="w-full h-screen flex">
            <Header/>
            <h1 className="my-auto mx-auto">
                Bem vindo ao seu Login!!
                <form onSubmit={login}>
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="Digite seu email: "/>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password}  placeholder="Digite sua senha: "/>
                    <button type="submit">Enviar</button>
                </form>
            </h1>
            
            
        </div>
    );
}