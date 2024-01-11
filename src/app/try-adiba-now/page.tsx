import Link from "next/link";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import SecondaryHero from "@/components/common/SecondaryHero";

export default function Tryadibanow() {
  return (
    <main className="relative bg-white">
      <div className="">
        <Header />
      </div>

      <SecondaryHero
        title="Try adiba now"
        sitemap="Home > Try adiba now"
        image="/images/doctor-1.png"
      />

      <div className="p-9 lg:p-18">
        <div className=" m-auto grid gap-18 text-center">
          <span className="sm:text-32 text-2xl font-bold text-start mx-auto">
            What would you like to do next?
          </span>
          <div className="flex md:flex-row items-center flex-col gap-5 justify-center">
            <Link href="/check-your-symptoms">
              <div className="flex flex-col items-center justify-between gap-8 p-8 w-auto sm:w-[400px] md:w-[300px] lg:w-[400px] border-2 border-fgc rounded-2xl text-2xl font-bold cursor-pointer">
                <Image
                  src={"./images/stethoscope.svg"}
                  height={50}
                  width={50}
                  alt=""
                //   className="h-12 w-12"
                />
                <span className="text-[#181818] text-lg sm:text-2xl">
                  Check your symptoms
                </span>
              </div>
            </Link>
            <Link href="/book-appointment">
              <div className="flex flex-col items-center justify-between gap-8 p-8 sm:w-[400px] md:w-[300px] lg:w-[400px] border-2 border-fgc rounded-2xl text-2xl font-bold cursor-pointer">
                <Image
                  src={"./images/stethoscope.svg"}
                  height={50}
                  width={50}
                  alt=""
                //   className="h-12 w-12"
                />
                <span className="text-[#181818] text-lg sm:text-2xl">
                  Book an appointment
                </span>
              </div>
            </Link>
          </div>
          <div className="mx-auto">
            <Link
              href={"/"}
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
