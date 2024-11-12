import Container from "./components/container.tsx";
import Form from "./components/form.tsx";

function App() {


    return (
        <Container>
            <h1 className='font-bold text-3xl mb-2'>Порівнюйте і бронюйте перельоти з легкістю</h1>
            <p className='mb-5'>Знайдіть напрямок для подорожі своєї мрії</p>
            <Form />
        </Container>
    )
}

export default App
