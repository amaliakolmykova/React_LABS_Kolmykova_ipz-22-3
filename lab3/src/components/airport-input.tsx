import InputComponent from "./ui/input.tsx";
import {UseFormRegisterReturn, UseFormSetValue} from "react-hook-form";
import {IForm} from "./form.tsx";
import {useState} from "react";
import AirportPicker from "./modals/airport-picker.tsx";
import InputErrorText from "./input-error-text.tsx";


type Props = {
    register: UseFormRegisterReturn,
    setValue: UseFormSetValue<IForm>
    placeholder: string,
    icon: JSX.Element,
    inputName: string
    errorMessage:  string | undefined
}

export default function AirportInput({register, errorMessage,inputName, setValue, placeholder, icon}: Props) {
    const [isOpenAirportModal, setIsOpenAirportModal] = useState<boolean>(false)

    function setSelectedAirport(airportName: string) {
        setIsOpenAirportModal(false)
        setValue(inputName as "firstAirport" | "secondAirport" , airportName)
    }

    return (
        <div>

            <InputComponent
                register={register}
                placeholder={placeholder}
                setIsOpenDropDown={setIsOpenAirportModal}
                icon={icon}
            />
            {errorMessage &&
                <InputErrorText errorText={errorMessage} />
            }
            {isOpenAirportModal &&
                <AirportPicker
                    setIsOpenDropDown={setIsOpenAirportModal}
                    onClick={setSelectedAirport}
                />
            }
        </div>
    )
}