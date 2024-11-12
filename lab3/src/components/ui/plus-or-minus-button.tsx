type Props = {
    type: string,
    onClick: (type: string) => void
    disabled?: boolean
}

export default function PlusOrMinusButton({type, onClick, disabled} : Props){
    return (
        <button
            type='button'
            onClick={() => onClick(type)}
            className={`text-2xl p-2 ${disabled ? 'cursor-not-allowed' : 'hover:bg-blue-200 text-[#2564ec]' }`}>
            {type}
        </button>
    )
}