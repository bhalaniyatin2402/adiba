"use client"
import Header from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { useState } from "react";

export default function Profile() {
  const [value, setValue] = useState()

  return (
    <main className="relative bg-[#F7F8FB] inline-block w-full h-full pb-8">
      <div className="grid grid-cols-auto md:grid-cols-[250px_auto] lg:grid-cols-[300px_auto] min-h-screen">
        <div className="pl-6 pt-10 pb-8 hidden md:flex flex-col justify-between">
          <div className="flex flex-col gap-11">
            <Link href="/">
              <Image
                src={"./logo.svg"}
                height={40}
                width={125}
                alt=""
                className=""
              />
            </Link>
            <div className="bg-white p-5 rounded-2xl">
              <Link href={"/profile"}>
                <div className="flex gap-4 p-4">
                  <Image
                    src={"/images/user.svg"}
                    height={24}
                    width={24}
                    alt=""
                    className=""
                  />
                  <span>Profile</span>
                </div>
              </Link>
              <Link href={"/doctor-appointment"}>
                <div className="flex gap-4 p-4">
                  <Image
                    src={"/images/calendar.svg"}
                    height={24}
                    width={24}
                    alt=""
                    className=""
                  />
                  <span>Appointments</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-11">
            {/* <div className="bg-[#EDEEF3] p-5 rounded-2xl">
              <div className="flex flex-col gap-5 p-4 text-center">
                <span className="text-2xl font-bold">Upgrade to Pro</span>
                <span className="font-semibold text-sm">
                  Get 1 month free and unlock
                </span>
                <div className="mx-auto mt-14">
                  <Link
                    href={"/try-adiba-now"}
                    className="px-6 text-xs sm:text-base lg:px-6 py-3 lg:py-3 w-fit bg-fgc rounded-2xl text-center text-white text-base font-semibold"
                  >
                    Upgrade
                  </Link>
                </div>{" "}
              </div>
            </div> */}
            <div className="bg-white p-5 rounded-2xl cursor-pointer">
              <Link href={"/login"} className="flex gap-4 p-4">
                <Image
                  src={"/images/user.svg"}
                  height={24}
                  width={24}
                  alt=""
                  className=""
                />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <Header />
        </div>

        <div className="px-6 py-8">
          <div className="hidden md:flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-bold">Dashboard</span>
              {/* <span className="text-textSecondary font-medium text-xs">
                Lorem Ipsum is simply dummy text
              </span> */}
            </div>
            <div className="flex gap-8">
              <div className="md:w-[200px] lg:w-[300px]">
                <Input
                  preIcon="user"
                  name={"fullname"}
                  type={"text"}
                  placeholder={"Search here..."}
                // error={errors?.password?.message}
                // register={register}
                />
              </div>
              <div className="bg-white lg:p-5 p-3 rounded-2xl w-fit lg:h-auto h-12 cursor-pointer">
                <Image
                  src={"/images/brightness.svg"}
                  height={24}
                  width={24}
                  alt=""
                // className="h-4 w-4 lg:h-6 lg:w-6"
                />
              </div>
              <div className="bg-white lg:p-5 p-3 rounded-2xl w-fit lg:h-auto h-12 cursor-pointer">
                <Image
                  src={"/images/notification.svg"}
                  height={24}
                  width={24}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 sm:mt-6 rounded-2xl">
            <div className="flex flex-col justify-center sm:items-center items-start">
              <Image
                src={"/images/profile-img.png"}
                height={165}
                width={165}
                alt=""
                className="hidden sm:block"
              />
              <div className="sm:hidden flex">
                <div className=" rounded-2xl">
                  <Image
                    src={"/images/profile-img.png"}
                    height={75}
                    width={75}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <span className="font-semibold">John Smith</span>
                  <span className="text-textSecondary">
                    johnsmith123@gmail.com
                  </span>
                </div>
              </div>
              <div className="w-auto gap-4 flex flex-row">
                <Link
                  href={"#"}
                  className="flex items-center justify-center w-fit lg:w-auto px-3 sm:px-4 py-2 text-xs sm:text-base sm:py-3 bg-fgc rounded-lg sm:rounded-2xl text-white"
                >
                  <Image
                    src={"/images/edit.svg"}
                    height={18}
                    width={18}
                    alt=""
                    className="mr-2"
                  />
                  <span className="hidden sm:block">Edit Profile Picture </span>
                  <span className="block sm:hidden">Upload</span>
                </Link>
                <Link
                  href={"#"}
                  className="flex items-center justify-center w-fit lg:w-auto px-3 sm:px-4 py-2 text-xs sm:text-base sm:py-3 rounded-lg sm:rounded-2xl border border-slate-700"
                >
                  <Image
                    src={"/images/delete_small.svg"}
                    height={18}
                    width={18}
                    alt=""
                    className="mr-2"
                  />
                  <span className="hidden sm:block">
                    Delete Profile Picture{" "}
                  </span>
                  <span className="block sm:hidden">Delete</span>
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    preIcon="user"
                    name={"fullname"}
                    type={"text"}
                    placeholder={"John"}
                  // error={errors?.password?.message}
                  // register={register}
                  />
                  <Input
                  preIcon="envelope"
                  name={"fullname"}
                  type={"text"}
                  placeholder={"johnsmith1234@gmail.com"}
                // error={errors?.password?.message}
                // register={register}
                />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <PhoneInput
                    defaultCountry="BH"
                    international
                    withCountryCallingCode
                    value={value}
                    onChange={() => { }}
                    placeholder={"(+1) 123-456-7890"}
                    className="relative block w-full appearance-none rounded-[12px] border  border-border px-2.5 lg:py-4 py-3 text-textSecondary  focus:z-10 focus:border-gray-400 focus:outline-none   disabled:cursor-not-allowed"
                  />
                  <Input
                  preIcon="user"
                  name={"fullname"}
                  type={"text"}
                  placeholder={"Male"}
                // error={errors?.password?.message}
                // register={register}
                />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className=" relative">
                    <span className="w-24 absolute top-7 transform -translate-y-1/2 left-5 z-[11]">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 8H15M7 12H11M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                          stroke="#293754"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <textarea
                      className="border relative block w-full appearance-none rounded-[12px] border-border pl-16 pr-2 py-4 text-textSecondary focus:z-10 focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed dark:disabled:bg-disable-dark  dark:border-darkBorder dark:text-text-dark"
                      placeholder={
                        "2972 Westheimer Rd. Santa Ana, Illinois 85486 "
                      }
                      rows={4}
                    ></textarea>
                  </div>
                  {/* <div className=" relative">
                    <span className="w-24 absolute top-7 transform -translate-y-1/2 left-5 z-[11]">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 8H15M7 12H11M10 1H12C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19H5C2.79086 19 1 17.2091 1 15V10C1 5.02944 5.02944 1 10 1Z"
                          stroke="#293754"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <textarea
                      className="border relative block w-full appearance-none rounded-[12px] border-border pl-16 pr-2 py-4 text-textSecondary focus:z-10 focus:border-gray-400 focus:outline-none disabled:cursor-not-allowed dark:disabled:bg-disable-dark  dark:border-darkBorder dark:text-text-dark"
                      placeholder={
                        "2972 Westheimer Rd. Santa Ana, Illinois 85486 "
                      }
                      rows={4}
                    ></textarea>
                  </div> */}
                </div>
              </div>
              <div className="mx-auto mt-10">
                <Link
                  href={"/try-adiba-now"}
                  className="px-6 text-xs sm:text-base lg:px-6 py-3 lg:py-3 w-fit bg-fgc rounded-2xl text-center text-white text-base font-semibold"
                >
                  Save
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
