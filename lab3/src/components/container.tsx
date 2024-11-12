import {ReactNode} from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div className='max-w-[1250px] mx-auto mt-52 '
        >{children}</div>
    )
}