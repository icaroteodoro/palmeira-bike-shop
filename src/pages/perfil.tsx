import { Header } from "@/components/Header";
import Layout from "@/components/Layout";

export default function Perfil(){
    return (
        <Layout>
            <div className="flex h-screen">
                <Header/>
                <div className="w-full h-full flex"  >
                    <h1 className="mx-auto my-auto text-5xl font-bold">Seu perfil</h1>
                </div>
            </div>
        </Layout>
        
    );
}