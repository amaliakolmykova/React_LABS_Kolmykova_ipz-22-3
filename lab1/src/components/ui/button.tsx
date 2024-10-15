export default function Button({children}:{children:React.ReactNode}){
    return (
        <button className='bg-[#0081FB] px-6 py-1 rounded-3xl shadow-md text-md'>{children}</button>
    )
}