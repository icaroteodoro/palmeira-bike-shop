import { Header } from "@/components/Header";
import { useState } from "react";

import { FormEvent } from "react";

import {api} from '../lib/axios';

export default function Cadastro(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cell, setCell ] = useState('');
    const [ password, setPassword ] = useState('');
    function cadastrar(evt: FormEvent){
        evt.preventDefault();
        try{
            const response = api.post('/user/register', {
                name,
                email,
                cell,
                password
            });
            
            console.log(JSON.stringify(response));
            setName('');
            setEmail('');
            setPassword('');
            setCell('');
            alert(`Cadastrado com sucesso!`)
        }catch(err){
            alert("Error: " + err);
        }
        
        
    }
    
    return (
        <div className="w-full h-screen flex">
            <Header/>
            
            <form onSubmit={cadastrar} method='post' className=" mx-auto my-auto w-11/12 md:w-5/12 h-4/6 rounded-xl">
                <div className="flex">
                    <h1 className="mx-auto text-4xl md:text-6xl font-semibold pt-8 font-K2D">Crie seu cadastro</h1>
                </div>
                <div className="block pt-10 md:pt-20 px-2">
                    <div className="flex">
                        <div className="block mx-auto w-10/12 md:w-7/12">
                            <label className="font-sunflower font-semibold" htmlFor="">Nome Completo *</label> <br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3 mx-auto required:" placeholder="Digite seu nome..." onChange={e => setName(e.target.value)} value={name} type="text" />
                        </div>
                    </div>
                    <div>
                        <div className="block mx-auto w-10/12 md:w-7/12 mt-3">
                            <label className="font-sunflower font-semibold" htmlFor="">E-mail *</label><br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3" placeholder="Digite seu e-mail..." onChange={e => setEmail(e.target.value)} value={email} type="text" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="block mx-auto w-10/12 md:w-7/12 mt-3">
                            <label className="font-sunflower font-semibold" htmlFor="">Celular *</label> <br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3" placeholder="Digite seu número de celular..." onChange={e => setCell(e.target.value)} value={cell} type="text" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="block mx-auto w-10/12 md:w-7/12 mt-3">
                            <label className="font-sunflower font-semibold" htmlFor="">Senha *</label> <br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3" placeholder="Digite sua senha..." onChange={e => setPassword(e.target.value)} value={password} type="password" />
                        </div>
                    </div>
                    <div className="flex pt-5 pb-10">
                        <button type="submit" className="bg-gray-700 w-72 h-14  rounded text-white mx-auto mt-10">Cadastrar</button>
                    </div>
                    
                </div>
                
            </form>
        </div>
    );
}


