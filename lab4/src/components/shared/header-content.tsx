import ButtonUi from "../ui/button.ui.tsx";
import {ChevronRight} from "lucide-react";
import {useNavigate} from "react-router-dom";


export function HeaderContent() {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between ml-36'>
            <div>
                <h1 className='text-7xl max-w-36 font-bold mt-36'>
                    Quality,
                    Safety,
                    Transparency.
                </h1>
                <ButtonUi onClick={() => navigate('/access')}>
                    <div className='flex items-center gap-2'>Access full stock <ChevronRight size={17} /></div>
                </ButtonUi>
            </div>
            <img className='w-[700px]' src='/porsche-model5%201.png' alt='porsche-model5'/>
        </div>
    )
}