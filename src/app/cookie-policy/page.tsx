/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SecondaryHero from "@/components/common/SecondaryHero";
import HeadingTitle from "@/components/common/HeadingTitle";
import HeadingSubTitle from "@/components/common/HeadingSubTitle";

export default function CookiePolicy() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="Cookie Policy"
                sitemap="Home > Cookie Policy"
                image="/images/doctor-1.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-10.5">
                    <div>
                        <span className="text-textSecondary">
                            Knowledge Doctors WLL keeps its Cookie Policy under
                            regular review and places any updates on this web page.
                            This Cookie Policy was last reviewed / updated on 14th
                            November 2023.
                        </span>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingTitle>
                            Our Contact Details
                        </HeadingTitle>
                        <p className="text-textSecondary mb-6">
                            Knowledge Doctors WLL P.O. Box 12000 Manama, Kingdom of
                            Bahrain
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <HeadingTitle>
                            Introduction
                        </HeadingTitle>
                        <ul className="text-textSecondary">
                            <li>
                                Knowledge Doctors{"´"} websites and online services may
                                use “cookies.”
                            </li>
                            <li className="mt-4">
                                Cookies enable you to use the services we provide
                                and to personalize your experience on our sites,
                                tell us which parts of our websites people have
                                visited, help us measure the effectiveness of ads
                                and web searches, and give us insights into user
                                behavior so we can improve our communications and
                                products we deliver.
                            </li>
                            <li className="mt-4">
                                Cookies are used throughout our websites, disabling
                                them may prevent you from using certain parts of the
                                sites.
                            </li>
                            <li className="mt-4">
                                The Platform may include links to other third-party
                                websites, plug-ins, and applications which may
                                include those of Healthcare Providers. Links to
                                Other Sites are not owned or controlled by Knowledge
                                Doctors WLL.
                            </li>
                            <li className="mt-4">
                                We are not responsible for the Privacy, Cookie or
                                Security practices of such other third-party sites.
                                When you leave our Platform, we strongly encourage
                                you to read the Policies of each and every web site
                                that collects personally identifiable data, and to
                                know your privacy rights before interacting with
                                such sites.
                            </li>
                        </ul>
                        <div>
                            <HeadingSubTitle>
                                You are in control of your data
                            </HeadingSubTitle>
                            <p className="text-textSecondary mt-4">
                                You can control how Knowledge Doctors WLL website(s) use
                                cookies and similar technologies by making choices
                                below. But note that if you disable cookies and similar
                                technologies entirely, Knowledge Doctors website(s) may
                                not function properly.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingTitle>
                            What are cookies and why does Knowledge Doctors use them
                        </HeadingTitle>
                        <p className="text-textSecondary">
                            Cookies are small text files stored by your web browser
                            when you use websites. There are also other technologies
                            that can be used for similar purposes like HTML5 local
                            storage and local shared objects, web beacons, and
                            embedded scripts. These technologies help us do things
                            like remembering you and your preferences when you
                            return to our sites, measure how you use the website,
                            conduct market research, and gather information about
                            the ads you see and interact with.
                        </p>
                        <div>
                            <HeadingSubTitle>
                                How do I make choices
                            </HeadingSubTitle>
                            <p className="text-textSecondary mt-4">
                                You can make choices about what cookies and other
                                technologies you want us to use on Knowledge Doctors
                                sites, as explained, in understanding section 3 and
                                section 4 of this policy.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingTitle>
                            Categories of cookies
                        </HeadingTitle>
                        <div>
                            <HeadingSubTitle>
                                Strictly Necessary Cookies
                            </HeadingSubTitle>
                            <p className="text-textSecondary mt-4">
                                These cookies are essential in order to enable you to
                                move around the website and use its features, such as
                                accessing secure areas of the website. Without these
                                cookies, certain features such as booking an appointment
                                or accessing your account cannot function as intended.
                                These cookies are required, and they are used to enable
                                the site and related services core functionality.
                                Without them the site could not operate, so they cannot
                                be disabled.
                            </p>
                        </div>
                        <div>
                            <HeadingSubTitle>
                                Performance Cookies
                            </HeadingSubTitle>
                            <p className="text-textSecondary mt-4">
                                These cookies collect information about how visitors use
                                a website, for instance which pages visitors go to most
                                often, and if they get error messages from web pages.
                                These cookies don’t collect information that identifies
                                a visitor. All information these cookies collect is
                                aggregated and therefore anonymous. It is only used to
                                improve how a website works. These cookies are used to
                                analyze site usage to measure and improve performance.
                                Without them Knowledge Doctors cannot know what content
                                is most valued and how often unique visitors return to
                                the site, making it hard to improve the service that we
                                offer to you.
                            </p>
                        </div>
                        <div>
                            <HeadingSubTitle>
                                Extend Functionality Cookies
                            </HeadingSubTitle>
                            <span className="text-fgc text-2xl font-semibold ">
                            </span>
                            <p className="text-textSecondary mt-4">
                                These cookies allow the website to remember choices you
                                make (such as your username, language or the region you
                                are in) and provide enhanced, more personal features.
                                They may also be used to provide services you have asked
                                for. The information these cookies collect may be
                                anonymised and they cannot track your browsing activity
                                on other websites. These cookies are used to enhance the
                                functionality of Knowledge Doctors sites such as
                                remembering your settings and preferences to deliver a
                                personalized experience; for example, your username,
                                your repeated visits, preferred language, your country,
                                or any other saved preference.
                            </p>
                        </div>
                        <div>
                            <HeadingSubTitle>
                                Personalised Advertising Cookies
                            </HeadingSubTitle>
                            <p className="text-textSecondary mt-4">
                                These cookies are used to deliver adverts more relevant
                                to you and your interests. They are also used to limit
                                the number of times you see an advertisement as well as
                                help measure the effectiveness of the advertising
                                campaigns. They are usually placed by advertising
                                networks with the website operator’s permission. They
                                remember that you have visited a website and this
                                information is shared with other organisations such as
                                advertisers. These cookies are used to enable Knowledge
                                Doctors to serve ads more relevant to your interests on
                                this and other sites. Without them you will still see
                                ads, but they might not be as relevant to you.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingTitle>
                            How do I change my cookie settings
                        </HeadingTitle>
                        <p className="text-textSecondary">
                            Most web browsers allow some control of most cookies
                            through the browser settings.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Google Chrome
                        </HeadingSubTitle>
                        <ul className="text-textSecondary">
                            <li>
                                Click on the "Tools" menu and select "Options".
                                Click the "Under the Bonnet" tab and locate the
                                "Privacy" section and choose the "Content settings"
                                button.
                            </li>
                            <li className="mt-4">
                                Click the "Cookie settings" tab and choose your
                                preferred settings. Google Chrome allows all cookies
                                by default, but you can restrict the behaviour of
                                first-party and third-party cookies or even block
                                them completely. Click on the Close button when you
                                have finished.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Internet Explorer
                        </HeadingSubTitle>
                        <div>
                            <ul className="text-textSecondary">
                                <li>
                                    Choose Preferences from Explorer menu Select
                                    Receiving Files options Select Cookies Choose your
                                    preferred settings
                                </li>
                                <li className="mt-4">
                                    For other browsers, please check with your provider
                                    to find out how to disable cookies. To find out more
                                    about Cookies, and how to control Cookies please
                                    visit
                                </li>
                            </ul>
                            <span className="text-sm lg:text-lg mt-3 block font-semibold underline">
                                www.aboutcookies.org
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingTitle>
                            Any Questions
                        </HeadingTitle>
                        <div>
                            <ul className="text-textSecondary">
                                <li>
                                    If you have any questions about this Policy, please
                                    contact the Data Protection Officer at
                                </li>
                            </ul>
                            <span className="text-sm lg:text-lg mt-4 block font-semibold underline">hello@adiba.ai</span>
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
                            className="w-full lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold"
                        >
                            Check your symptoms
                        </Link>
                        <Link
                            href={"/book-appointment"}
                            className="w-full lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center"
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
