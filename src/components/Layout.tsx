import Image from "next/image";
import { ReactNode } from "react";
import imgWapp from '../assets/icon-wpp.svg';
import { Header } from "./Header";
interface Layout {
    children: ReactNode;
}

export default function Layout(props: Layout){
    return (
        <div>
            <Header/>
            <a className='sm:left-4' href="https://chat.whatsapp.com/FOQ0sQB0HULCZYtgQAv0eW" target="_blank">
                <Image className='fixed-bottom w-16 z-20' src={imgWapp} alt=""/>
            </a>
            {props.children}


        </div>
        
    );
}