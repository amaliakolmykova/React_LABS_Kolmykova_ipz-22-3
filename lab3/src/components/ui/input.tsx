import {UseFormRegisterReturn} from "react-hook-form";


type Props = {
    register: UseFormRegisterReturn
    placeholder: string
    icon?: JSX.Element
    setIsOpenDropDown: (value: boolean) => void
}


export default function InputComponent({register, placeholder, icon, setIsOpenDropDown}: Props) {
    return (
        <div className='flex items-center'>
            {icon && <span className='absolute opacity-50'>{icon}</span>}
            <input className='text-black font-bold rounded-md pl-9 px-2 py-3 shadow-md max-w-44 focus:outline-none'
                   placeholder={placeholder}
                   {...register}
                   onFocus={() => setIsOpenDropDown(true)}
            />
        </div>
    )
}