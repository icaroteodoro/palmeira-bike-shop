
import Image from 'next/image';
import Link from 'next/link';
import logoFooter from '../assets/logo-footer.svg'
import iconInstagram from '../assets/icon-instagram.svg'
import iconLocal from '../assets/icon-local.svg'
import iconMail from '../assets/icon-mail.svg'

export default function Rodape(){
    return (
        <div className="h-96 flex ">
            <div className="w-4/12 md:w-3/12 h-full flex bg-white ">
                <Link className='mx-auto my-auto' href='./'>
                    <Image src={logoFooter} alt='logo rodapé'></Image>
                </Link>
                
            </div>
            <div className='block md:flex w-8/12 md:w-9/12'>
                <div className='w-0 md:w-4/12 h-full bg-black text-white text-xl font-sunflower hidden md:flex p-20'>
                    <div className='block mx-auto'>
                        <h1 className='font-bold text-2xl'>MENU</h1>
                        <div className='mt-6'>
                            <Link className='font-light' href='./masculino'>Masculino</Link>
                        </div>
                        <div className='mt-6'>
                            <Link className='font-light' href='./feminino'>Feminino</Link>
                        </div>
                        <div className='mt-6'>
                            <Link className='font-light' href='./equipamentos'>Equipamentos</Link>
                        </div>
                        <div className='mt-6'>
                            <Link className='font-light' href='./produtos'>Produtos</Link>
                        </div>
                    </div>
                </div>
                <div className='w-12/12 md:w-4/12 h-60 md:h-full bg-black text-white text-sm md:text-xl font-sunflower flex p-5 md:p-20'>
                    <div className='block mx-0 md:mx-auto'>
                        <h1 className='font-bold text-2xl'>Contato</h1>
                        <div className='mt-6 flex'>
                            <Image className='mr-2 w-6 h-6 my-auto' src={iconInstagram } alt=''></Image>
                            <Link className='font-light my-auto' href='https://www.instagram.com/palmeirabikeshop/' target='_blank'>@palmeirabikeshop</Link>
                        </div>
                        <div className='mt-6 flex'>
                            <Image className='mr-2 w-6 h-6 my-auto' src={iconLocal } alt=''></Image>
                            <p className='font-light'>Palmeira dos Índios - AL, Brasil</p>
                        </div>
                        <div className='mt-6 flex'>
                            <Image className='mr-2 w-6 h-6 my-auto' src={iconMail } alt=''></Image>
                            <p className='font-light'>palmeirabikeshop@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='w-12/12 md:w-4/12 h-60 md:h-full bg-black text-white text-sm md:text-xl font-sunflower flex p-5 md:p-20'>
                    <div className='block mx-0 md:mx-auto'>
                        <h1 className='font-bold text-2xl'>Horários</h1>
                        <div className='mt-6 block'>
                            <h2 className='font-medium text-xl'>Seg à Sex</h2>
                            <p className='font-light text-xl'>08h às 17h</p>
                        </div>
                        <div className='mt-6 block'>
                            <h2 className='font-medium text-xl'>Sab e Dom</h2>
                            <p className='font-light text-xl'>Pedal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}