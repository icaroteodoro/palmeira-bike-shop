
import { Header } from "./Header";

import Image from 'next/image';
import logoHome from '../assets/logo-home.svg';
import iconWpp from '../assets/icon-wpp.svg';

export function HomePage(){
    return (
        <div className='h-screen bg-app bg-no-repeat bg-cover flex relative'>
            <title>Palmeira Bike Shop</title>
            <Image className='my-auto mx-auto sm:mx-auto md:mx-96 lg:mx-96 w-72 md:w-80 lg:w-96' src={logoHome} alt=""></Image>
            <p className="absolute bottom-9 lg:bottom-12 left-24 sm:left-52 md:left-72 text-white text-2xl lg:text-6xl font-sunflower">SUA LOJA DE CICLISMO.</p>
        </div>
    );
}