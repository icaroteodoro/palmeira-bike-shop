import { Header } from "@/components/Header";
import Layout from "@/components/Layout";

export default function PaginaProduto(){
    return (
        <Layout> 
            <div className="flex h-screen">
            <div className="w-full h-full flex"  >
                <h1 className="mx-auto my-auto text-5xl font-bold">SEU PRODUTO</h1>
            </div>
        </div>
        </Layout>
        
    );
}