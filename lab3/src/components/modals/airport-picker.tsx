import ButtonComponent from "../ui/button.tsx";

type Props = {
    setIsOpenDropDown: (value: boolean) => void
    onClick: (airportName: string) => void
}

export default function AirportPicker({setIsOpenDropDown, onClick}: Props) {
    const airports = [
        {
            shortName: "KYA",
            name: 'Аероропорт Конья, Туреччина'
        },
        {
            shortName: "FUK",
            name: 'Аероропорт Фукуока, Японія'
        },
        {
            shortName: "AKL",
            name: 'Аероропорт Окленда, Нова Зеландія'
        },
        {
            shortName: "OSL",
            name: 'Аероропорт Осло, Норвегія'
        },
        {
            shortName: "MPH",
            name: 'Аероропорт Катіклан, Філіпіни'
        },
    ];


    return (
        <div
            className="flex flex-col absolute p-3 min-w-48 min-h-36 bg-white border border-neutral-300 rounded-md mt-1 shadow-md z-10">
            <input
                className='shadow-md p-2 rounded-md border-1 bg-neutral-50'
                placeholder='Аеропорт чи місто'
            />
            <ul>
                {airports.map((airport) => (
                    <li className='p-1 hover:bg-gray-50' key={airport.shortName}>
                        <button onClick={() => onClick(airport.shortName)}><span className='font-bold'>{airport.shortName}</span> <span>{airport.name}</span></button>
                    </li>
                ))}
            </ul>
            <div className='mt-9'>
                <ButtonComponent onClickFunction={() => setIsOpenDropDown(false)}>Готово</ButtonComponent>
            </div>

        </div>
    )
}