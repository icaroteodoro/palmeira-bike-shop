import  Image  from 'next/image' ;
import NextLink from 'next/link';

import  profileIcon  from '../assets/profile.svg';
import favIcon from '../assets/fav.svg';
import carIcon from '../assets/car.svg';
import search from '../assets/search.svg';
import toggle from '../assets/toggle.svg'
import MenuRight from '../components/MenuRight'
import { useState } from 'react';




export function Header(){
    const [view, setView] = useState('hidden md:hidden');
    const [view2, setView2] = useState('flex md:hidden');
    const login = false;

    function viewMenu(){
        if(view == 'hidden md:hidden'){
            setView('block md:hidden');
            setView2('flex md:hidden');
        }else if(view =='block md:hidden'){
            setView('hidden md:hidden');
            setView2('hidden md:hidden');
        }
    }
    return (
        // HEADER
        <div className='fixed w-full z-10'>
            <div className='bg-gray-700 mx-auto items-center h-8 flex'>
                <div className='absolute right-0 flex text-white'>
                    <NextLink href="./cadastro" className='mr-3 my-auto font-sunflower font-medium text-xl'>CADASTRAR</NextLink>
                    <div className='bg-gray-400 w-32 h-8 flex'>
                        <NextLink href='/login' className='my-auto mx-auto font-sunflower font-medium text-xl'>{!login ?  'ENTRAR' : 'SAIR'}</NextLink>
                    </div>
                </div>
            </div>

            <div className='bg-white h-16 flex'>
                <h1 className='font-bold text-1xl md:text-2xl my-auto ml-10 lg:ml-32 font-K2D italic'><NextLink href='/'>Palmeira Bike Shop</NextLink></h1>
                {/* PESQUISA */}
                <div className='my-auto mx-auto bg-gray-200 h-10 w-4/12 rounded-lg relative hidden sm:flex'>
                    <input placeholder='O que você está procurando?' className='bg-transparent h-full w-full rounded static p-3 font-K2D italic text-lg' type="text" />
                    <button className='absolute h-full right-1'>
                        <Image className='my-auto w-7 mr-2' src={search} alt=""/>
                    </button>
                </div> 
                {/* PROFILE  FAV CAR */}
                <div className='my-auto p-5 w-56 hidden none md:flex'>
                    <a href="" className='mx-auto'><Image src={profileIcon} alt="" /></a>
                    <a href="" className='mx-auto'><Image src={favIcon} alt="" /></a>
                    <a href="" className='mx-auto'><Image src={carIcon} alt="" /></a>
                </div>
                {/* SANDUICHE BUTTON */}
                <div className='my-auto ml-36 md:hidden'>
                    <button typeof='button' onClick={viewMenu}><Image src={toggle} alt="toggle"/></button>
                </div>
            </div>
            <MenuRight view={view} view2={view2}/>
            <div className='h-9 bg-gray-200 text-2xl font-sunflower text-gray-400 hidden md:flex'>
                <div className='mx-auto my-auto'>   
                    <NextLink href="/masculino" className='m-5'>Masculino</NextLink>
                    <NextLink href="/feminino" className='m-5'>Feminino</NextLink>
                    <NextLink href="/equipamentos" className='m-5'>Equipamentos</NextLink>
                    <NextLink href="/produtos" className='m-5'>Produtos</NextLink>
                </div>
            </div>
        </div>
    );
}