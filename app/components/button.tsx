'use client'
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    label: string;
    icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    disabled,
    outline,
    small,
    label,
    icon: Icon
}) => {
    return <button className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    border-black
    ${outline ? 'bg-white' : 'bg-black'}
    ${outline ? 'text-black' : 'text-white'}
    ${small ? 'p-1' : 'p-3'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'font-light' : 'font-semibold'}
    ${small ? 'border-[1px]' : 'border-[2px]'} 
    `}>
        {Icon && <Icon size={20} className="absolute left-3" />}
        {label}</button>
}

export default Button;