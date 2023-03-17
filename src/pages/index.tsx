import { Inter } from '@next/font/google'


import { HomePage } from '../components/HomePage';

import { Letreiro } from '../components/Letreiro';
import { SlidePage } from '../components/SlidePage';
import Layout from '../components/Layout';
import CardProduto from '@/components/cardProduto';

import Celin from '../images/celin.png'
const celin = '/images/celin.png';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Layout>
        <HomePage/>
        <Letreiro/>
        <SlidePage/>
        <CardProduto urlImg={Celin} name='CELIN DE MARCA' price='R$ 299,99' category='PRODUTOS'/>
      </Layout>
      
    </div>
  )
}
