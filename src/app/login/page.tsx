"use client";

import AuthRightSidebar from "@/components/AuthRightSidebar";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import HeadingTitle from "@/components/common/HeadingTitle";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/", { scroll: false });
    };
    return (
        <main className="relative bg-white inline-block w-full h-full">
            <form className="">
                <div className="container m-auto">
                    <div className="grid lg:grid-cols-2 min-h-screen lg:gap-20">
                        <div className="col-span-1 flex flex-col justify-between items-center">
                            <div className="w-full">
                                <div className="block lg:hidden">
                                    <Header />
                                </div>

                                <div className="mt-12 ml-6 mr-6 justify-between lg:block hidden">
                                    <Link href={"/"}>
                                        <Image
                                            src={"./logo.svg"}
                                            height={60}
                                            width={40}
                                            alt=""
                                            className="h-8 w-auto"
                                        />
                                    </Link>
                                    <div className="mt-2 lg:hidden ">
                                        <svg
                                            width="24"
                                            height="20"
                                            viewBox="0 0 24 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 18.4996C0 17.9435 0.448013 17.4997 1.00067 17.4997H22.9987C23.5519 17.4997 23.9993 17.9474 23.9993 18.4996C23.9993 19.0558 23.5513 19.4996 22.9987 19.4996H1.00067C0.447456 19.4996 0 19.0519 0 18.4996ZM0 9.99981C0 9.44368 0.448013 8.99983 1.00067 8.99983H22.9987C23.5519 8.99983 23.9993 9.44753 23.9993 9.99981C23.9993 10.5559 23.5513 10.9998 22.9987 10.9998H1.00067C0.447456 10.9998 0 10.5521 0 9.99981ZM0 1.49998C0 0.943856 0.448013 0.5 1.00067 0.5H22.9987C23.5519 0.5 23.9993 0.947706 23.9993 1.49998C23.9993 2.0561 23.5513 2.49996 22.9987 2.49996H1.00067C0.447456 2.49996 0 2.05225 0 1.49998Z"
                                                fill="#293754"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-[60px]  m-auto grid gap-8 p-6">
                                    <HeadingTitle className="text-center font-bold">
                                        Welcome back!
                                    </HeadingTitle>

                                    <div className="gap-y-4 grid grid-cols-1 items-center">
                                        <div className="">
                                            <Input
                                                preIcon="envelope"
                                                name={"email"}
                                                type={"text"}
                                                placeholder={"Email"}
                                                // error={errors?.email?.message}
                                                // register={register}
                                            />
                                        </div>

                                        <div className="">
                                            <Input
                                                preIcon="lock-closed-o"
                                                name={"password"}
                                                type={"!password"}
                                                placeholder={"Password"}
                                                // error={errors?.password?.message}
                                                // register={register}
                                            />
                                        </div>
                                        <div className="text-end">
                                            <Link
                                                className="text-fgc cursor-pointer items-end"
                                                href="/forgot-password"
                                            >
                                                Forgot Password ?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="grid gap-6">
                                        <Link href="/profile">
                                            <Button
                                                onClick={() =>
                                                    handleLoginClick()
                                                }
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                        <div className=" text-textSecondary text-center">
                                            <span>Don’t have an account?</span>
                                            <span className=" text-fgc font-bold">
                                                <Link href="/registration">
                                                    {" "}
                                                    Sign up
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-end text-textSecondary mx-auto mb-16 ">
                                Copyright © Adiba. Ltd.{" "}
                                {new Date().getFullYear()}
                                .All rights reserved.
                            </div>
                        </div>
                        <AuthRightSidebar />
                    </div>
                </div>
            </form>
        </main>
    );
}
