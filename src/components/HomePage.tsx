
import { Header } from "./Header";

import Image from 'next/image';
import logoHome from '../assets/logo-home.svg';
import iconWpp from '../assets/icon-wpp.svg';

export function HomePage(){
    return (
        <div className='h-screen bg-app bg-no-repeat bg-cover flex relative'>
            <title>Palmeira Bike Shop</title>
            <Image className='my-auto mx-96' src={logoHome} alt=""></Image>
            <p className="absolute bottom-14 left-72 text-white text-6xl font-sunflower">SUA LOJA DE CICLISMO.</p>
        </div>
    );
}