import ButtonComponent from "../ui/button.tsx";
import {useEffect, useState} from "react";
import PassengersCountPicker from "../passengers-count-picker.tsx";
import {UseFormSetValue} from "react-hook-form";
import {IForm} from "../form.tsx";

export type PassengersStateType = {
    adultsCount: number,
    children: number
}

export default function PassengersPicker({setIsOpenDropDown, setValue}: { setIsOpenDropDown: (value: boolean) => void, setValue:UseFormSetValue<IForm> }) {
    const [passengersCount, setPassengersCount] = useState<PassengersStateType>(
        {
            adultsCount: 1,
            children: 0
        })
    const totalPassengers = Object.values(passengersCount)
    function updateCount(passengerType:'adultsCount' | 'children', count: number) {
        setPassengersCount(prevState => {
            const updatedState = { ...prevState }
            updatedState[passengerType] = count
            return updatedState
        })
    }

    useEffect(() => {
        setValue('passengers', passengersCount)
        setValue('passengersCount', totalPassengers[0] + totalPassengers[1])
    }, [passengersCount])

    return (
        <div className="absolute p-3 min-w-48 min-h-36 bg-white border border-neutral-300 rounded-md mt-1 shadow-md z-10">

            <div className='flex flex-col gap-3'>
                <PassengersCountPicker title='Дорослі' description='Понад 18 років' passengerType='adultsCount' count={passengersCount.adultsCount} minNumber={1} setValueToState={updateCount} />
                <PassengersCountPicker title='Діти' description='Вік 0–17' passengerType='children' count={passengersCount.children} minNumber={0} setValueToState={updateCount} />
            </div>

            <div className='flex justify-between mt-3'>
                {totalPassengers[0] > 0 && totalPassengers[1] === 0 ?
                <p>{totalPassengers[0]} доросли{totalPassengers[0] === 1 ? 'й' : 'х'}</p> :
                <p>{totalPassengers[0] + totalPassengers[1]} пасажирів</p>
                }
                <ButtonComponent onClickFunction={() => setIsOpenDropDown(false)}>Готово</ButtonComponent>
            </div>

        </div>
    )
}