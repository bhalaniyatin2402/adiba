"use client";
import React from "react";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const HeadingTitle: React.FC<Props> = ({
    children,
    className,
}) => {
    return (
        <span className={`text-fgc text-2xl lg:text-32 lg:leading-[120%] font-semibold ${className}`}>
            {children}
        </span>
    );
};

export default HeadingTitle;