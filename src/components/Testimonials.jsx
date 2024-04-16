import React from 'react';

function TestimonialCard({ imageSrc, altText, text, rating, name }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center text-lg text-[#6D6D6D] leading-7">
        {text}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src="/star.png"
          alt="star icon"
          width="24"
          height="24"
          className="object-contain m-0 bg-transparent"
        />
        <p className="text-xl text-[#6D6D6D]">({rating})</p>
      </div>
      <h1 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {name}
      </h1>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8 bg-[#f5f6ff]">
      <div className="container mx-auto">
        <h1 className="font-palanquin text-center text-5xl font-bold">
          What Our
          <span className="text-[#FF6452]"> Customers</span> Say?
        </h1>
        <p className="text-lg text-[#606D6D] leading-7 m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experience with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          <TestimonialCard
            imageSrc="/customer1.png"
            altText="customer1"
            text="The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
            rating={4.5}
            name="Morich Brown"
          />
          <TestimonialCard
            imageSrc="/customer2.png"
            altText="customer2"
            text="The product not only met but exceeded my expectations. Definitely gonna be a repeating customer!"
            rating={4.5}
            name="Elizabeth A."
          />
        </div>
      </div>
    </div>
  );
}
