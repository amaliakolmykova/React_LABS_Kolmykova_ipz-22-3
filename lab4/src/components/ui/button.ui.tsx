import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function ButtonUi({ children, ...props }: Props) {
    return (
        <button className="bg-black text-white rounded-xl shadow-xl py-1 px-16 my-5 active:translate-y-1" {...props}>
            {children}
        </button>
    );
}
