import useTheme from "./hooks/useTheme";

function App() {
    const { theme, changeTheme } = useTheme();

    return (
        <div className="p-4 bg-theme text-theme min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-xl">Current Theme: {theme}</h1>
            <button
                onClick={changeTheme}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Change Theme
            </button>
        </div>
    )
}

export default App
