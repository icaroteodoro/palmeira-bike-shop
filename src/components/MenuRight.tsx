import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import search from '../assets/search.svg';

interface MenuProps {
    view: string;
    view2: string;
}

export default function MenuRight(props :MenuProps){
    const [view, setView] = useState('hidden md:hidden');
    const [view2, setView2] = useState('flex md:hidden');

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
        <div className={props.view + 'w-full bg-white'}>
            {/* PESQUISA */}
            <div className={'my-auto mx-auto bg-gray-200 h-10 w-11/12 rounded-lg relative ' + props.view2 + ' md:hidden'}>
                <input placeholder='O que você está procurando?' className='bg-transparent h-full w-full rounded static p-3 font-K2D italic text-lg' type="text" />
                <button className='absolute h-full right-1'>
                    <Image className='my-auto w-7 mr-2' src={search} alt=""/>
                </button>
            </div> 
            <div className='px-5 pt-5'>
                <button className='bg-gray-700 text-white w-5/12 h-10 rounded-full'>Entrar</button>
            </div>
            <div className='block'>
                <div className='mt-5 border-t border-b h-16 flex w-full'>
                    <Link onClick={viewMenu} href="/masculino" className='font-semibold text-2xl my-auto px-5'>Masculino</Link>
                </div>
                <div className='mt-5 border-t border-b h-16 flex'>
                    <Link onClick={viewMenu} href="/feminino" className='font-semibold text-2xl my-auto px-5'>Feminino</Link>
                </div>
                <div className='mt-5 border-t border-b h-16 flex'>
                    <Link onClick={viewMenu} href="/equipamentos" className='font-semibold text-2xl my-auto px-5'>Equipamentos</Link>
                </div>
                <div className='mt-5 border-t border-b h-16 flex'>
                    <Link onClick={viewMenu} href="/produtos" className='font-semibold text-2xl my-auto px-5'>Produtos</Link>
                </div>
                    
            </div>

        </div>
    );
}