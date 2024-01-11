"use client";
import React from "react";

interface Props {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    data_html?: boolean;
    data_tip?: string;
    type?: "button" | "submit" | "reset" | undefined;
    noDisabledClass?: boolean;
    className?: string;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    disabled,
    data_html,
    type,
    data_tip,
    className,
}) => {
    return (
        <button
            type={type || "button"}
            data-tip={data_tip}
            data-html={data_html}
            onClick={() => { onClick && onClick() }}
            disabled={disabled}
            className={`w-full lg:p-4 p-3 text-white bg-fgc rounded-xl ${className}`
            }>
            {children}
        </button>
    );
};

export default Button;