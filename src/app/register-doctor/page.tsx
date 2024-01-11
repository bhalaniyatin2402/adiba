"use client";
import AuthRightSidebar from "@/components/AuthRightSidebar";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { useState } from "react";

export default function Registerdoctor() {
  const [value, setValue] = useState()

  return (
    <main className="relative bg-white inline-block w-full h-full">
      <form className="">
        <div className="container m-auto">
          <div className="grid lg:grid-cols-2 min-h-screen lg:gap-20">
            <div className="col-span-1 flex flex-col justify-between items-center">
              <div className="w-full">
                <div className="flex mt-12 ml-6 mr-6 justify-between ">
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
                  <h3 className="text-center font-bold text-32">
                    {" "}
                    Register Doctor{" "}
                  </h3>

                  <div className="gap-y-4 grid grid-cols-1 items-center ">
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
                      <Input
                        preIcon="user"
                        name={"specialty"}
                        type={"text"}
                        placeholder={"Specialty"}
                      // error={errors?.email?.message}
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
                        type={"password"}
                        placeholder={"Password"}
                      // error={errors?.password?.message}
                      // register={register}
                      />
                    </div>
                    <div className="">
                      <Input
                        preIcon="lock-closed-o"
                        name={"confirmpassword"}
                        type={"password"}
                        placeholder={"Confirm Password"}
                      // error={errors?.password?.message}
                      // register={register}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-textSecondary">
                      Please upload all your certificates in one file
                    </span>
                    <input
                      type="file"
                      name="file"
                      id="my-file"
                      className="hidden"
                    />
                    <label htmlFor="my-file">
                      <div className="flex flex-col gap-3 mt-3 justify-center items-center p-8 border-dashed border-[#C9CCD3] border-2 rounded-2xl cursor-pointer">
                        <Image
                          src={"./images/upload.svg"}
                          height={35}
                          width={48}
                          alt=""
                        //   className="h-12 w-12"
                        />
                        <span className="text-base sm:text-lg">
                          Drag & drop files or{" "}
                          <b className="underline">Browse</b>
                        </span>
                        <span className="text-textSecondary text-xs sm:text-base">
                          Supported Formats: Only PDF
                        </span>
                        <span className="text-textSecondary text-xs sm:text-base">
                          Size: Max 1 MB
                        </span>
                      </div>
                    </label>
                  </div>
                  <div>
                    <span className="text-textSecondary">Uploaded File </span>
                    <div className="flex gap-5 mt-3 justify-between items-center p-4 border-[#C9CCD3] border-2 rounded-2xl">
                      <Image
                        src={"./images/pdf.svg"}
                        height={42}
                        width={42}
                        alt=""
                        className="h-[30px] w-[30px] sm:h-[42px] sm:w-[42px]"
                      />
                      <div className="w-full">
                        <div className="flex justify-between items-end pb-1 sm:pb-2">
                          <span className="text-[#293754] text-xs font-semibold">
                            Certificates
                          </span>
                          <span className="text-[#32B732] text-[10px] font-semibold">
                            Completed
                          </span>
                        </div>
                        <hr className="h-[4px] sm:h-[8px] border-0 bg-[#32B732] rounded-2xl" />
                      </div>
                      <Image
                        src={"./images/delete.svg"}
                        height={24}
                        width={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="grid gap-6">
                    <Link href="/">
                      <button
                        className="w-full p-4 text-white bg-fgc rounded-xl"
                        type="button"
                      >
                        Sign Up
                      </button>
                    </Link>
                    <div className=" text-textSecondary text-center text-sm sm:text-base">
                      <span>Already have an account?</span>
                      <span className=" text-fgc font-bold">
                        <Link href="/login"> Sign in</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-auto self-end text-textSecondary mx-auto my-10 sm:my-4 text-xs sm:text-base">
                Copyright © Adiba. Ltd. {new Date().getFullYear()} . All rights
                reserved.
              </div>
            </div>
            <AuthRightSidebar />
          </div>
        </div>
      </form>
    </main>
  );
}
