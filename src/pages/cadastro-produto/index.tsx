import { Header } from "@/components/Header";
import Layout from "@/components/Layout";
import { api } from "@/lib/axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function CadastroProduto(){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    // const [img, setImg] = useState('');

    function cadastrar(evt: FormEvent){
        evt.preventDefault();
        try{
            const response = api.post('/product/register', {
                name,
                price,
                description,
            });
            
            console.log(JSON.stringify(response));
            setName('');
            setPrice('');
            setDescription('');
            alert(`Produto cadastrado com sucesso!`)
        }catch(err){
            alert("Error: " + err);
        }
        
        
    }
    return (
        <div className="w-full h-screen flex">
            <Header/>
            
            <form onSubmit={cadastrar} method='post' className=" mx-auto my-auto w-11/12 md:w-5/12 h-4/6 rounded-xl">
                <div className="flex">
                    <h1 className="mx-auto text-4xl md:text-6xl font-semibold pt-8 font-K2D">Cadastrar produto</h1>
                </div>
                <div className="block pt-10 md:pt-10 px-2">
                    <div className="flex">
                        <div className="block mx-auto w-10/12 md:w-7/12">
                            <label className="font-sunflower font-semibold" htmlFor="">Nome do produto *</label> <br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3 mx-auto required:" placeholder="Digite o nome do produto..." onChange={e => setName(e.target.value)} value={name} type="text" />
                        </div>
                    </div>
                    <div>
                        <div className="block mx-auto w-10/12 md:w-7/12 mt-3">
                            <label className="font-sunflower font-semibold" htmlFor="">Preço do produto *</label><br />
                            <input className="border w-full h-10 rounded bg-gray-100 p-2 mt-3" placeholder="Digite o preço do produto..." onChange={e => setPrice(e.target.value)} value={price} type="text" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="block mx-auto w-10/12 md:w-7/12 mt-3">
                            <label className="font-sunflower font-semibold" htmlFor="">Adicione uma descrição *</label> <br />
                            <textarea rows={4} className="border w-full rounded bg-gray-100 p-2 mt-3" placeholder="Digite uma descrição do produto..." onChange={e => setDescription(e.target.value)} value={description}/>
                        </div> 
                    </div>
                    <div className="flex pt-5 ">
                        <button type="submit" className="bg-gray-700 w-72 h-14  rounded text-white mx-auto mt-10">Cadastrar produto</button>
                    </div>

                </div>
            </form>
        </div>
    );
}