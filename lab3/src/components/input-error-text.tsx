import {Triangle} from "lucide-react";

export default function InputErrorText({errorText}: { errorText: string }) {
    return (
        <>
            <Triangle className='absolute' fill={'#ec4242'} color={'#ec4242'}/>

            <div className='bg-red-500 rounded-md mt-3 h-10 content-center'>
                <p className='text-white font-semibold text-xs ml-2 tracking-wider'>{errorText}</p>
            </div>
        </>
    )
}