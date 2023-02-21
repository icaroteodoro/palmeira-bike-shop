import  Image  from 'next/image' 

import  profileIcon  from '../assets/profile.svg';
import favIcon from '../assets/fav.svg';
import carIcon from '../assets/car.svg';
import search from '../assets/search.svg';


export function Header(){
    return (
        // HEADER
        <div className='fixed w-full z-10'>
            <div className='bg-gray-700 mx-auto items-center h-8 flex'>
                <div className='absolute right-0 flex text-white'>
                <a href="" className='mr-3 my-auto font-sunflower font-medium text-xl'>CADASTRAR</a>
                <div className='bg-gray-400 w-32 h-8 flex'>
                    <a href="" className='my-auto mx-auto font-sunflower font-medium text-xl'>ENTRAR</a>
                </div>
                </div>
            </div>

            <div className='bg-white h-16 flex'>
                <h1 className='font-bold text-1xl md:text-2xl my-auto ml-10 lg:ml-32 font-K2D italic'>Palmeira Bike Shop</h1>
                {/* PESQUISA */}
                <div className='my-auto mx-auto bg-gray-200 h-10 w-4/12 rounded-lg relative hidden sm:flex'>
                    <input placeholder='O que você está procurando?' className='bg-transparent h-full w-full rounded static p-3 font-K2D italic text-lg' type="text" />
                    <button className='absolute h-full right-1'>
                        <Image className='my-auto w-7 mr-2' src={search} alt=""/>
                    </button>
                </div> 
                {/* PROFILE  FAV CAR */}
                <div className='my-auto p-5 w-56 hidden sm:flex'>
                    <a href="" className='mx-auto'><Image src={profileIcon} alt="" /></a>
                    <a href="" className='mx-auto'><Image src={favIcon} alt="" /></a>
                    <a href="" className='mx-auto'><Image src={carIcon} alt="" /></a>
                </div>
            </div>
            <div className='h-9 bg-gray-200 text-2xl font-sunflower text-gray-400 hidden md:flex'>
                <div className='mx-auto my-auto'>   
                    <a href="" className='m-5'>Masculino</a>
                    <a href="" className='m-5'>Feminino</a>
                    <a href="" className='m-5'>Equipamentos</a>
                    <a href="" className='m-5'>Produtos</a>
                </div>
            </div>
        </div>
    );
}