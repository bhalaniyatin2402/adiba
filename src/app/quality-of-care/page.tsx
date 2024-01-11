import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SecondaryHero from "@/components/common/SecondaryHero";
import HeadingTitle from "@/components/common/HeadingTitle";
import HeadingSubTitle from "@/components/common/HeadingSubTitle";

export default function Qualityofcare() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="Quality of care"
                sitemap="Home > Quality of care"
                image="/images/doctor-1.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-5">
                    <HeadingTitle className="!font-bold">
                        Your health and well-being is extremely important to us.
                    </HeadingTitle>
                    <ul className="text-textSecondary">
                        <li>
                            We are constantly putting a great deal of thought,
                            effort, tools, resources and procedures in place in
                            order to provide the best possible healthcare to you
                            and your family members.
                        </li>
                        <li className="mt-2">
                            We guarantee that all of our listed doctors are
                            experienced and verified specialists in their field.
                        </li>
                        <li className="mt-2">
                            We select our doctors according to strict guidelines
                            to ensure the best possible care.
                        </li>
                        <li className="mt-2">
                            Our doctors are supported and monitored by rigorous
                            internal Quality Assurance and Quality Improvement
                            standards.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full px-6 lg:px-18 py-8 bg-fgc overflow-hidden relative">
                <div className="container m-auto flex-grow justify-start gap-6 flex items-center flex-col lg:flex-row">
                    <div className=" bottom-[-43%] -left-56 lg:top-16 lg:-left-56 opacity-20 w-80 h-80 absolute">
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
                    <div className="flex flex-col ">
                        <HeadingSubTitle className="text-white !font-bold lg:text-32">
                            If you have any questions about our services and
                            conditions
                        </HeadingSubTitle>
                        <span className="text-white mt-4 text-xs lg:text-xl ">
                            Please contact us by emailing hello@adiba.ai
                        </span>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <Link
                            href={"/book-appointment"}
                            className="w-full lg:w-auto px-8 py-3 bg-white rounded-2xl justify-center gap-2.5    font-semibold"
                        >
                            Get appointment
                        </Link>
                        <Link
                            href={"#"}
                            className="w-full lg:w-auto px-8 py-3 rounded-2xl border border-white justify-center  gap-2.5   text-white  font-semibold text-center"
                        >
                            Contact us
                        </Link>
                    </div>

                    <div className="origin-top-left top-[-43%] -right-56 lg:top-auto lg:bottom-16 lg:-right-56 opacity-20 w-80 h-80 absolute">
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
