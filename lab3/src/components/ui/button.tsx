type Props = {
    onClickFunction?: () => void
    children: React.ReactNode
}

export default function ButtonComponent({children, onClickFunction}: Props) {
    return (
        <button className='bg-blue-600 text-white text-[14px] shadow-md font-medium rounded-md max-w-36 max-h-20 h-[48px] px-3 py-2
            hover:bg-blue-700 hover:text-gray-100 active:bg-blue-900 active:translate-y-1 transition duration-200'
                onClick={onClickFunction ? onClickFunction : undefined}>
            {children}
        </button>)
}