import {useNavigate} from "react-router-dom";
import ButtonUi from "../components/ui/button.ui.tsx";

export function ErrorPage({message}: { message?: string }) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            <h1 className="text-6xl font-bold text-red-600">{message ? message : 404}</h1>
            {
                message &&
                <p className="text-lg mt-2 text-gray-700">
                    You don't have permission to view this page.
                </p>
            }
            <ButtonUi
                onClick={() => navigate('/')}
            >
                Go Back Home
            </ButtonUi>
        </div>
    )
}