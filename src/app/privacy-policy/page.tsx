"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import SecondaryHero from "@/components/common/SecondaryHero";
import { useState } from "react";
import HeadingTitle from "@/components/common/HeadingTitle";
import HeadingSubTitle from "@/components/common/HeadingSubTitle";

export default function PrivacyPolicy() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="Privacy Policy"
                sitemap="Home > Privacy Policy"
                image="/images/doctor-1.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-10.5">
                    <div className="grid gap-6">
                        <HeadingSubTitle>
                            About your privacy and this privacy policy
                        </HeadingSubTitle>
                        <div className="grid gap-4">
                            <p className="text-textSecondary">
                                Your privacy is extremely important to us. We
                                are constantly putting a great deal of thought,
                                effort, tools, resources and procedures in place
                                in order to protect and safeguard your privacy.
                                This document is our “Privacy Policy” and it
                                contains details on issues related to your
                                privacy when using our services. It is intended
                                to inform you of our policies, procedures and
                                practices regarding the collection, use and
                                disclosure of any information that you provide
                                through the Platform.
                            </p>
                            <p className="text-textSecondary">
                                The Privacy Policy is part of our Terms and
                                Conditions which can be found in our website.
                                The terms in the Privacy Policy (such as, but
                                not limited to, “we”, “our”, “us”, “Platform”,
                                “Counsellor”, “Counsellor Services” etc) have
                                the same meaning as in our Terms and Conditions
                                document. When you use our Platform, you accept
                                and agree to both the Terms and Conditions and
                                to the Privacy Policy. If you do not agree to be
                                bound to the Privacy Policy, you should stop
                                using the Platform immediately. By accessing and
                                using our Platform you affirm that you have read
                                the Terms and Conditions and the Privacy Policy
                                and that you understand, agree and acknowledge
                                to all the terms contained in both of them.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Information Collection, Use, and Disclosure
                        </HeadingSubTitle>
                        <div className="grid gap-4">
                            <p className="text-textSecondary">
                                To let us operate the Platform effectively and
                                to let you use the Platform, including the
                                Counselor Services, we may have to collect your
                                personally identifiable information (such as,
                                but not limited to, your name, phone number,
                                email address, and address), billing and payment
                                information, profile information, log data
                                (information such as your computer, Internet
                                Protocol address (“IP”), pages that you visit
                                and the amount of time spent on those pages,
                                actions you take and other statistics),
                                information related to the Counselor Services or
                                your need for Counselor Services, and any
                                information which is exchanged between you and
                                your Counselor (collectively the “Information”).
                                In some cases, some of the Information that you
                                give to us is considered health related data.
                                You may decide which Information, if any, you
                                would like to share with us, but some functions
                                of the Platform may not be available to you
                                without providing us the necessary Information.
                                By deciding to provide the Information you agree
                                to our methods of collections and use, as well
                                to other terms and provisions of this Privacy
                                Policy.
                            </p>
                            <p className="text-textSecondary mt-4">
                                Protecting this Information is a top priority
                                for us. We will never sell or rent any
                                information you shared in the Platform. Other
                                than in the limited ways detailed in this
                                Privacy Policy, we will never use or disclose
                                any Information unless you specifically and
                                explicitly requested or approved us to do so.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            The Information may be used for the following
                            purposes
                        </HeadingSubTitle>
                        <ul className="">
                            <li className="flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>{" "}
                                To create your account on our Platform and let
                                you log in to your account and use the Platform.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                manage your account, provide you with customer
                                support, and ensure you are receiving quality
                                service.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To contact you or provide you with information,
                                alerts and suggestions that are related to the
                                service.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                For billing-related purposes.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To reach out to you, either ourselves or using
                                the appropriate authorities, if either we or a
                                Counselor have a good reason to believe that you
                                or any other person may be in danger or may be
                                either the cause or the victim of a criminal
                                act.{" "}
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="inline-block w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To match you with a Counselor.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To enable and facilitate the Counselor Services.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To supervise, administer and monitor the
                                service.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To measure and improve the quality, the
                                effectiveness and the delivery of our services.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                Market the Platform and Counselor Services to
                                you.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To respond to law enforcement requests and as
                                required by applicable law, court order, or
                                governmental regulations.{" "}
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To comply with applicable state and federal
                                laws, including, but not limited to laws related
                                to protecting client and public health and
                                safety.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To provide, support, personalize, and develop
                                our Platform and Counselor Services.
                            </li>
                            <li className="mt-4 flex gap-2 items-start">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary ">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                To personalize your website experience and to
                                deliver content and product and service
                                offerings relevant to your interests, including
                                targeted offers and ads through our Websites,
                                third-party sites, and via email or text message
                                (with your consent, where required by law).
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Opting out of marketing communication
                        </HeadingSubTitle>
                        <p className="text-textSecondary">
                            You can opt out of receiving email marketing by
                            unsubscribing using the unsubscribe link provided in
                            all of our marketing email communications.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Cookies and Web Beacons</HeadingSubTitle>
                        <p className="text-textSecondary">
                            You can opt out of receiving email marketing by
                            unsubscribing using the unsubscribe link provided in
                            all of our marketing email communications.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Social and General Information Tools
                        </HeadingSubTitle>
                        <p className="text-textSecondary">
                            We use several publicly available tools and
                            information exchange resources, such as (but not
                            limited to) a blog, a Facebook page, a Twitter
                            account, and others (collectively “Social and
                            General Information Tools”). Any information you
                            provide or share while using Social and General
                            Information Tools may be read, accessed, collected
                            by that site and users of that site according to
                            their Privacy Policy.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Phishing</HeadingSubTitle>
                        <p className="text-textSecondary">
                            Online identity theft and account hacking, including
                            the practice currently known as “phishing”, are of
                            great concern. You should always be diligent when
                            you are being asked for your account information and
                            you must always make sure you do that in our secure
                            system. We will never request your login information
                            or your credit card information in any non-secure or
                            unsolicited communication (email, phone or
                            otherwise).
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Links</HeadingSubTitle>

                        <p className="text-textSecondary">
                            The Platform may contain links to other websites,
                            services or offers which are owned, operated or
                            maintained by third parties. If you click on a
                            third-party link, you will be directed to that third
                            website or service. The fact that we link to a
                            website or service is not an endorsement,
                            authorization or representation of our affiliation
                            with that third party, nor is it an endorsement of
                            their privacy or information security policies or
                            practices. We do not have control over third party
                            websites and services, and we do not have control
                            over their privacy policies and terms of use.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Security</HeadingSubTitle>
                        <p className="text-textSecondary">
                            While using any Internet-based service carries
                            inherent security risks that cannot be 100%
                            prevented, our systems, infrastructure, encryption
                            technology, operation and processes are all
                            designed, built and maintained with your security
                            and privacy in mind. We apply industry standards and
                            best practices to prevent any unauthorized access,
                            use, and disclosure. We comply with or exceed all
                            applicable federal laws, state laws, and regulations
                            regarding data privacy.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Service Providers</HeadingSubTitle>
                        <p className="text-textSecondary">
                            We may employ third party companies and individuals
                            to facilitate our Platform, to perform certain tasks
                            which are related to the Platform, or to provide
                            audit, legal, operational or other services for us.
                            These tasks include, but not limited to, customer
                            service, technical maintenance, monitoring, email
                            management and communication, database management,
                            billing and payment processing, reporting and
                            analytics. We will share with them only the minimum
                            necessary information to perform their task for us
                            and only after entering into appropriate
                            confidentiality agreements.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle> Children’s Privacy</HeadingSubTitle>
                        <p className="text-textSecondary">
                            We do not knowingly collect or solicit any
                            information from anyone under the age of 13 or
                            knowingly allow such persons to become our user. The
                            Platform is not directed and not intended to be used
                            by children under the age of 13. If you’re aware
                            that we have collected Personal Information from a
                            child under age 13 please let us know by contacting
                            us and we will delete that information.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle> International Transfer</HeadingSubTitle>

                        <p className="text-textSecondary">
                            Your information may be transferred to — and
                            maintained on — computers located outside of your
                            state, province, country or other governmental
                            jurisdiction. Regardless of where your data is
                            stored, it will be maintained securely as outlined
                            in this policy. Your consent to our Terms and
                            Conditions followed by your submission of such
                            information represents your agreement to such
                            transfers.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Compliance with Laws and Law Enforcement
                        </HeadingSubTitle>

                        <p className="text-textSecondary">
                            We cooperate with government and law enforcement
                            officials to enforce and comply with the law. We may
                            disclose information necessary or appropriate to
                            protect the safety of the public or any person, to
                            respond to claims and legal process (including but
                            not limited to subpoenas), and to prevent or stop
                            activity that may be illegal or dangerous. You
                            should also be aware that Counsellors may be obliged
                            to disclose information to law enforcement or other
                            authorities to conform to their professional and
                            legal responsibilities. Specifically, and without
                            limitation, you should be aware that the law
                            requires mental health professionals to disclose
                            information and/or take action in the following
                            cases: (a) reported or suspected abuse of a child or
                            vulnerable adult; (b) serious suicidal potential;
                            (c) threatened harm to another person; (d)
                            court-ordered presentation of treatment.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            General Data Protection Regulation (GDPR) Notice
                        </HeadingSubTitle>

                        <ul className="text-textSecondary">
                            <li>
                                This section provides additional information
                                about our Privacy Policy relevant to users from
                                the European Union. It is necessary for us to
                                use your personal information:
                            </li>
                            <li className="mt-4">
                                To perform our obligations in accordance with
                                any contract that we may have with you.
                            </li>
                            <li className="mt-4">
                                It is in our legitimate interest or a third
                                party’s legitimate interest to use personal
                                information in such a way to ensure that we
                                provide the Services in the best way that we
                                can.
                            </li>
                            <li className="mt-4">
                                It is our legal obligation to use your personal
                                information to comply with any legal obligations
                                imposed upon us.
                            </li>
                            <li className="mt-4">
                                You can view and edit any personal data that you
                                have provided to us using this website.
                                Automated processing of your Personal
                                Information is necessary to operate the Platform
                                effectively and to provide counselling and
                                related services. Knowledge Doctors WLL Services
                                is the Controller with respect to your Personal
                                Data. You can contact our Data Protection
                                Officer with questions, concerns or objections
                                about this policy, or about your data by writing
                                to:
                            </li>
                        </ul>
                        <HeadingSubTitle>
                            General Data Protection Regulation (GDPR) Notice
                        </HeadingSubTitle>
                        <span className=" underline font-semibold">
                            hello@adiba.ai
                        </span>
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
