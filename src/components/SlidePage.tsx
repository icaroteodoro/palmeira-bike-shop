import Image from "next/image";

import slide1 from '../assets/slide-1.png';

export function SlidePage(){
    return (
        <div className="w-12/12 flex">
            <Image className="w-12/12 mx-auto" src={slide1} alt=""></Image>
        </div>
    );
}