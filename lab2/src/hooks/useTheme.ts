import {useEffect, useState} from "react";
import Cookies from 'js-cookie'

type Return = {
    theme: 'dark' | 'light'
    changeTheme: () => void
}

export default function UseTheme():Return{
    const [theme, setTheme] = useState<'dark' | 'light'>('light')

    useEffect(() => {
        const savedTheme = Cookies.get('theme')
        if(savedTheme)
            setTheme(savedTheme as 'dark' | 'light')
    }, [])

    function changeTheme(){
        setTheme(prevState => {
            return prevState === 'dark' ? 'light' : 'dark'
        })
    }

    useEffect(() => {
        Cookies.set('theme', theme, { expires: 365 })
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme]);


    return { theme, changeTheme };
}