"use client";
import { useState } from "react";
import { UseFormRegister, UseFormTrigger } from "react-hook-form";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

interface Props {
    name: string;
    label?: string;
    preIcon?: string;
    labelClass?: string;
    isOptional?: boolean;
    placeholder?: string;
    onClick?: () => void;
    error?: string;
    errorIcon?: boolean;
    register?: UseFormRegister<any>;
    className?: string;
    id?: string;
    type?: string;
    defaultValue?: string | number;
    showErrorPlace?: boolean;
    disabled?: boolean;
    required?: boolean;
    trigger?: UseFormTrigger<any>;
    max?: any;
    setValue?: any;
}

export function Input({
    name,
    label,
    preIcon,
    onClick,
    labelClass,
    isOptional = false,
    error,
    errorIcon,
    register,
    required,
    placeholder,
    disabled,
    className,
    id,
    type = "text",
    defaultValue,
    showErrorPlace,
    trigger,
    setValue,
    ...rest
}: Props): JSX.Element {
    const inputType = type || "";
    const [showPassword, setShowPassword] = useState(false);

    const pathname = usePathname();

    return (
        <div className="relative">
            <div className="flex gap-x-2">
                {label && (
                    <label
                        htmlFor={name}
                        className={`capitalize mb-1 block font-bold text-2xl ${labelClass}`}
                    >
                        {label}
                    </label>
                )}
                {isOptional && (
                    <label
                        htmlFor={name}
                        className="capitalize mb-1 block text-xl text-textSecondary"
                    >
                        (optional)
                    </label>
                )}
            </div>

            <input
                type={
                    inputType === "password" && showPassword
                        ? "text"
                        : inputType
                }
                id={id || name}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onClick={() => {
                    onClick && onClick();
                }}
                {...rest}
                className={`relative block w-full appearance-none rounded-[12px] border  border-border px-2.5 lg:py-4 py-3 text-textSecondary  focus:z-10 focus:border-gray-400 focus:outline-none   disabled:cursor-not-allowed dark:disabled:bg-disable-dark  dark:border-darkBorder dark:text-text-dark ${className} ${inputType === "password" && "pr-10"
                    } ${preIcon && "pl-16"} ${preIcon === "phone" && "pl-16"}`}
                {...(register &&
                    register(name, {
                        onChange: (e) => {
                            console.log("e", e.target.value);
                            setValue && setValue(name, e.target.value);
                            // setTimeout(() => {
                            trigger && trigger(name);
                            // });
                        },
                    }))}
            />

            {preIcon && (
                <>
                    {preIcon === "phone" ? (
                        <span className="w-5 absolute top-1/2 transform -translate-y-1/2 left-3 z-[11] ">
                            <svg
                                width="40"
                                height="24"
                                viewBox="0 0 40 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24 4H0V20.0002H24V4Z"
                                    fill="#D80027"
                                />
                                <path d="M24 4H0V9.3332H24V4Z" fill="black" />
                                <path
                                    d="M24 14.6665H0V19.9997H24V14.6665Z"
                                    fill="#FFDA44"
                                />
                                <path
                                    d="M30.084 10.8335L33.0007 13.1668L35.9173 10.8335"
                                    stroke="#28303F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    ) : (
                        <Icon
                            icon={preIcon}
                            className="w-6 absolute top-1/2 transform -translate-y-1/2 left-5 z-[11]"
                        />
                    )}
                </>
            )}

            {inputType === "password" && (
                <Icon
                    icon={showPassword ? "eye" : "eye-slash"}
                    onClick={() => !disabled && setShowPassword(!showPassword)}
                    className="absolute top-6 lg:mt-1.5 right-3 z-10 h-5 w-5 -translate-y-1/2 cursor-pointer"
                />
            )}

            {inputType === "message" && (
                <Icon
                    icon="send"
                    className="absolute top-5 lg:mt-1.5 right-3 z-10 h-5 w-5 -translate-y-1/2 cursor-pointer -rotate-45"
                />
            )}

            {(showErrorPlace || error) && (
                <span className="text-red-300 pl-3">
                    {error && (
                        <>
                            {errorIcon && (
                                <Icon
                                    icon="exclamation-circle"
                                    className="absolute top-6 right-2 z-10 h-6 w-6"
                                />
                            )}
                            <span>{error}</span>
                        </>
                    )}
                    &nbsp;
                </span>
            )}
        </div>
    );
}
