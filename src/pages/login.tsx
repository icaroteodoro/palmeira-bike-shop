import { Header } from "@/components/Header";
import { useState , useContext } from "react";
import { FormEvent } from "react";
import {api} from '../lib/axios';
import Link from "next/link";
import UserContext from "../contexts/UserContext";

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
            }else{
                alert(res.data.error)
            }
        })
    }
    return (
        <div className="w-full h-screen flex">
            <Header/>
            
            <form onSubmit={login} method='post' className=" mx-auto my-auto w-11/12 md:w-5/12 h-4/6 rounded-xl">
                <div className="flex">
                    <h1 className="mx-auto text-4xl md:text-6xl font-semibold pt-8 font-K2D">Login do cliente</h1>
                </div>
                <div className="flex mt-5 font-sunflower font-extralight">
                    <span className="mx-auto">VEJA SEUS PEDIDOS, SEU CARRINHO E MUITO MAIS</span>
                </div>
                <div className="block pt-10 md:pt-10 px-2">
                    <div className="flex">
                        <div className="block mx-auto w-10/12 md:w-7/12">
                            <label className="font-sunflower font-semibold" htmlFor="">E-mail:  *</label> <br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3 mx-auto required:" onChange={e => setEmail(e.target.value)} value={email} type="text" required/>
                        </div>
                    </div>
                    <div>
                        <div className="block mx-auto w-10/12 md:w-7/12 mt-3">
                            <label className="font-sunflower font-semibold" htmlFor="">Senha:  *</label><br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3" onChange={e => setPassword(e.target.value)} value={password} type="password" required/>
                        </div>
                    </div>
                    
                    <div className="flex pt-5">
                        <button type="submit" className="bg-gray-700 w-72 h-14  rounded text-white mx-auto mt-10">Continuar</button>
                    </div>
                    <div className="flex">
                        <span className="mx-auto mt-3">
                            Não tem cadastro? <Link className="underline font-bold" href='/cadastro'>Cadastre-se</Link>
                        </span>
                    </div>
                    <div className="flex">
                        <span className="mx-auto mt-3">
                            Ao continuar, você está concordando com nossa <Link className="underline font-bold" href='/cadastro'>Política de Privacidade</Link>
                        </span>
                    </div>
                </div>
                
            </form>
        </div>
    );
}