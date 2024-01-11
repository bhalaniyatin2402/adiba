"use client";
import AuthRightSidebar from "@/components/AuthRightSidebar";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import HeadingTitle from "@/components/common/HeadingTitle";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { useState } from "react";

export default function Registration() {
    const [value, setValue] = useState()

    const data = [
        {
            id: 1,
            patients: "Morgan Fren",
            address: "Akshya Nagar 1st Block 1st Street",
            time: "9:30AM - 10:00AM",
            diseases: "Fever",
            status: "Pending",
            action: "-",
        },
        {
            id: 2,
            patients: "Barack Obama",
            address: "Akshya Nagar 1st Block 1st Street",
            time: "10:00AM - 10:30AM",
            diseases: "Cancer",
            status: "On-Call",
            action: "-",
        },
        {
            id: 3,
            patients: "Bill Gates",
            address: "Akshya Nagar 1st Block 1st Street",
            time: "10:30AM - 11:30AM",
            diseases: "Malaria",
            status: "Complete",
            action: "-",
        },
        {
            id: 4,
            patients: "Joe Biden",
            address: "Akshya Nagar 1st Block 1st Street",
            time: "11:30AM - 12:00AM",
            diseases: "Dental",
            status: "Pending",
            action: "-",
        },
    ];

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
                                <div className=" mt-12 ml-6 mr-6 justify-between lg:block hidden ">
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
                                        Registration
                                    </HeadingTitle>

                                    <div className="gap-y-4 grid grid-cols-1 items-center ">
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
                                                preIcon="user"
                                                name={"fullname"}
                                                type={"text"}
                                                placeholder={"Full Name"}
                                            // error={errors?.password?.message}
                                            // register={register}
                                            />
                                        </div>
                                        <div className="">
                                            <PhoneInput
                                                defaultCountry="BH"
                                                international
                                                withCountryCallingCode
                                                value={value}
                                                onChange={() => { }}
                                                placeholder={"(+1) 123-456-7890"}
                                                className="relative block w-full appearance-none rounded-[12px] border  border-border px-2.5 lg:py-4 py-3 text-textSecondary  focus:z-10 focus:border-gray-400 focus:outline-none   disabled:cursor-not-allowed"
                                            />
                                        </div>
                                        <div className="">
                                            <Input
                                                preIcon="calendar-o"
                                                name={"dob"}
                                                type={"text"}
                                                placeholder={"dd-mm-yyyy"}
                                            // error={errors?.password?.message}
                                            // register={register}
                                            />
                                        </div>

                                        <div className="">
                                            <Input
                                                preIcon="lock"
                                                name={"password"}
                                                type={"password"}
                                                placeholder={"Password"}
                                            // error={errors?.password?.message}
                                            // register={register}
                                            />
                                        </div>
                                        <div className="">
                                            <Input
                                                preIcon="lock"
                                                name={"confirmpassword"}
                                                type={"password"}
                                                placeholder={"Confirm Password"}
                                            // error={errors?.password?.message}
                                            // register={register}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-6">
                                        <Link href="/profile">
                                            <Button>Sign Up now</Button>
                                        </Link>
                                        <div className=" text-textSecondary text-center">
                                            <span>
                                                Already have an account?
                                            </span>
                                            <span className=" text-fgc font-bold">
                                                <Link href="/login">
                                                    {" "}
                                                    Log in
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-auto self-end text-textSecondary mx-auto sm:mb-16 ">
                                Copyright © Adiba. Ltd.{" "}
                                {new Date().getFullYear()} . All rights
                                reserved.
                            </div>
                        </div>
                        <AuthRightSidebar />
                    </div>
                </div>
            </form>

            {/* <div className="flex-auto block py-8 pt-6 px-9">
        <div className="overflow-x-auto">
          <table className="w-[1000px] my-0 align-middle text-dark border-neutral-200">
            <thead className="">
              <tr className="font-semibold text-[0.95rem] text-secondary-dark border-b border-[#f5f5f5] ">
                <th className="pb-3 text-start">No</th>
                <th className="pb-3 text-start">Patients</th>
                <th className="pb-3 text-start">Address</th>
                <th className="pb-3 text-start">Time</th>
                <th className="pb-3 text-start">Diseases</th>
                <th className="pb-3 text-start">Status</th>
                <th className="pb-3 text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#f5f5f5] text-sm font-semibold"
                >
                  <td className="py-5">{item.id}</td>
                  <td className="">{item.patients}</td>
                  <td className="">{item.address}</td>
                  <td className=" ">{item.time}</td>
                  <td className="">
                    <span className="bg-[#F8FBFF] rounded-3xl text-center px-4 py-2 text-[10px]">
                      {item.diseases}
                    </span>
                  </td>
                  <td className="">
                    {item.status == "Pending" && (
                      <span className="bg-[#FCE7E7] text-[#E11010] rounded-3xl text-center px-4 py-2 text-[10px]">
                        {item.status}
                      </span>
                    )}

                    {item.status == "On-Call" && (
                      <span className="bg-[#FFF4E5] text-[#FF9600] rounded-3xl text-center px-4 py-2 text-[10px]">
                        {item.status}
                      </span>
                    )}

                    {item.status == "Complete" && (
                      <span className="bg-[#EAF5EA] text-[#2B982B] rounded-3xl text-center px-4 py-2 text-[10px]">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
        </main>
    );
}
