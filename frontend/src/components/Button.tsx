import React from "react";
import type { IconType } from "react-icons";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    type?: "button" | "submit";
    onClick?: () => void;
    name: string;
    Icon?: IconType;
}
function Button({ type, onClick, name, Icon }: ButtonProps) {
    return (
        <>
            <button type={type} onClick={onClick}>
                {Icon && <Icon />}
                {name}
            </button>
        </>
    );
}

export default Button;
