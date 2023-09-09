import { Inter } from "@next/font/google";

import { HomePage } from "../components/HomePage";

import { Letreiro } from "../components/Letreiro";
import { SlidePage } from "../components/SlidePage";
import Layout from "../components/Layout";
import CardProduto from "@/components/cardProduto";

import UserContext from "../contexts/UserContext";

import ProdutosAreaHome from "@/components/ProdutosAreaHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <UserContext.Provider value={{}}>
      <Layout>
        <HomePage />
        <SlidePage />
        <Letreiro />
        <ProdutosAreaHome />
      </Layout>
    </UserContext.Provider>
  );
}
