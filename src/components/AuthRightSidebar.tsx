import Image from "next/image";
import React from "react";

const AuthRightSidebar = () => {
    return (
        <>
            <div className="col-span-1 hidden sm:block">
                <div className="lg:h-full items-center m-16 flex justify-center p-12 gap-5 rounded-xl bg-fgc text-white max-h-[calc(100vh-128px)] ">
                    <div className="">
                        <div className="">
                            <div className="w-full rounded-full border-2 border-gray-400 border-opacity-10 p-8 lg:p-12 relative ">
                                <Image
                                    src={"./word1.svg"}
                                    height={60}
                                    width={40}
                                    alt=""
                                    className="h-full w-full "
                                />
                            </div>
                        </div>
                        <div className="mt-12 text-center text-32 font-bold leading-[150%]">
                            Creating the future of medicine.
                        </div>
                        <div className="text-gray-200 text-center mt-5">
                            We connect patients from the Middle East with the
                            best specialized doctors worldwide.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthRightSidebar;
