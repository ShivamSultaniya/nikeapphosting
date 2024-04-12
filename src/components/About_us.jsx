export default function About_us() {
  const Card = ({ img, title, text }) => {
    return (
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hoverBtn">
        <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
          <img src={img} alt="card" width="24" height="24" className="mx-2.5"/>
        </div>
        <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold ">
          {title}
        </h1>
        <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">
          {text}
        </p>
      </div>
    );
  };

  return (
    <>
      <div id="about-us" className="lg:py-24 py-12 lg:px-16 px-8">
        <main className="container mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
          <div className="flex flex-1 flex-col">
            <h1 className="font-palanquin text-5xl leading-[58px] capitalize font-bold lg:max-w-lg">
              We Provide You
              <span className="text-[#FF6452]"> Super</span>
              <span className="text-[#FF6452]"> Quality</span> Shoes
            </h1>
            <p className="mt-4 Ig:max-w-lg text-Igtext-[#606D6D] leading-7">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="mt-6 1g:max-w-lg text-lgtext-[#6D6D6D] leading-7">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-11">
              <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">
                View Details
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/shoe8.png"
              alt="shoe-8"
              width="570"
              height="522"
              className="object-contain max-w-full h-auto"
            />
          </div>
        </main>
      </div>
      <div className="1g:px-16 px-8 py-10">
        <div className="flex justify-center flex-wrap gap-9">
          <Card
            img="/truck.png"
            text="Enjoy seamless shopping with our complimentary shipping service."
            title="free shipping"
          />
          <Card
            img="/shield-tick.png"
            text="Experience worry-free transactions with our secure payment options."
            title="Secure Payment"
          />
          <Card
            img="/support.png"
            text="Our dedicated team is here to assist you every step of the way."
            title="Love to help you"
          />
        </div>
      </div>
    </>
  );
}
