import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Home() {
    return (
        <main className="relative bg-white">
            <Header />
            <div className="bg-gradient-primary px-6 lg:px-18">
                {/* Start Header */}

                {/* Start Hero */}
                <div className="container m-auto">
                    <div className="w-full py-9 lg:py-18 justify-between items-center grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 bg-[url('/images/hero-bg.svg')] bg-no-repeat bg-left-bottom lg:bg-center">
                        <div className="grow shrink flex-col justify-between items-start gap-10 flex max-w-2xl m-auto lg:m-0">
                            <div className="grid gap-6">
                                <div className="text-32 lg:text-6xl font-extrabold !leading-[120%]">
                                    Creating the future of medicine.
                                </div>
                                <div className="text-textSecondary text-sm">
                                    We connect patients from the Middle East
                                    with the best specialized doctors worldwide.
                                </div>
                            </div>
                            <div className="w-full lg:w-auto gap-4 flex flex-col lg:flex-row">
                                <Link
                                    href={"./check-your-symptoms"}
                                    className="flex items-center justify-center w-full lg:w-auto px-4 py-3.5 lg:px-8 lg:py-4 bg-fgc rounded-2xl text-white text-base font-semibold"
                                >
                                    Check your symptoms
                                </Link>
                                <Link
                                    href={"/email"}
                                    className="flex items-center justify-center w-full lg:w-auto px-4 py-3.5 lg:px-8 lg:py-4 rounded-2xl border border-slate-700 text-base font-semibold"
                                >
                                    Get appointment
                                </Link>
                            </div>
                        </div>
                        <div className="my-5 lg:my-0 flex justify-center max-w-xl m-auto lg:m-0">
                            <div className="w-[80%] lg:w-[526px] rounded-full border-2 border-slate-700 border-opacity-10 p-8 lg:p-[60px] relative">
                                <Image
                                    src={"./word.svg"}
                                    height={60}
                                    width={40}
                                    alt=""
                                    className="h-full w-full"
                                />
                                <div className="flex absolute bg-bgc p-4 rounded-full transform translate-x-[-50%] left-1/2 -top-11 shadow-2xl">
                                    <Image
                                        src={"./images/user-computer.svg"}
                                        height={60}
                                        width={40}
                                        alt=""
                                        className="h-7 lg:h-11 w-auto"
                                    />
                                </div>
                                <div className="flex absolute bg-bgc p-4 rounded-full transform translate-x-[-50%] left-1/2 -bottom-9 shadow-2xl">
                                    <Image
                                        src={"./images/mobile-message.svg"}
                                        height={60}
                                        width={40}
                                        alt=""
                                        className="h-7 lg:h-11 w-auto"
                                    />
                                </div>
                                <div className="flex absolute transform translate-y-[33%] -left-5 lg:-left-10 bottom-1/2">
                                    <Image
                                        src={"./images/round-arrow.svg"}
                                        height={60}
                                        width={40}
                                        alt=""
                                        className="h-28 lg:h-[184px] w-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Count section */}
            <div className="count-section w-full px-20 lg:px-18 py-4 bg-fgc relative overflow-hidden m-auto">
                <div className="container m-auto justify-center items-start gap-6 lg:gap-24 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-auto flex-col justify-start items-center gap-4 lg:gap-6 inline-flex">
                        <div className="text-center text-white text-2xl lg:text-5xl font-semibold ">
                            15+
                        </div>
                        <div className="lg:w-72 opacity-75 text-center text-white text-xs lg:text-base">
                            Medical specialties
                        </div>
                    </div>
                    <div className="w-full lg:w-auto flex-col justify-start items-center gap-4 lg:gap-6 inline-flex">
                        <div className="text-center text-white text-2xl lg:text-5xl font-semibold ">
                            06
                        </div>
                        <div className="lg:w-72 opacity-75 text-center text-white text-xs lg:text-base">
                            Available across the MENA region in six countries:
                            Bahrain, UAE, Qatar, KSA, Oman and Kuwait.
                        </div>
                    </div>
                    <div className="w-full lg:w-auto flex-col justify-start items-center gap-4 lg:gap-6 inline-flex">
                        <div className="text-center text-white text-2xl lg:text-5xl font-semibold ">
                            5 x
                        </div>
                        <div className="lg:w-72 opacity-75 text-center text-white text-xs lg:text-base">
                            Faster and more efficient diagnosis for the patients
                        </div>
                    </div>
                    {/* <Image src={"./images/count-right.svg"} height={60} width={40} alt='' className="h-auto w-[415px] absolute top-[10%] right-[0%]" /> */}
                </div>
            </div>

            {/* Start How adiba work */}
            <div className="px-6 lg:px-18 py-6 lg:py-4">
                <div className="container m-auto grid gap-8">
                    <div className="text-2xl lg:text-32 font-bold text-center">
                        How adiba works
                    </div>
                    <div className="justify-start items-start gap-16 flex flex-col lg:flex-row font-medium">
                        <div className="w-full grow basis-0 flex-row lg:flex-col items-center gap-10 flex">
                            <div className="relative arrow-right w-12 lg:w-24 min-w-[48px] h-12 lg:h-24 flex items-center justify-center bg-fgc bg-opacity-20 rounded-xl lg:rounded-2xl border border-slate-700">
                                <Image
                                    src={"./images/calendar.svg"}
                                    height={48}
                                    width={48}
                                    alt=""
                                    className="h-6 w-6 lg:h-12 lg:w-12"
                                />
                            </div>
                            <div className="text-left lg:text-center text-lg lg:text-2xl">
                                Book easily online an appointment with a doctor
                            </div>
                        </div>
                        <div className="w-full grow basis-0 flex-row lg:flex-col items-center gap-10 flex">
                            <div className="relative arrow-right w-12 lg:w-24 min-w-[48px] h-12 lg:h-24 flex items-center justify-center bg-fgc bg-opacity-20 rounded-xl lg:rounded-2xl border border-slate-700">
                                <Image
                                    src={"./images/drop.svg"}
                                    height={48}
                                    width={48}
                                    alt=""
                                    className="h-6 w-6 lg:h-12 lg:w-12"
                                />
                            </div>
                            <div className="text-left lg:text-center text-lg lg:text-2xl">
                                Or first check your symptoms with our AI
                            </div>
                        </div>
                        <div className="w-full grow basis-0 flex-row lg:flex-col items-center gap-10 flex">
                            <div className="relative arrow-right w-12 lg:w-24 min-w-[48px] h-12 lg:h-24 flex items-center justify-center bg-fgc bg-opacity-20 rounded-xl lg:rounded-2xl border border-slate-700">
                                <Image
                                    src={"./images/lock.svg"}
                                    height={48}
                                    width={48}
                                    alt=""
                                    className="h-6 w-6 lg:h-12 lg:w-12"
                                />
                            </div>
                            <div className="text-left lg:text-center text-lg lg:text-2xl">
                                Leave your contact data and set up an
                                appointment
                            </div>
                        </div>
                        <div className="w-full grow basis-0 flex-row lg:flex-col items-center gap-10 flex">
                            <div className="w-12 lg:w-24 min-w-[48px] h-12 lg:h-24 flex items-center justify-center bg-fgc bg-opacity-20 rounded-xl lg:rounded-2xl border border-slate-700">
                                <Image
                                    src={"./images/video.svg"}
                                    height={48}
                                    width={48}
                                    alt=""
                                    className="h-6 w-6 lg:h-12 lg:w-12"
                                />
                            </div>
                            <div className="text-left lg:text-center text-lg lg:text-2xl">
                                Have your online video consultation to solve
                                your complaints
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Your benefits with adiba */}
            <div className="p-6 lg:p-18 bg-gradient-primary">
                <div className="container m-auto flex-col justify-start items-center gap-9 lg:gap-18 flex">
                    <div className=" text-2xl lg:text-32 font-bold ">
                        Your benefits with adiba
                    </div>
                    <div
                        className="px-6 lg:px-18 py-12
                     bg-white rounded-3xl flex-col justify-start items-start flex gap-12"
                    >
                        <div className="justify-start items-center gap-24 flex flex-col lg:flex-row">
                            <div className="w-full lg:w-3/5 grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                                <div className="self-stretch text-2xl lg:text-32 font-semibold">
                                    Intelligent symptom assessments
                                </div>

                                <div className="self-stretch text-textSecondary lg:text-lg ">
                                    AI 24/7 free physicians. Interact with our
                                    AI technology at any time and clarify the
                                    most important questions and concerns about
                                    your health immediately without any waiting
                                    time.
                                </div>
                                <Image
                                    src={"/images/intelligent-symptom.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full block lg:hidden"
                                />
                            </div>
                            <div className="w-full lg:w-2/5 hidden lg:block">
                                <Image
                                    src={"/images/intelligent-symptom.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                        <div className="justify-start items-center gap-24 flex flex-col lg:flex-row">
                            <div className="w-full lg:w-2/5 hidden lg:block">
                                <Image
                                    src={"/images/video-call-doctor.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full"
                                />
                            </div>
                            <div className="w-full lg:w-3/5 grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                                <div className="self-stretch text-2xl lg:text-32 font-semibold">
                                    Video call a doctor anytime, anywhere
                                </div>

                                <div className="self-stretch text-textSecondary lg:text-lg ">
                                    Humans matter on the human element of care.
                                    We connect you and your family members with
                                    the best medical specialists around the
                                    globe to identify the optimal treatment for
                                    your diseases.
                                </div>
                                <Image
                                    src={"/images/video-call-doctor.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full block lg:hidden"
                                />
                            </div>
                        </div>
                        <div className="justify-start items-center gap-24 flex flex-col lg:flex-row">
                            <div className="w-full lg:w-3/5 grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                                <div className="self-stretch text-2xl lg:text-32 font-semibold ">
                                    Prevention is key
                                </div>

                                <div className="self-stretch text-textSecondary lg:text-lg ">
                                    More predictions. More efficiency. More
                                    evidence-based medicine. Data driven
                                    personalized care will detect diseases in
                                    advance and act preventively.
                                </div>
                                <Image
                                    src={"/images/prevention-is-key.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full block lg:hidden"
                                />
                            </div>
                            <div className="w-full lg:w-2/5 hidden lg:block">
                                <Image
                                    src={"/images/prevention-is-key.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-6 inline-flex">
                        <Link
                            href={"./try-adiba-now"}
                            className="px-4 py-[15px] lg:px-8 lg:py-4 bg-fgc rounded-2xl justify-center items-center gap-2.5 flex text-right text-white text-base font-semibold"
                        >
                            Try adiba now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Start Join our adiba care team */}
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
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch text-2xl lg:text-32 font-semibold ">
                                Join our adiba care team
                            </div>
                            <div className="self-stretch text-textSecondary text-lg  ">
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
                                className="m-auto px-4 py-[15px] lg:px-8 lg:py-4 bg-fgc rounded-2xl justify-center items-center gap-2.5 inline-flex text-right text-white text-base font-semibold"
                            >
                                For Doctors
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Start with adiba now! */}
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
                        <span className="text-white text-lg lg:text-32 font-bold">
                            Start with adiba now!
                        </span>
                    </div>
                    <div className=" flex gap-5">
                        <Link
                            href={"./check-your-symptoms"}
                            className="w-full lg:w-auto whitespace-nowrap px-4 py-3.5 lg:px-8 lg:py-3 text-sm lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold"
                        >
                            Check your symptoms
                        </Link>
                        <Link
                            href={"/email"}
                            className="w-full lg:w-auto whitespace-nowrap px-4 py-3.5 lg:px-8 lg:py-3 text-sm lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
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

            {/* Start Footer */}
            <Footer />
        </main>
    );
}
