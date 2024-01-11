/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SecondaryHero from "@/components/common/SecondaryHero";
import Icon from "@/components/common/Icon";
import HeadingTitle from "@/components/common/HeadingTitle";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "@/components/common/Modal";

export default function BookAppointment() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const datePickerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const openDatePicker = () => {
        setIsDatePickerOpen(true);
    };

    const closeDatePicker = () => {
        setIsDatePickerOpen(false);
    };

    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="Book an appointment"
                sitemap="Home > Book an appointment"
                image="/images/doctor-1.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-6">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20">
                        <div className="col-span-1 grid gap-6">
                            <HeadingTitle className="!font-bold">
                                Pick your preferred date and time
                            </HeadingTitle>

                            <p className="text-textSecondary">
                                Please select your preferred appointment date
                                and time. The final timing will be based on the
                                doctor's availability. We'll let you know the
                                confirmed schedule as soon as possible!
                            </p>
                            <div>
                                <button className="px-4 py-[15px] lg:px-8 lg:py-4 border rounded-lg border-fgc text-base">
                                    Back
                                </button>

                                <button
                                    type="button"
                                    className="ml-4 px-4 py-[15px] lg:px-8 lg:py-4 border rounded-lg bg-fgc text-base text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                    }}
                                >
                                    Continue
                                </button>
                                <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                            </div>
                        </div>
                        <div className="col-span-1 place-self-center w-full">
                            <div className="grid gap-8">
                                <div className="grid relative">
                                    <DatePicker
                                        ref={datePickerRef}
                                        className="w-full rounded-[12px] border border-border px-2.5 lg:py-4 py-3 text-textSecondary focus:border-gray-400  focus:outline-none disabled:cursor-not-allowed dark:disabled:bg-disable-dark dark:border-darkBorder dark:text-text-dark"
                                        selected={startDate}
                                        placeholderText="Select a timeslot"
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="yyyy-MM-dd"
                                        open={isDatePickerOpen}
                                        onInputClick={openDatePicker}
                                        onClickOutside={closeDatePicker}
                                    />
                                    <span className="absolute top-5 lg:top-6 lg:mt-0.5 right-3 z-10 h-5 w-5 -translate-y-1/2 cursor-pointer">
                                        <Icon
                                            icon="chevron-down"
                                            className="h-5 w-5"
                                            onClick={openDatePicker}
                                        />
                                    </span>
                                </div>

                                <div className="">
                                    <textarea
                                        className="border relative block w-full appearance-none rounded-[12px] border-border p-4 lg:px-2.5 lg:py-4 text-textSecondary focus:z-10 focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed dark:disabled:bg-disable-dark  dark:border-darkBorder dark:text-text-dark text-sm "
                                        placeholder="Enter your symptoms (min 15 characters, max 150 characters)"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            href={"#"}
                            className="w-full lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold"
                        >
                            Check your symptoms
                        </Link>
                        <Link
                            href={"/contact-us"}
                            className="w-full lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
                        >
                            Contact us
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
