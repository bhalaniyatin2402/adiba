"use client";
import Image from "next/image";
import React from "react";

interface Props {
    title: string;
    sitemap: string;
    image: string;
}

const SecondaryHero: React.FC<Props> = ({
    title,
    sitemap,
    image,
}) => {
    return (
        <div className="secondary-hero w-full px-6 lg:px-18 py-12 lg:py-24 relative overflow-hidden m-auto">
            <div className="container m-auto">

                <div className="container relative">
                    <Image src={image} height={200} width={200} className="w-[160px] lg:w-[300px] lg:h-auto  absolute -right-8 -top-7 lg:right-0 lg:-bottom-20 lg:-top-16" alt="" />
                </div>
                <Image src={"/images/secondary-hero-square.svg"} height={200} width={200} className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] absolute left-0 -top-3" alt="" />
                <Image src={"/images/secondary-hero-square-right.svg"} height={200} width={200} className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] absolute right-0 -bottom-3" alt="" />
                <div className=" m-auto  items-start gap-24 flex flex-col lg:flex-row">
                    <div className="grid justify-start items-center gap-6">
                        <div className=" text-white text-26 lg:text-32 font-bold ">
                            {title}
                        </div>
                        <div className="flex w-60 text-white">
                            {sitemap}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryHero;