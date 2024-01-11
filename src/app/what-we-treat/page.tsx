"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import SecondaryHero from "@/components/common/SecondaryHero";
import { useState } from "react";
import HeadingTitle from "@/components/common/HeadingTitle";
import HeadingSubTitle from "@/components/common/HeadingSubTitle";

export default function WhatWeTreat() {
    const [treatList, setTreatList] = useState([
        "Allergy and Immunology",
        "Medical genetics",
        "Cardiologist",
        "Neurology",
        "Dermatology",
        "Obstetrics and gynecology",
        "Orthopedics",
        "Physical medicine and rehabilitation",
        "Diagnostic radiology",
        "Preventive medicine",
        "Primary care",
        "Psychiatry",
        "Internal medicine",
        "Pediatrics",
        "Mental health care",
    ]);
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="What we treat"
                sitemap="Home > What we treat"
                image="/images/doctor-3.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-6">
                    <HeadingTitle className="font-bold">
                        Our doctors are specialists who primarily work in the
                        following areas:
                    </HeadingTitle>

                    <ul className="text-textSecondary grid lg:grid-cols-2 grid-cols-1 gap-3 list-disc pl-6">
                        {treatList.map((item: string, index: number) => (
                            <li key={"treat_" + index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full px-6 lg:px-18 py-8 bg-fgc overflow-hidden relative">
                <div className="container m-auto flex-grow justify-start gap-6 flex items-center flex-col">
                    <div className=" bottom-[-80%] -left-56 lg:top-16 lg:-left-56 opacity-20 w-80 h-80 absolute">
                        <div className="relative">
                            <div className="w-80 h-80 p-4 origin-top-left rounded-full border-4 border-white">
                                <div className="w-[280px] h-[280px] p-4 origin-top-left rounded-full border-4 border-white">
                                    <div className="w-60 h-60 p-4 origin-top-left rounded-full border-4 border-white">
                                        <div className="w-[200px] h-[200px] origin-top-left rounded-full border-4 border-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white lg:text-32 font-bold text-lg">
                            Start with adiba now!
                        </span>
                    </div>
                    <div className=" flex gap-5">
                        <Link
                            href={"/check-your-symptoms"}
                            className="w-full lg:w-auto whitespace-nowrap px-3 py-[14px] lg:px-8 lg:py-3 text-xs lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold"
                        >
                            Check your symptoms
                        </Link>
                        <Link
                            href={"/book-appointment"}
                            className="w-full lg:w-auto whitespace-nowrap px-3 py-[14px] lg:px-8 lg:py-3 text-xs lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
                        >
                            Get appointment
                        </Link>
                    </div>

                    <div className="origin-top-left top-[-80%] -right-56 lg:top-auto lg:bottom-16 lg:-right-56 opacity-20 w-80 h-80 absolute">
                        <div className="relative">
                            <div className="w-80 h-80 p-4 origin-top-left rounded-full border-4 border-white">
                                <div className="w-[280px] h-[280px] p-4 origin-top-left rounded-full border-4 border-white">
                                    <div className="w-60 h-60 p-4 origin-top-left rounded-full border-4 border-white">
                                        <div className="w-[200px] h-[200px] origin-top-left rounded-full border-4 border-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
