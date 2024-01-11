"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Icon from "./Icon";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

function Header() {
    const [activeMenu, setActiveMenu] = useState<string>("");
    const location = usePathname();

    const navigation = [
        {
            name: "Quality of care",
            href: "/quality-of-care",
            current: false,
            subMenu: [],
        },
        {
            name: "What we treat",
            href: "/what-we-treat",
            current: false,
            subMenu: [],
        },
        {
            name: "How it works",
            href: "/how-adiba-works",
            current: false,
            subMenu: [],
        },
        {
            name: "Careers",
            href: "/career",
            current: false,
            subMenu: [],
        },
        {
            name: "Terms and conditions",
            href: "/terms-and-conditions",
            current: false,
            subMenu: [],
        },
        {
            name: "Privacy Policy",
            href: "/privacy-policy",
            current: false,
            subMenu: [],
        },
        {
            name: "Cookie Policy",
            href: "/cookie-policy",
            current: false,
            subMenu: [],
        },
        {
            name: "Contact us",
            href: "/contact-us",
            current: false,
            subMenu: [],
        },
    ];

    return (
        <>
            <div className="container m-auto h-[72px]">
                <div className="flex h-full w-full flex-grow justify-between items-center py-2 px-6 lg:px-0">
                    <Link href={"/"}>
                        <Image
                            src={"./logo.svg"}
                            height={60}
                            width={40}
                            alt=""
                            className="h-6 lg:h-10 w-auto"
                        />
                    </Link>
                    {/* <div className="block lg:hidden">
                        <Icon icon="bars" className="h-5 w-5 lg:h-8 lg:w-8" />
                    </div> */}
                    <div className="hidden lg:flex lg:gap-4">
                        <Link
                            href={"./email"}
                            className="px-6 lg:px-6 py-3 lg:py-4 rounded-2xl gap-2.5 text-center text-base font-semibold underline"
                        >
                            Register
                        </Link>
                        <Link
                            href={"./login"}
                            className="px-8 lg:px-12 py-3 lg:py-4 bg-fgc rounded-2xl gap-2.5 text-center text-white text-base font-semibold"
                        >
                            Login
                        </Link>
                    </div>

                    <div className="flex lg:hidden lg:gap-4">
                        <Disclosure as="nav" className="z-10">
                            {({ open }) => (
                                <>
                                    <div className="mx-auto px-2 sm:px-8 lg:px-24 max-w-screen-2xl m-auto z-10">
                                        <div className="relative flex h-16 items-center justify-between">
                                            <div className="inset-y-0 left-0 flex items-center sm:hidden">
                                                {/* Mobile menu button*/}
                                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                    <span className="sr-only">
                                                        Open main menu
                                                    </span>
                                                    {open ? (
                                                        <Icon
                                                            icon="x-mark"
                                                            className="h-5 w-5 lg:h-8 lg:w-8"
                                                        />
                                                    ) : (
                                                        <Icon
                                                            icon="bars"
                                                            className="h-5 w-5 lg:h-8 lg:w-8 mt-3"
                                                        />
                                                    )}
                                                </Disclosure.Button>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        <Disclosure.Panel className="sm:hidden z-50 fixed top-0  buttom-0 left-0 bg-text h-screen w-[80%]">
                                            <div className="flex justify-center space-y-1 px-4 pb-3 pt-4">
                                                {" "}
                                                <Link href={"/"}>
                                                    <Image
                                                        src={"./logo-white.svg"}
                                                        height={60}
                                                        width={40}
                                                        alt=""
                                                        className="h-full w-full justify-center "
                                                    />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col justify-between w-full h-full">
                                                <div className="space-y-1 px-4 pb-3 pt-2">
                                                    {navigation.map((item) => (
                                                        <React.Fragment
                                                            key={item.name}
                                                        >
                                                            <div
                                                                className={
                                                                    "text-white hover:text-sky-200 font-medium flex justify-between rounded-md"
                                                                }
                                                                onClick={() =>
                                                                    setActiveMenu(
                                                                        item.name
                                                                    )
                                                                }
                                                                aria-current={
                                                                    item.current
                                                                        ? "page"
                                                                        : undefined
                                                                }
                                                            >
                                                                <Disclosure.Button
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    as="a"
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className={
                                                                        "text-white hover:text-sky-200 rounded-md px-3 py-2 items-center flex gap-x-4"
                                                                    }
                                                                // aria-current={subItem.current ? 'page' : undefined}
                                                                >
                                                                    <span className="rounded-full !w-2 bg-white h-2 leading-none inline-block">
                                                                        &nbsp;
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </div>
                                                        </React.Fragment>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col justify-between mb-20 px-7">
                                                    <Link
                                                        href={"/login"}
                                                        className="container w-full lg:w-auto whitespace-nowrap px-4 py-2.5  text-sm lg:text-base bg-white rounded-xl lg:rounded-2xl justify-center gap-2.5 font-semibold text-center"
                                                    >
                                                        Login
                                                    </Link>
                                                    <Link
                                                        href={"/email"}
                                                        className="w-full lg:w-auto whitespace-nowrap px-4 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base rounded-xl lg:rounded-2xl border border-white justify-center gap-2.5 text-white font-semibold text-center mt-4"
                                                    >
                                                        Register
                                                    </Link>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                    }
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
