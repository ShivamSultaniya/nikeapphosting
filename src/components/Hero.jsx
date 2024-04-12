import { useEffect } from "react";
import { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function Hero() {
  const [imageUrl, setImageUrl] = useState("/shoe1.png");

  useEffect(() => {
    setImageUrl(imageUrl);
  }, [imageUrl]);
  return (
    <div>
      <div
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-y-10 container mx-auto"
      >
        <section className="relative z-10 xl:w-2/5 flex flex-col justify-center items-start px-11 pt-28">
          <p className="text-xl text-[#ff6452]">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-black text-8xl max-sm:text-[72px] leading-[106px] max-sm:leading-[82px] font-bold">
            <span className="bg-white relative z-10 pr-10 lg:text-8x1 font-palanquin xl:whitespace-nowrap">
              The New Arrival
            </span>{" "}
            <br />
            <span className="text-[#ff6452] inline-block mt-3">Nike </span>{" "}
            Shoes
          </h1>
          <p className="text-[#6D6D6D] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">
            Shop Now
            <HiArrowCircleRight className="ml-2 rounded-full text-2xl" />
          </button>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            <div>
              <p className="text-4xl font-palanquin font-bold text-black ">
                1k+
              </p>
              <p className="leading-7 font-montserrat text-[#6D6D6D] ">
                Brands
              </p>
            </div>
            <div>
              <p className="text-4xl font-palanquin font-bold ☐ text-black ">
                500+
              </p>
              <p className="leading-7 font-montserrat text-[#6D6D6D] ">Shops</p>
            </div>
            <div>
              <p className="text-4xl font-palanquin font-bold ☐ text-black ">
                250k+
              </p>
              <p className="leading-7 font-montserrat text-[#6D6D6D] ">
                Customers
              </p>
            </div>
          </div>
        </section>
        <section className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40">
          <img
            src={imageUrl}
            alt=""
            width="610"
            height="500"
            className="object-contain relative z--10 max-w-full h-auto"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            <div>
              <div
                style={{
                  borderColor: imageUrl === "/shoe1.png" ? "#ff6452" : "",
                }}
                className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1 transition-all"
              >
                <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img
                    src="/shoe1.png"
                    alt=""
                    width="127"
                    height="103"
                    className="object-contain max-w-full h-auto"
                    onClick={() => setImageUrl("/shoe1.png")}
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderColor: imageUrl === "/shoe2.png" ? "#ff6452" : "",
                }}
                className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1 transition-all"
              >
                <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img
                    src="/shoe2.png"
                    alt=""
                    width="127"
                    height="103"
                    className="object-contain max-w-full h-auto"
                    onClick={() => setImageUrl("/shoe2.png")}
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderColor: imageUrl === "/shoe3.png" ? "#ff6452" : "",
                }}
                className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1 transition-all"
              >
                <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img
                    src="/shoe3.png"
                    alt=""
                    width="127"
                    height="103"
                    className="object-contain max-w-full h-auto"
                    onClick={() => setImageUrl("/shoe3.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
