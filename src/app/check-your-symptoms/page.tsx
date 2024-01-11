import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import { Input } from "@/components/common/Input";
import SecondaryHero from "@/components/common/SecondaryHero";

export default function Checkyoursymptoms() {
  return (
    <main className="relative bg-white">
      <div className="">
        <Header />
      </div>

      <SecondaryHero
        title="Check your symptoms"
        sitemap="Home > Check your symptoms"
        image="/images/doctor-1.png"
      />

      <div className="p-5 sm:p-9 lg:p-18 mb-6 sm:mb-16">
        <div className=" m-auto grid gap-10 sm:gap-18 text-center">
          <span className="sm:text-32 text-2xl font-bold text-start mx-auto">
            This is a chat with our AI
          </span>
          <div className=" lg:w-[850px] mx-auto rounded-3xl text-start">
            <div className="flex justify-between px-5 py-4 bg-fgc rounded-t-3xl">
              <div className="flex items-center gap-4">
                <Image
                  src={"./images/chat-profile.svg"}
                  height={48}
                  width={48}
                  alt=""
                  className="cursor-pointer"
                />
                <span className="text-white">Bot</span>
              </div>
              <Image
                src={"./images/more-vertical.svg"}
                height={30}
                width={30}
                alt=""
                className="cursor-pointer"
              />
            </div>
            <div className="bg-[#DFEAF6] rounded-b-3xl pt-3 sm:p-6 lg:p-16">
              <div className="w-full px-3 sm:px-5 flex flex-col justify-between">
                <div className="flex flex-col mt-5">
                  <div className="flex justify-start mb-6 sm:mb-12">
                    <Image
                      src={"./images/chat-profile.svg"}
                      height={48}
                      width={48}
                      alt=""
                      className="w-8 h-8 sm:h-12 sm:w-12 object-cover mr-2 cursor-pointer"
                    />
                    <div>
                      <div className="ml-2 mb-3 py-2 px-3 sm:py-3 sm:px-4  text-xs sm:text-base bg-white rounded-xl text-black w-fit">
                        Lorem Ipsum is simply dummy
                      </div>
                      <div className="ml-2 mb-3 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-white rounded-xl text-black w-fit">
                        Lorem Ipsum
                      </div>
                      <div className="ml-2 mb-3 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-white rounded-xl text-black w-fit">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry{" "}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mb-6 sm:mb-12">
                    <div className="mr-2 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-fgc rounded-xl text-white">
                      Lorem Ipsum is simply dummy
                    </div>
                    <Image
                      src={"./images/chat_profile_sender.svg"}
                      height={48}
                      width={48}
                      alt=""
                      className="w-8 h-8 sm:h-12 sm:w-12 object-cover mr-2 cursor-pointer"
                    />
                  </div>

                  <div className="flex justify-start mb-6 sm:mb-12">
                    <Image
                      src={"./images/chat-profile.svg"}
                      height={48}
                      width={48}
                      alt=""
                      className="w-8 h-8 sm:h-12 sm:w-12 object-cover mr-2 cursor-pointer"
                    />
                    <div>
                      <div className="ml-2 mb-3 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-white rounded-xl text-black w-fit">
                        Lorem Ipsum is simply dummy
                      </div>
                      <div className="ml-2 mb-3 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-white rounded-xl text-black w-fit">
                        Lorem Ipsum
                      </div>
                      <div className="ml-2 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-white rounded-xl text-black w-fit">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry{" "}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mb-2 sm:mb-12">
                    <div className="mr-2 py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-base bg-fgc rounded-xl text-white">
                      Lorem Ipsum is simply dummy
                    </div>
                    <Image
                      src={"./images/chat_profile_sender.svg"}
                      height={48}
                      width={48}
                      alt=""
                      className="w-8 h-8 sm:h-12 sm:w-12 object-cover mr-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="py-5 flex w-full items-center gap-4">
                  <input
                    type="file"
                    name="file"
                    id="my-file"
                    className="hidden"
                  />
                  <label htmlFor="my-file">
                    <Image
                      src={"./images/attachment.svg"}
                      height={24}
                      width={24}
                      alt=""
                      className="w-8 h-8 object-cover cursor-pointer"
                    />
                  </label>
                  <div className="w-full">
                    <Input
                      name={"sendMessage"}
                      type={"message"}
                      placeholder={"Type your message"}
                    // error={errors?.password?.message}
                    // register={register}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Link
              href={"/try-adiba-now"}
              className="px-6 text-xs sm:text-base lg:px-8 py-3 lg:py-4 w-fit bg-fgc rounded-2xl text-center text-white text-base font-semibold"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
