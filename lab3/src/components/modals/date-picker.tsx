type DatePickerProps = {
    onDateSelect: (date: string) => void; // New prop for selecting date
};

export default function DatePicker({ onDateSelect }: DatePickerProps) {
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Generate days 1-31

    return (
        <div className="flex flex-col absolute p-3 min-w-48 min-h-36 bg-white border border-neutral-300 rounded-md mt-1 shadow-md z-10">
            <div className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center">
                <div className="flex items-center justify-around px-4 py-6">
                    <button className="p-4 rounded-md bg-indigo-200 text-indigo-600">
                        <svg className="w-4 h-4 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <div className="text-lg">Жовтень 2024</div>
                    <button className="p-4 rounded-md bg-indigo-200 text-indigo-600">
                        <svg className="w-4 h-4 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
                    <div className="text-indigo-600">Пон</div>
                    <div className="text-indigo-600">Вів</div>
                    <div className="text-indigo-600">Сер</div>
                    <div className="text-indigo-600">Чет</div>
                    <div className="text-indigo-600">Пят</div>
                    <div className="text-indigo-600">Суб</div>
                    <div className="text-indigo-600">Нед</div>
                    {days.map((day) => (
                        <a
                            key={`${day}-day`}
                            className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
                            onClick={() => onDateSelect(`${day} Жовтень 2024`)}
                        >
                            {day}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}