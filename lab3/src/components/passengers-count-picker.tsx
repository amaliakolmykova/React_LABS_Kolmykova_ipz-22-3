import PlusOrMinusButton from "./ui/plus-or-minus-button.tsx";


type Props = {
    title: string
    description: string
    passengerType: 'adultsCount' | 'children'
    minNumber: number
    count: number
    setValueToState: (passengerType: 'adultsCount' | 'children', count: number) => void
}

export default function PassengersCountPicker({
                                                  title,
                                                  passengerType,
                                                  count,
                                                  setValueToState,
                                                  minNumber,
                                                  description
                                              }: Props) {
    function handleClick(type: string) {
        if (type === '-') {
            if (count > minNumber) {
                const result = count - 1
                setValueToState(passengerType, result)
            }
        } else {
            const result = count + 1
            setValueToState(passengerType, result)
        }
    }

    return (
        <div className='flex justify-between gap-3'>
            <div>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-[13px]'>{description}</p>
            </div>

            <div>
                <div className='flex border-2 border-black rounded-md gap-4 items-center'>
                    <PlusOrMinusButton disabled={count === minNumber} onClick={handleClick} type='-'/>
                    <span>{count}</span>
                    <PlusOrMinusButton onClick={handleClick} type='+'/>
                </div>
            </div>
        </div>
    )
}