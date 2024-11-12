import ButtonComponent from "./ui/button.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {ArrowLeftRight, PlaneLanding, PlaneTakeoff} from "lucide-react";
import PassengersInput from "./passengers-input.tsx";
import {PassengersStateType} from "./modals/passengers-picker.tsx";
import AirportInput from "./airport-input.tsx";
import CalenderInput from "./calender-input.tsx";


export interface IForm {
    firstAirport: string;
    secondAirport: string;
    date: string;
    passengers: PassengersStateType;
    passengersCount: number;
}


const schema = yup.object().shape({
    firstAirport: yup.string().required('Це поле є обов\'язковим.'),
    secondAirport: yup.string().required('Це поле є обов\'язковим.'),
    date: yup.string().required('Це поле є обов\'язковим.'),
    passengersCount: yup.number().required('Це поле є обов\'язковим.'),
    passengers: yup.object().shape({
        adultsCount: yup.number().required('Введіть кількість дорослих.'),
        children: yup.number().required('Введіть кількість дітей.'),
    }).required('Це поле є обов\'язковим.'),
})


export default function Form() {
    const {handleSubmit,
        register,
        setValue,
        formState: { errors }} = useForm<IForm>(
        {mode: 'onChange',
            resolver: yupResolver(schema),
            defaultValues: {
                passengers: {
                    adultsCount: 0,
                    children: 0,
                },
            },
        })
    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-1'>
            <AirportInput
                icon={<PlaneTakeoff/>}
                placeholder='Звідки?'
                register={register('firstAirport')}
                setValue={setValue}
                inputName='firstAirport'
                errorMessage={errors.firstAirport?.message}
            />
            <button
                type='button'
                className='shadow-md bg-white min-w-10 max-w-[40px] max-h-12 flex items-center justify-center rounded-md active:translate-y-1 transition duration-200'>
                <ArrowLeftRight color='#2564ec'/>
            </button>

            <AirportInput
                icon={<PlaneLanding/>}
                placeholder='Куди?'
                register={register('secondAirport')}
                inputName='secondAirport'
                setValue={setValue}
                errorMessage={errors.secondAirport?.message}
            />

            <CalenderInput
                setValue={setValue}
                register={register('date')}
                errorMessage={errors.secondAirport?.message}
            />
            <PassengersInput
                setValue={setValue}
                register={register('passengersCount')}
                errorMessage={errors.passengersCount?.message}

            />

            <ButtonComponent>Шукати</ButtonComponent>

        </form>
    );
}
