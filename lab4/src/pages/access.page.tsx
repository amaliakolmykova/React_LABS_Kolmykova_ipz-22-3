import { useNavigate } from "react-router-dom";

export function AccessPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            <p className="text-lg mt-2 text-green-600">
                The page has been opened successfully.
            </p>
            <button
                onClick={() => navigate('/')}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Return to the main page
            </button>
        </div>
    );
}
