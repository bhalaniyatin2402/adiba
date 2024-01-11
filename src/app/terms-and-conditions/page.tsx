/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import SecondaryHero from "@/components/common/SecondaryHero";
import { useState } from "react";
import HeadingSubTitle from "@/components/common/HeadingSubTitle";
import HeadingTitle from "@/components/common/HeadingTitle";

export default function TermsAndConditions() {
    return (
        <main className="relative bg-white">
            <div className="">
                <Header />
            </div>

            <SecondaryHero
                title="Terms & Conditions"
                sitemap="Home > Terms & Conditions"
                image="/images/doctor-1.png"
            />

            <div className="p-6 lg:p-18">
                <div className="container m-auto grid gap-10.5">
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            What you need to know about Knowledge Doctors WLL
                            services
                        </HeadingSubTitle>

                        <ul className="text-textSecondary">
                            <li>
                                Use of this website/app is subject to these
                                terms of service ('Terms') and all applicable
                                laws, either of which may be revised or varied
                                at any time without notice. By accessing or
                                using the Site, You accept and agree to be bound
                                by these Terms, as varied from time to time.
                                Therefore, you are required to review this terms
                                and conditions.
                            </li>
                            <li className="mt-4">
                                The service providers are special group of
                                doctors and experts who are licensed to practice
                                medicine.
                            </li>
                            <li className="mt-4">
                                All health information mentioned in the site/app
                                are not personalized medical advices and
                                patients should take medical advices directly
                                from their doctors. You acknowledge and agree
                                that we are a service platform not a medical or
                                healthcare providers, but the doctor is the
                                provider, and all your medical queries should be
                                directed to the Doctor providing the service.
                                The service provider is responsible for any
                                particular medical advice provided by him during
                                a consultation, however we warrant that all
                                healthcare providers are licensed, experienced
                                and highly qualified professionals.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>No emergency services</HeadingSubTitle>

                        <p className="text-textSecondary">
                            The services offered by the Site/app are not
                            suitable for serious medical conditions, medical
                            emergencies or matters requiring immediate or urgent
                            treatment ('Emergencies'). If You require treatment
                            for a serious medical condition or require immediate
                            or urgent medical assistance, You should contact
                            emergency services or attend the nearest hospital
                            emergency center.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Not a substitute for ongoing medical care
                        </HeadingSubTitle>
                        <p className="text-textSecondary">
                            The services offered by the website/app are not
                            intended to be a substitute for the ongoing
                            involvement of your usual GP or other medical
                            professional responsible for managing your
                            day-to-day health needs. Patients are encouraged to
                            schedule follow-up visits with their primary
                            physician and record their GP's details under 'My
                            Profile' to help facilitate proper holistic
                            management of their conditions.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingTitle>
                            Patient rights & responsibilities agreement
                        </HeadingTitle>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Accuracy of patient information and history
                        </HeadingSubTitle>

                        <p className="text-textSecondary">
                            Like ordinary GP services, the effectiveness of any
                            Doctor's service is dependent on complete and
                            truthful answers to all questions asked to assess
                            the appropriateness of treatments and medications
                            for Patients. The Patient (or guardian of a Patient,
                            if applicable) understands and agrees that they
                            must:
                        </p>
                        <ul className="grid gap-4">
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                Answer all questions asked.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                Be accurate and fulsome in their answers.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                Report any new (since last consultation with
                                their usual GP) symptoms or worsening of
                                condition.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Limitation of liability and indemnity
                        </HeadingSubTitle>

                        <ul className="text-textSecondary">
                            <li>
                                You acknowledge and agree that the doctor or the
                                health expert providing the service are
                                responsible for the health care of the Patient
                                or any medical, or healthcare advice (including
                                prescriptions which might be available in
                                future) and we as a company are not liable for
                                that.
                            </li>
                            <li className="mt-4">
                                We are not liable and you indemnify Us (and our
                                related bodies corporate and their respective
                                officers, employees and consultants) against any
                                and all claims, actions, proceedings, losses,
                                liabilities and expenses (including legal
                                expenses on a full indemnity basis) in any way
                                arising from or relating to:
                            </li>
                            <li className="mt-4">
                                Any treatment, advice or information provided
                                during a Consultation and any other services
                                provided by a Doctor to a Patient (including any
                                medications prescribed by a Doctor and the
                                quality or suitability of any services provided
                                by a Doctor), or any personal injury, mishap or
                                death or any alleged or actual malpractice or
                                negligence by any Doctor; which shall be covered
                                by the doctor’s insurance.
                            </li>
                            <li className="mt-4">
                                Your failure to answer any questions truthfully,
                                or to provide any information requested by Us or
                                a Doctor; and your use of the services offered
                                by the Site.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Regarding the use of the site
                        </HeadingSubTitle>

                        <p className="text-textSecondary">
                            The Site offers a convenient service for Patients
                            with straightforward, nonemergency medical needs.
                        </p>
                        <p className="text-textSecondary">
                            By accessing the Site or the app, You acknowledge
                            and agree that:
                        </p>
                        <ul className="grid gap-4">
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                You are at least 18 years of age and (one of)
                                the Patient or their legal guardian, parent or
                                health attorney.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                You will provide proof of identity with a
                                driver's license or other legal document if
                                requested to do so.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                The Patient is not suffering dangerous or
                                unusual symptoms (e.g. suddenly decreased or
                                blurred vision, severe headaches, inexplicable
                                pain or nausea, fainting spells, bleeding,
                                numbness or tingling/pins and needles in any
                                part of the body).
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                The need for the Consultation is unconnected
                                with an accident or injury, regardless of cause.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                The Patient does not suffer from multiple or
                                serious chronic conditions and does not
                                currently take multiple prescribed medications.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                The Patient does not require a prescription of
                                any 'schedule (narcotic) medicines.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                You have completed the 'Patient General Medical
                                Questions' completely and truthfully, and have
                                not omitted information which is or may be
                                relevant to the Patient’s care.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                We are not responsible for medical advice or the
                                manner in which a Consultation is conducted and
                                provided by the Doctor during the Consultation
                                or otherwise.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                If either You or the Patient are hard of
                                hearing, during the Consultation You/they will
                                have a hearing assistance device.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                You are responsible personally for the costs of
                                the Consultation in accordance with these Terms.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                If, during a Consultation, a Doctor considers
                                that the Patient needs further treatment or
                                examination, You will seek that as soon as
                                possible (and that neither We, nor the Doctor,
                                are responsible for following-up Patients).
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                Any medication or other treatment prescribed by
                                a Doctor will be solely for the Patient's own
                                personal use and You will not allow any other
                                person to take medication that has been
                                prescribed to a Patient.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                You will not share Your Site username and
                                password with anyone and will take all
                                reasonable steps to ensure that a third party
                                does not gain access to Your account.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                We reserve the right to cancel Your registration
                                on the Site without notice at Our sole
                                discretion.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                If a Doctor prescribes medication or a treatment
                                for a Patient, and the Patient suffers from any
                                noticeable side-effects, You will notify Us so
                                that the Doctor can fulfill their duty of
                                after-care.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Payments and refunds</HeadingSubTitle>

                        <ul className="text-textSecondary grid gap-4">
                            <li>
                                Payment options are displayed on the Site/App.
                            </li>
                            <li className="">
                                You agree to pay all fees or charges in
                                accordance with these Terms and the fees and
                                charges in effect at the time a fee or charge is
                                due and payable.
                            </li>
                            <li className="">
                                All fees and charges associated with a
                                Consultation are pre-authorized on the credit
                                card provided and You agree that We are
                                authorized to immediately process the payment
                                before Your Consultation.
                            </li>
                            <li className="">
                                You will never be charged more than the
                                pre-authorized amount. The Consultation fee will
                                be refunded if the Doctor cancels the
                                appointment twice, or if there is a
                                technological failure that prevents an effective
                                Consultation between Patient and Doctor.
                                Technological failure is assessed and logged by
                                the Doctor. The Consultation fee is generally
                                not refundable if You, as a Patient, cancel an
                                appointment within less than eight hours prior
                                to it’s starting or fail to attend at the
                                scheduled time.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Consultation and availability of Doctors
                        </HeadingSubTitle>

                        <ul className="text-textSecondary grid gap-4">
                            <li>
                                We cannot guarantee that a Doctor assigned to
                                take a Consultation will be available at the
                                appointed time. However, if a Doctor is
                                unavailable, we will endeavour to source an
                                alternate and will notify you as soon as
                                possible in the event that your Consultation is
                                cancelled.
                            </li>
                            <li>
                                We respect a Patient's right to nominate their
                                preference of Doctor (e.g. the gender of their
                                Doctor or the ability to speak a language other
                                than English) and if possible We will
                                accommodate preferences, but whether or not We
                                can do so is dictated by availability.
                            </li>
                            <li>A Doctor has full discretion to:</li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;
                                </span>
                                Interrupt or re-schedule a Consultation.
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;
                                </span>
                                Discontinue a Consultation or
                            </li>
                            <li className="flex gap-2 items-start text-textSecondary">
                                <span className="w-3 h-[4px] border mt-2.5 mr-1 bg-textSecondary">
                                    {" "}
                                    &nbsp;
                                </span>
                                Decline to treat You / the Patient.
                            </li>
                            <li>
                                For any reason they consider reasonable. Complex
                                medical problems may not be suitable for
                                Telehealth Consultation as they may require a
                                longer time than 30 minutes. In most cases it
                                will not be an option to extend your
                                Consultation beyond the initial 30 minutes,
                                however arrangements can be made with the Doctor
                                to book a further appointment at another time if
                                appropriate.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Diagnosis and treatments (prescription medicines)
                        </HeadingSubTitle>

                        <p className="text-textSecondary">
                            At this stage doctors are not going to offer
                            treatments, all they can offer is initial/second
                            medical advice and counselling.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Use of communication tools
                        </HeadingSubTitle>

                        <ul className="text-textSecondary">
                            <li>
                                How a Consultation is conducted is up to the
                                Doctor and may include video, audio, messages or
                                a combination of these things. Email and fax may
                                not be used for Consultations.
                            </li>
                            <li className="mt-4">
                                You will, however, be required to provide an
                                email address or fax number in case the Doctor
                                wishes to send paperwork to You or the Patient
                                after the Consultation. Please note that no
                                communications between a Doctor and a Patient is
                                authorized outside of the allocated Consultation
                                time without the prior written approval of the
                                Doctor.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>
                            Intellectual property ownership
                        </HeadingSubTitle>

                        <p className="text-textSecondary">
                            The Site/app and its entire contents, features and
                            functionality (including but not limited to all
                            information, compilation, organization and display
                            of the content, as well as all software, images,
                            logos, video and audio), are the exclusive property
                            of Us and are protected by laws relating to
                            intellectual property. These Terms permit you to use
                            the Site for your personal, non-commercial use only.
                            You must not access or use for any commercial
                            purposes any part of the Site or any services or
                            materials available through the Site.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-6">
                        <HeadingSubTitle>Complaints</HeadingSubTitle>
                        <div>
                            <ul className="text-textSecondary">
                                <li>
                                    If you have a concern please raise it with
                                    us first as we may be able to resolve the
                                    issue.
                                </li>
                                <li className="mt-4">
                                    Any complaints should be submitted via our
                                    contact us Enquiry Form, emailed to
                                </li>
                            </ul>
                            <span className="underline font-semibold mt-4 block">
                                hello@adiba.ai
                            </span>
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
