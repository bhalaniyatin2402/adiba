import Header from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";

export default function DoctorVideoCall() {
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
                    src={"./images/user.svg"}
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
                    src={"./images/calendar.svg"}
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
            <div className="bg-white p-5 rounded-2xl">
              <Link href={"/login"} className="flex gap-4 p-4">
                <Image
                  src={"./images/user.svg"}
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
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold">Dashboard</span>
              <span className="text-textSecondary font-medium text-xs">
                Lorem Ipsum is simply dummy text
              </span>
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
              <div className="bg-white lg:p-5 p-3 rounded-2xl w-fit lg:h-auto h-12">
                <Image
                  src={"./images/brightness.svg"}
                  height={24}
                  width={24}
                  alt=""
                // className="h-4 w-4 lg:h-6 lg:w-6"
                />
              </div>
              <div className="bg-white lg:p-5 p-3 rounded-2xl w-fit lg:h-auto h-12">
                <Image
                  src={"./images/notification.svg"}
                  height={24}
                  width={24}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="sm:mt-6">
            <div className="video_call rounded-2xl">
              <div className="video_call_user rounded-2xl"></div>
            </div>

            <div className="rounded-2xl mt-6 sm:p-6 p-3 bg-white flex justify-between items-center lg:flex-row flex-col gap-5">
              <div className="flex lg:flex-col flex-row items-center w-full lg:w-auto justify-between lg:text-center">
                <span>00:1:25</span>
                <span className="sm:text-2xl text-lg">Maria Baptista</span>
                <span className="text-[#EC1E1E]">Ongoing</span>
              </div>
              <div className="flex justify-between w-full lg:w-auto lg:gap-10">
                <div className="rounded-full bg-fgc w-10 h-10 flex justify-center items-center">
                  <Image
                    src={"./images/vc_wifi.svg"}
                    height={26}
                    width={26}
                    alt=""
                    className=""
                  />
                </div>

                <div className="rounded-full bg-fgc w-10 h-10 flex justify-center items-center">
                  <Image
                    src={"./images/vc_microphone.svg"}
                    height={26}
                    width={26}
                    alt=""
                    className=""
                  />
                </div>

                <div className="rounded-full bg-fgc w-10 h-10 flex justify-center items-center">
                  <Image
                    src={"./images/vc_video.svg"}
                    height={26}
                    width={26}
                    alt=""
                    className=""
                  />
                </div>

                <div className="rounded-full bg-fgc w-10 h-10 flex justify-center items-center">
                  <Image
                    src={"./images/vc_paperclip.svg"}
                    height={26}
                    width={26}
                    alt=""
                    className=""
                  />
                </div>

                <div className="rounded-full bg-[#EC1E1E] w-10 h-10 flex justify-center items-center">
                  <Image
                    src={"./images/vc_phone.svg"}
                    height={26}
                    width={26}
                    alt=""
                    className=""
                  />
                </div>
                <div className="lg:hidden rounded-full bg-fgc w-10 h-10 flex justify-center items-center">
                  <Image
                    src={"./images/more-vertical.svg"}
                    height={26}
                    width={26}
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="hidden rounded-full bg-fgc w-10 h-10 lg:flex justify-center items-center">
                <Image
                  src={"./images/more-vertical.svg"}
                  height={26}
                  width={26}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
