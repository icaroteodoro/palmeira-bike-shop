import { Inter } from '@next/font/google'


import { HomePage } from '../components/HomePage';
import imgWapp from '../assets/icon-wpp.svg';
import Image from 'next/image';
import { Header } from '@/components/Header';
import logo from '../assets/logo-home.svg';
import { Letreiro } from '@/components/Letreiro';
import { SlidePage } from '@/components/SlidePage';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Header/>
      <a href="">
        <Image className='fixed-bottom w-16' src={imgWapp} alt=""/>
      </a>
      <HomePage/>
      <Letreiro/>
      <SlidePage/>
    </div>
  )
}
