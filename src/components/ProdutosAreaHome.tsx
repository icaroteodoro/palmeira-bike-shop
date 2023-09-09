import { api } from "@/lib/axios";
import { FormEvent, useEffect, useState } from "react";
import CardProduto from "./cardProduto";
import Celin from '../images/celin.png'

interface ProdutosProps{
    id: string,
    name: string,
    price: string,
    description: string
}

export default function ProdutosAreaHome(){
    const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
    const firstProds = produtos.slice(0, 10);
    
    
    const fetchProducts = async () => {
        try{
            await api.get('/products').then(res => res.data).then(res => setProdutos(res.products));
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        fetchProducts();
    },[]);
    return(
        <div className="h-screen first-letter:block area-prod">
            {produtos?.length === 0 ? (<>Carregando</>) : (
                firstProds.map((res, count) => (
                    <div key={res.id} className='mx-auto my-auto w-min h-min'>
                        <CardProduto id={res.id} urlImg={Celin} name={res.name.toUpperCase()} price={'R$' + res.price + ',00'} category='PRODUTOS'/>
                    </div>
                ))
            )}
            
        </div>
    );
}