import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
    urlImg: StaticImageData,
    name: string,
    category: string,
    price: string

}

export default function CardProduto(props : CardProps){
    return (
        <Link href='/paginaProduto' className="w-64 h-64  block">
            <Image className="mx-auto p-5 bg-gray-100 w-full" src={props.urlImg} alt='' width='200' height='100'></Image>
            <div className="flex">
                <h2 className="mx-auto font-medium text-3xl font-sunflower">{props.name}</h2>
            </div>
            <div className="flex">
                <p className="mx-auto">{props.category}</p>
            </div>
            <div className="flex">
                <h3 className="mx-auto text-2xl">{props.price}</h3>
            </div>
            
            
        </Link>
    );
}