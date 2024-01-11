"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SecondaryHero from "@/components/common/SecondaryHero";
import { Input } from "@/components/common/Input";
import Image from "next/image";

export default function HowAdibaWorks() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="How adiba works"
                sitemap="Home > How adiba works"
                image="/images/doctor-2.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-6">
                    <div className="flex flex-col lg:flex-row lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full text-xl lg:text-32 font-semibold leading-[120%]">
                        <div className="flex gap-6 items-center w-full flex-grow">
                            <div className="relative">
                                <div className="first_line_arrow text-42 lg:text-8xl font-extrabold text-textSecondary/20">
                                    01
                                </div>
                            </div>
                            <div className="lg:w-7/12 w-full justify-self-stretch">
                                <div className="grid gap-6">
                                    Book easily online an appointment with a
                                    doctor
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ml-12 lg:ml-0 shadow-[20px_32px_66px_rgba(41,55,84,0.08)] px-16 py-8 rounded-2xl w-[265px] h-[222px] lg:w-[416px] lg:h-[350px] items-center flex justify-center">
                                <Image
                                    src={"/images/book-calendar.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full relative z-[1]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full text-xl lg:text-32 font-semibold leading-[120%]">
                        <div className="">
                            <div className="ml-12 lg:ml-0 shadow-[20px_32px_66px_rgba(41,55,84,0.08)] px-16 py-8 rounded-2xl w-[265px] h-[222px] lg:w-[416px] lg:h-[350px] items-center flex justify-center">
                                <Image
                                    src={"/images/book-our-ai.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-full lg:h-auto w-full lg:w-auto relative z-[1]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 items-center w-full flex-grow">
                            <div className="relative">
                                <div className="second_line_arrow text-42 lg:text-8xl font-extrabold text-textSecondary/20">
                                    02
                                </div>
                            </div>
                            <div className="lg:w-7/12">
                                <div className="grid gap-6">
                                    Or first check your symptoms with our AI
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full text-xl lg:text-32 font-semibold leading-[120%]">
                        <div className="flex gap-6 items-center w-full flex-grow">
                            <div className="relative">
                                <div className="first_line_arrow text-42 lg:text-8xl font-extrabold text-textSecondary/20">
                                    03
                                </div>
                            </div>
                            <div className="lg:w-7/12">
                                <div className="grid gap-6">
                                    Leave your contact data and set up an
                                    appointment
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ml-12 lg:ml-0 shadow-[20px_32px_66px_rgba(41,55,84,0.08)] px-16 py-8 rounded-2xl w-[265px] h-[222px] lg:w-[416px] lg:h-[350px] items-center flex justify-center">
                                <Image
                                    src={"/images/get-in-touch.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-full w-auto relative z-[1]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full text-xl lg:text-32 font-semibold leading-[120%]">
                        <div>
                            <div className="ml-12 lg:ml-0 shadow-[20px_32px_66px_rgba(41,55,84,0.08)] px-16 py-8 rounded-2xl w-[265px] h-[222px] lg:w-[416px] lg:h-[350px] items-center flex justify-center">
                                <Image
                                    src={"/images/online-video.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-full lg:h-auto w-full lg:w-auto relative z-[1]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 items-center w-full flex-grow">
                            <div className="">
                                <div className="text-42 lg:text-8xl font-extrabold text-textSecondary/20">
                                    04
                                </div>
                            </div>
                            <div className="lg:w-7/12">
                                <div className="grid gap-6">
                                    Have your online video consultation to solve
                                    your complaints
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 pt-6 lg:p-18 lg:pb-0">
                <div className="container m-auto justify-start items-center gap-10 lg:gap-32 flex flex-col-reverse lg:flex-row">
                    <div className="relative px:0 lg:px-10">
                        <Image
                            src={"/images/join-our-adiba-care-team.png"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            className="h-auto min-h-[450px] lg:min-h-[554px] w-auto relative z-[1] -mb-0.5"
                        />
                        {/* <div className="absolute h-[calc(100%-63px)] w-full left-0 top-[63px]  bg-fgc rounded-tl-full rounded-tr-full"></div> */}
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch text-2xl lg:text-32 font-semibold ">
                                Join our adiba care team
                            </div>
                            <div className="self-stretch text-textSecondary text-lg text-center lg:text-left ">
                                Telemedicine reduces operating costs for
                                hospitals, clinics, medical practices and as
                                well as the workload for clinical assistants.
                                Less administration work for healthcare
                                professionals and more attention to the patients
                                and complex care lead to better health outcomes.
                            </div>
                        </div>
                        <div className="w-full text-center lg:text-left">
                            <Link
                                href={"/register-doctor"}
                                className="m-auto px-4 py-[14px] lg:px-8 lg:py-4 bg-fgc rounded-2xl justify-center items-center gap-2.5 inline-flex text-right text-white text-base font-semibold"
                            >
                                For Doctors
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 lg:px-18 py-8 bg-fgc overflow-hidden relative">
                <div className="container m-auto flex-col justify-start items-center gap-6 flex">
                    {/* Side round */}
                    <div className="origin-top-left top-16 -left-56 opacity-20 w-80 h-80 absolute">
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
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                        <div className="lg:col-span-10 grid items-center">
                            <div className="text-center lg:text-left">
                                <div className="text-white text-lg lg:text-32 font-bold">
                                    If you have any questions about our services
                                    and conditions
                                </div>
                                <div className="text-bgc/70 mt-4 text-[10px] lg:text-xl">
                                    Please contact us by emailing{" "}
                                    <span className="underline">
                                        hello@adiba.ai
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:col-span-2 lg:grid gap-5 justify-center">
                            <Link
                                href={"/book-appointment"}
                                className=" lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold text-center"
                            >
                                Get appointment
                            </Link>
                            <Link
                                href={"/contact-us"}
                                className=" lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                    {/* Side round */}
                    <div className="origin-top-left bottom-16 -right-56 opacity-20 w-80 h-80 absolute">
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
