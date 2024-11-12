import InputComponent from "./ui/input.tsx";
import { Calendar } from "lucide-react";
import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { IForm } from "./form.tsx";
import { useState } from "react";
import DatePicker from "./modals/date-picker.tsx";
import InputErrorText from "./input-error-text.tsx";

type Props = {
    register: UseFormRegisterReturn;
    setValue: UseFormSetValue<IForm>;
    errorMessage:  string | undefined

};

export default function CalenderInput({
                                          register,
                                          setValue,
                                          errorMessage
                                      }: Props) {
    const [isOpenAirportModal, setIsOpenCalendarModal] = useState<boolean>(false);

    const handleDateSelect = (date: string) => {
        setValue('date', date)
        setIsOpenCalendarModal(false);
    };


    return (
        <div>
            <InputComponent
                register={register}
                placeholder='Коли?'
                setIsOpenDropDown={setIsOpenCalendarModal}
                icon={<Calendar />}
            />
            {errorMessage &&
                <InputErrorText errorText={errorMessage} />
            }
            {isOpenAirportModal && <DatePicker
                onDateSelect={handleDateSelect}
            />}
        </div>
    );
}

