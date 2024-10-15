import {ChevronRight, Heart} from "lucide-react";
import Button from "../ui/button.tsx";

type Props = {
    name:string,
    shortDescription:string,
    description:string,
    price:number
}

export default function ProductDescription({name, shortDescription, description, price}:Props){
    return (
        <div className='w-96 min-h-[320px] h-auto bg-[#3a3a3c] rounded-3xl p-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='text-[#d1d1d6] mt-1'>{shortDescription}</p>
                </div>
                <Heart size={20} fill={'#fff'}/>
            </div>

            <h1 className='my-4 text-[#d1d1d6]'>{description}</h1>

            <div className='flex justify-between'>
                <h1 className='text-xl font-bold'>${price}</h1>
                <Button>
                    <div className='flex gap-1'>Add to cart <ChevronRight/></div>
                </Button>
            </div>

        </div>
    )
}