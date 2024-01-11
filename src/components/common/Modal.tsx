import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

interface Props {
    isOpen: boolean;
    setIsOpen: (item: boolean) => void;
}

export default function Modal({ isOpen, setIsOpen }: Props) {
    const closeModal = () => {
        console.log("Modal closed");
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className=" fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md lg:max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                                    <span className="flex justify-center ">
                                        <Image
                                            src={"./images/right-1.svg"}
                                            height={100}
                                            width={100}
                                            alt=""
                                            className="lg:h-[200px] lg:w-[200px]"
                                        />
                                    </span>
                                    <Dialog.Title className="text-2xl lg:text-32 font-bold  leading-10 text-fgc text-center mt-8">
                                        We have received your appointment!
                                    </Dialog.Title>
                                    <div className="mt-4">
                                        <p className="text-sm lg:text-base text-textSecondary text-center">
                                            Thank you for providing your details
                                            and preferred appointment time.
                                            We´re currently working on
                                            scheduling your appointment and will
                                            send a confirmation email with the
                                            finalized time, matching your
                                            preference and our doctor´s
                                            availability. We appreciate your
                                            patience!
                                        </p>
                                    </div>

                                    <div className="mt-8 grid justify-center ">
                                        <Link
                                            href={"/"}
                                            className="px-4 py-[15px] lg:px-8 lg:py-4 border rounded-lg bg-fgc text-base text-white font-semibold"
                                            onClick={closeModal}
                                        >
                                            Go to Homepage
                                        </Link>

                                        <button
                                            className="text-base text-textSecondary mt-4"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
