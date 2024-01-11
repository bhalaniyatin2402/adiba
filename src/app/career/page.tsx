"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SecondaryHero from "@/components/common/SecondaryHero";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import HeadingTitle from "@/components/common/HeadingTitle";

export default function Career() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero title="Careers" sitemap="Home > Careers" image="/images/doctor-1.png" />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-6">
                    <div className="flex flex-col lg:flex-row-reverse lg:grid-cols-2 gap-6 lg:gap-20 items-center w-full">
                        <div className="lg:w-1/2">
                            <div className="grid gap-6">
                                <div className="text-2xl lg:text-32 font-semibold leading-[150%]">Build the future of healthcare with us!</div>
                                <div className="grid gap-4 text-textSecondary">
                                    <div>AI in medicine, online patient journeys, telemedicine - they are transforming healthcare in Middle East and across the globe.
                                    </div>
                                    <div>
                                        Be part of that change, drive it and help us solve health issues that no one talks about.
                                    </div>
                                    <div>
                                        Feel free to reach out and join us:
                                    </div>
                                    <div className="text-sm lg:text-lg font-medium text-text">hello@adiba.ai</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={"/images/build_future.png"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt=""
                                className="h-auto w-full relative z-[1]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 pt-6 lg:p-18 lg:pb-0">
                <div className="container m-auto justify-start items-center gap-10 lg:gap-32 flex flex-col-reverse lg:flex-row">
                    <div className="relative px-0 lg:px-10">
                        <Image
                            src={"/images/join-our-adiba-care-team.png"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            className="h-auto min-h-[400px] lg:min-h-[554px] w-auto relative z-[1] -mb-0.5"
                        />
                        {/* <div className="absolute h-[calc(100%-63px)] w-full left-0 top-[63px]  bg-fgc rounded-tl-full rounded-tr-full"></div> */}
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch text-center lg:text-left text-2xl lg:text-32 font-semibold ">
                                Join our adiba care team
                            </div>
                            <div className="self-stretch text-textSecondary text-center lg:text-left ">
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
                                className="m-auto px-4 py-3 lg:px-8 lg:py-4 bg-fgc rounded-2xl justify-center items-center gap-2.5 inline-flex text-right text-white text-sm lg:text-base font-semibold leading-[150%]"
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
                    <div className="flex flex-col">
                        <span className="text-white lg:text-32 font-bold text-lg">
                            Start with adiba now!
                        </span>
                    </div>
                    <div className=" flex gap-5">
                        <Link
                            href={"/check-your-symptoms"}
                            className="w-full lg:w-auto whitespace-nowrap px-3 py-3.5 lg:px-8 lg:py-3 text-xs lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold"
                        >
                            Check your symptoms
                        </Link>
                        <Link
                            href={"/book-appointment"}
                            className="w-full lg:w-auto whitespace-nowrap px-3 py-3.5 lg:px-8 lg:py-3 text-xs lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
                        >
                            Get appointment
                        </Link>
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
