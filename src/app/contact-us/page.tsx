"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SecondaryHero from "@/components/common/SecondaryHero";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import HeadingTitle from "@/components/common/HeadingTitle";
import Icon from "@/components/common/Icon";

export default function ContactUs() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="Contact us"
                sitemap="Home > Contact us"
                image="/images/doctor-4.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-6">
                    {/* {contant start} */}
                    <div className="grid lg:grid-cols-2 gap-x-0 ">
                        <div className="max-w-2xl bg-fgc rounded-t-2xl lg:rounded-s-2xl px-4 py-6 lg:p-10 bg-[url('/images/contact-bg.svg')] bg-no-repeat bg-right-top lg:bg-right-top ">
                            <HeadingTitle className="!font-bold text-white block mb-5">
                                Get in touch with us
                            </HeadingTitle>

                            <p className="text-white  mb-5 text-xs leading-5  lg:text-base">
                                If you have any questions about our services and
                                conditions, please contact us by emailing
                            </p>

                            <div className="">
                                <div className="grid gap-6 lg:gap-8">
                                    <div className="flex items-center gap-5">
                                        <span className="bg-white/10 rounded-full text-center w-12 h-12 flex items-center justify-center mt-5">
                                            <Icon
                                                icon="envelope"
                                                className="h-3.5 w-3.5 lg:h-8 lg:w-8 text-white"
                                            />
                                        </span>
                                        <div>
                                            <span className="text-white/25 block mb-1 text-sm lg:text-base">
                                                EMAIL US
                                            </span>
                                            <p className="text-white text-sm lg:text-base">
                                                hello@adiba.ai
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <span className="bg-white/10 rounded-full text-center w-12 h-12 flex items-center justify-center">
                                            <Icon
                                                icon="phone"
                                                className="h-3.5 w-3.5 lg:h-8 lg:w-8 text-white"
                                            />
                                        </span>
                                        <div>
                                            <span className="text-white/25 block mb-1 text-sm lg:text-base">
                                                Phone number
                                            </span>
                                            <p className="text-white text-sm lg:text-base">
                                                +1 234-596-0110
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <span className="bg-white/10 rounded-full text-center w-12 h-12 flex items-center justify-center">
                                            <Icon
                                                icon="map"
                                                className="h-3.5 w-3.5 lg:h-8 lg:w-8 text-white"
                                            />
                                        </span>
                                        <div>
                                            <span className="text-white/25 block mb-1 text-sm lg:text-base">
                                                Address
                                            </span>
                                            <p className="text-white text-sm lg:text-base">
                                                Knowledge Doctors WLL P.O. Box
                                                12000
                                            </p>
                                            <p className="text-white text-sm lg:text-base">
                                                Manama, Kingdom of Bahrain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-[18px] lg:gap-0 lg:grid-cols-2 text-white mt-6 lg:mt-8">
                                    <span className="justify-center lg:justify-start flex items-center before:content-[''] before:me-2 before:w-5 before:h-[2px] before:bg-white">
                                        Connect with us:
                                    </span>
                                    <div className="flex gap-x-2 justify-center">
                                        <span>
                                            <Link
                                                href={"#"}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg border-opacity-20 border  border-white/60"
                                            >
                                                <Image
                                                    src={"./images/union.svg"}
                                                    height={60}
                                                    width={40}
                                                    alt=""
                                                    className="h-4 w-auto"
                                                />
                                            </Link>
                                        </span>
                                        <span className="">
                                            <Link
                                                href={"#"}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg border-opacity-20 border  border-white/60"
                                            >
                                                <Image
                                                    src={"./images/youtube.svg"}
                                                    height={60}
                                                    width={40}
                                                    alt=""
                                                    className="h-4 w-auto "
                                                />
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                href={"#"}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg border-opacity-20 border  border-white/60"
                                            >
                                                <Image
                                                    src={
                                                        "./images/facebook.svg"
                                                    }
                                                    height={60}
                                                    width={40}
                                                    alt=""
                                                    className="h-4 w-auto "
                                                />
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                href={"#"}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg border-opacity-20 border  border-white/60"
                                            >
                                                <Image
                                                    src={
                                                        "./images/instagram-contact.svg"
                                                    }
                                                    height={60}
                                                    width={40}
                                                    alt=""
                                                    className="h-4 w-auto "
                                                />
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                href={"#"}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg border-opacity-20 border  border-white/60"
                                            >
                                                <Image
                                                    src={
                                                        "./images/x-twitter-contact.svg"
                                                    }
                                                    height={60}
                                                    width={40}
                                                    alt=""
                                                    className="h-4 w-auto text-white"
                                                />
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full items-center rounded-b-2xl lg:rounded-e-2xl shadow-[0px_4px_40px_rgba(0,0,0,0.12)] lg:shadow-[20px_35px_70px_rgba(0,0,0,0.04)] px-4 py-6 lg:p-10">
                            <div className="flex-grow">
                                <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1">
                                    <div className="">
                                        <Input
                                            preIcon="user"
                                            name={"your-full-name*"}
                                            type={"text"}
                                            placeholder={"Your full name*"}
                                            className="!py-3 lg:!py-5"
                                        />
                                    </div>
                                    <div className="">
                                        <Input
                                            preIcon="envelope"
                                            name={"your-email-address*"}
                                            type={"text"}
                                            placeholder={"Your email address*"}
                                            className="!py-3 lg:!py-5"
                                        />
                                    </div>

                                    <div className="">
                                        <Input
                                            preIcon="phone-o"
                                            name={"contact-number*"}
                                            type={"text"}
                                            placeholder={"Contact number*"}
                                            className="!py-3 lg:!py-5"
                                        />
                                    </div>
                                    <div className=" relative">
                                        <Icon
                                            icon={"chat"}
                                            className="w-6 absolute top-7 transform -translate-y-1/2 left-5 z-[11]"
                                        />
                                        <textarea
                                            className="border relative block w-full appearance-none rounded-[12px] border-border pl-16 pr-4 py-4 text-textSecondary focus:z-10 focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed dark:disabled:bg-disable-dark  dark:border-darkBorder dark:text-text-dark"
                                            placeholder="Comments*"
                                        ></textarea>
                                    </div>
                                </div>
                                <button className="mt-5 px-8 py-4 bg-fgc text-white rounded-2xl text-base">
                                    Send
                                </button>
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
                            href={"/check-your-symptoms"}
                            className="w-full lg:w-auto whitespace-nowrap px-3 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold"
                        >
                            Check your symptoms
                        </Link>
                        <Link
                            href={"/book-appointment"}
                            className="w-full lg:w-auto whitespace-nowrap px-3 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
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
