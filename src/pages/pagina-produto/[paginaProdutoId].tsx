import { Header } from "@/components/Header";
import Layout from "@/components/Layout";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



interface ProdutoProps {
    id: string,
    name: string,
    price: string,
    description: string
}

export default function PaginaProduto(){
    const [produto, setProduto] = useState<ProdutoProps>();
    const router = useRouter();

    const  id  = router.query.paginaProdutoId;

    const fetchProduct = async () =>{
        await api.get('/product/' + id).then(res => res.data).then(res => setProduto(res.product));
    }

    useEffect(() => {
        fetchProduct();
    });

    return (
        <Layout> 
            <div className="flex h-screen">
                <div className="w-full h-full flex"  >
                    <h1 className="mx-auto my-auto text-lg md:text-5xl font-bold">{ produto?.name.toUpperCase()}</h1>
                </div>
            </div>
        </Layout>
        
    );
}