import Header from "@/components/common/Header";
import { Input } from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";

export default function DoctorAppointment() {
  const data = [
    {
      id: 1,
      patients: "Morgan Fren",
      address: "Akshya Nagar 1st Block 1st Street",
      time: "9:30AM - 10:00AM",
      diseases: "Fever",
      status: "Pending",
      img: "./images/user_table_4.svg",
      action: "-",
    },
    {
      id: 2,
      patients: "Barack Obama",
      address: "Akshya Nagar 1st Block 1st Street",
      time: "10:00AM - 10:30AM",
      diseases: "Cancer",
      status: "On-Call",
      img: "./images/user_table_1.svg",
      action: "-",
    },
    {
      id: 3,
      patients: "Bill Gates",
      address: "Akshya Nagar 1st Block 1st Street",
      time: "10:30AM - 11:30AM",
      diseases: "Malaria",
      status: "Complete",
      img: "./images/user_table_2.svg",
      action: "-",
    },
    {
      id: 4,
      patients: "Joe Biden",
      address: "Akshya Nagar 1st Block 1st Street",
      time: "11:30AM - 12:00AM",
      diseases: "Dental",
      status: "Pending",
      img: "./images/user_table_3.svg",
      action: "-",
    },
  ];

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

        <div className="px-6 sm:py-8 overflow-x-auto">
          <div className="hidden md:flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Doctor Appointment</span>
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

          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] mt-6 bg-white">
            <div className="relative flex flex-col min-w-0 break-words bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              {/* card header */}

              <div className="flex justify-between items-center px-5 py-6">
                <span className="text-[#313131] text-lg font-bold">
                  Today’s Appointments
                </span>
                <Link
                  href={"/book-appointment"}
                  className="flex items-center justify-center w-fit lg:w-auto px-3 sm:px-4 py-2 text-xs sm:text-base sm:py-3 bg-fgc rounded-lg sm:rounded-2xl text-white"
                >
                  <Image
                    src={"/./images/plus.svg"}
                    height={18}
                    width={18}
                    alt=""
                    className="mr-2"
                  />
                  <span className="block text-sm">Book an appointment</span>
                </Link>
              </div>

              <div className="flex sm:gap-8 gap-4 px-5 flex-wrap sm:flex-nowrap ">
                <div className="w-full">
                  <Input
                    preIcon="user"
                    name={"fullname"}
                    type={"text"}
                    placeholder={"Search here..."}
                  // error={errors?.password?.message}
                  // register={register}
                  />
                </div>
                <div className="border border-[#cccccc] lg:py-4 py-2 sm:pl-6 sm:pr-10 rounded-2xl flex sm:gap-4 gap-2 sm:h-auto h-10 pl-2 pr-2 items-center">
                  <Image
                    src={"./images/export.svg"}
                    height={30}
                    width={30}
                    alt=""
                    className=""
                  />
                  <span>Export</span>
                </div>
                <div className="border border-[#cccccc] lg:py-4 lg:px-4 sm:py-2 sm:px-2 py-4 px-4  rounded-2xl flex sm:gap-4 gap-2 sm:h-auto h-10 items-center">
                  <Image
                    src={"./images/filter.svg"}
                    height={30}
                    width={30}
                    alt=""
                    className="h-5 w-5 sm:h-[28px] sm:w-[28px]"
                  />
                </div>
              </div>

              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px] my-0 align-middle text-dark border-neutral-200">
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
                          <td className="">
                            <div className="flex items-center gap-3">
                              <Image
                                src={item.img}
                                height={30}
                                width={30}
                                alt=""
                                className=""
                              />
                              {item.patients}
                            </div>
                          </td>
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
              </div>
              <div className="overflow-x-auto">
                <div className="flex flex-col sm:flex-row gap-5 justify-between items-center px-5 pb-7">
                  <span className="text-[#313131] text-sm font-semibold">
                    Showing 1 to 4
                  </span>
                  <div className="flex gap-3">
                    <div className="rounded-full border border-fgc bg-fgc w-10 h-10 flex justify-center items-center">
                      <Image
                        src={"./images/left.svg"}
                        height={16}
                        width={16}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="rounded-full border border-fgc w-10 h-10 flex justify-center items-center cursor-pointer">
                      1
                    </div>
                    <div className=" cursor-pointer rounded-full bg-[#F9FAFB] w-10 h-10 sm:flex hidden justify-center items-center">
                      2
                    </div>
                    <div className="cursor-pointer rounded-full bg-[#F9FAFB] w-10 h-10 sm:flex hidden justify-center items-center">
                      3
                    </div>
                    <div className=" cursor-pointer rounded-full bg-[#F9FAFB] w-10 h-10 flex justify-center items-center">
                      ...
                    </div>
                    <div className=" cursor-pointer rounded-full bg-[#F9FAFB] w-10 h-10 sm:flex hidden justify-center items-center">
                      8
                    </div>
                    <div className=" cursor-pointer rounded-full bg-[#F9FAFB] w-10 h-10 sm:flex hidden justify-center items-center">
                      9
                    </div>
                    <div className=" cursor-pointer rounded-full bg-[#F9FAFB] w-10 h-10 flex justify-center items-center">
                      10
                    </div>
                    <div className=" cursor-pointer rounded-full bg-fgc w-10 h-10 flex justify-center items-center">
                      <Image
                        src={"./images/right.svg"}
                        height={16}
                        width={16}
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
