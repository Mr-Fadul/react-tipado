import { ButtonHTMLAttributes, ClassAttributes, ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

function Button(props: ButtonProps) {
    return <button {...props}></button>
}

export default Button;