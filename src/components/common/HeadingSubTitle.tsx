"use client";
import React from "react";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const HeadingSubTitle: React.FC<Props> = ({
    children,
    className,
}) => {
    return (
        <span className={`text-fgc text-lg lg:text-2xl font-semibold ${className}`}>
            {children}
        </span>
    );
};

export default HeadingSubTitle;