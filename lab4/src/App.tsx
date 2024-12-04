import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from "react-router-dom";
import { HomePage, ErrorPage, AccessPage } from "./pages";


const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts && parts.length === 2) {
        const cookieValue = parts.pop()
        return cookieValue ? cookieValue.split(';').shift() : null
    }
    return null
}


const hasAccess = () => {
    return Boolean(getCookie("authToken"));
};


const ProtectedRoute = ({ children }: {children : React.ReactNode}) => {
    return hasAccess() ? children : <Navigate to="/403" replace />;
};


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/access',
        element: (
            <ProtectedRoute>
                <AccessPage />
            </ProtectedRoute>
        ),
    },
    {
        path: '/403',
        element: <ErrorPage message="403 Forbidden: Access Denied" />
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}