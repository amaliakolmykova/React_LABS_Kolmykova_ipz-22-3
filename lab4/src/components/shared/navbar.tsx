export function Navbar(){
    return (
        <div className='flex justify-between items-center p-2 mx-36'>
            <div>
                <img className='w-[110px]' src='/touringcars.png' alt='touringcars'/>
            </div>
            <ul className='flex gap-7 font-semibold text-[15px]'>
                <li>Sobre</li>
                <li>Contato</li>
                <li>Anunciar</li>
                <li>Estoque</li>
            </ul>
        </div>
    )
}