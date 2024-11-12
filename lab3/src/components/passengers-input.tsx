import InputComponent from "./ui/input.tsx";
import {User} from "lucide-react";
import {UseFormRegisterReturn, UseFormSetValue} from "react-hook-form";
import {useState} from "react";
import PassengersPicker from "./modals/passengers-picker.tsx";
import {IForm} from "./form.tsx";
import InputErrorText from "./input-error-text.tsx";


export default function PassengersInput({register, setValue, errorMessage}: {
    register: UseFormRegisterReturn,
    setValue:  UseFormSetValue<IForm>,
    errorMessage:  string | undefined

}) {
    const [isOpenPassengersModal, setIsOpenPassengersModal] = useState<boolean>(false)

    return (
        <div>
            <InputComponent
                register={register}
                placeholder='Пасажири'
                setIsOpenDropDown={setIsOpenPassengersModal}
                icon={<User/>
            }

            />
            {errorMessage &&
                <InputErrorText errorText={errorMessage} />
            }
            {isOpenPassengersModal &&
                <PassengersPicker
                    setValue={setValue}
                    setIsOpenDropDown={setIsOpenPassengersModal}
                />
            }
        </div>
    )
}