export default function Footer() {
  return (
    <footer className="bg-[#000000] lg:px-16 px-8 lg:pt-24 pt-12 pb-8" id = "footer">
      <section className="container mx-auto">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img
                src="/nikelogoWhite.png"
                alt="footer logo"
                width="150"
                height="46"
              />
            </a>
            <p className="mt-6 text-base leading-7 text-[#fffc] sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your Perfect Size in Store. Get Rewards.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex justify-center items-center w-12 h-12bg-white rounded-full">
                <img
                  src="/facebook.png"
                  alt="facebook logo"
                  width="100"
                  height="100"
                />
              </div>
              <div className="flex justify-center items-center w-12 h-12bg-white rounded-full">
                <img
                  src="/x.png"
                  alt="x logo"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex justify-center items-center w-12 h-12bg-white rounded-full">
                <img
                  src="/instagram.png"
                  alt="instagram logo"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6">
                Products
              </h4>
              <ul className="p-0">
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  Air force 1
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  Air Max 1
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  Air Jordan 1
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  Air force 2
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  Nike Waffle Racer
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  {" "}
                  Nike Cortex
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-2x1 leading-normal font-medium mb-6">
                Help
              </h4>
              <ul>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  About us
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  FAQS
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  How it works
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  Privacy policy
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  {" "}
                  Payment policy
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-2x1 leading-normal font-medium mb-6">
                Get in touch
              </h4>
              <ul>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover: text-[#b2ab9f] cursor-pointer transition-all">
                  customer@nike.com
                </li>
                <li classNames="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer transition-all">
                  +92554862354
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
