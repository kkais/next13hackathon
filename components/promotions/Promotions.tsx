import Image from "next/image"

import event1 from "../../public/event1.webp"
import event2 from "../../public/event2.webp"
import event3 from "../../public/event3.webp"

const Promotions = () => {
  return (
    <section className="px-8 lg:px-32 py-16">
      <div className="flex flex-col gap-4 mb-8 text-center">
        <span className="text-center text-xs font-bold leading-[0.1em] text-[#0062f5]">PROMOTIONS</span>
        <h2 className="text-center text-[32px] font-bold leading-10 tracking-[0.03em] text-[#212121]">Our Promotions Events</h2>
      </div>
      <div className="flex flex-col justify-between gap-8 xl:flex-row ">
        <div className=" flex shrink grow-[1.5] basis-0 flex-col gap-4">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-[#d5d5d8] px-8 tracking-tighter text-[#212121]">
            <div className="content">
              <h3 className=" text-[1.75rem] font-bold leading-9">
                GET UP TO <span className="text-4xl font-extrabold leading-[45px]">60%</span>
              </h3>
              <p className="text-lg font-normal leading-6 tracking-[0.03em]">For the summer season</p>
            </div>
            <Image
              alt="event"
              src={event1}
              width="282"
              height="218"
              decoding="async"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#212121] px-[2rem] pb-[2rem] pt-[3rem] text-white">
            <h3 className=" mb-4 text-4xl font-extrabold leading-[45px] tracking-[0.03em]">GET 30% Off</h3>
            <p className="text-sm font-normal leading-[18px] tracking-[0.03em] text-white">USE PROMO CODE</p>
            <button className=" mt-1 rounded-lg border-0 bg-[#474747] px-10 py-2 text-sm lg:text-lg lg:font-bold leading-5 tracking-[0.25em] text-white">DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 shrink grow basis-0">
          <div className="flex flex-col items-center justify-between bg-[#efe1c7] pt-6 h-2/3 lg:h-full w-full">
            <div className="w-full ml-10">
              <p className="text-base font-normal tracking-[0.03em]">Flex Sweatshirt</p>
              <div className="price">
                <span className="relative after:absolute after:bottom-[10px] after:left-0 after:h-[1px] after:w-full after:bg-[#212121] after:content-['']">$100.00</span>
                <span className="ml-[10px] text-lg font-semibold leading-6">$75.00</span>
              </div>
            </div>
            <Image
              alt="event"
              src={event2}
              width="282"
              height="362"
              decoding="async"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex flex-col items-center justify-between bg-[#d7d7d9] pt-6 h-2/3 lg:h-full w-full">
            <div className="w-full ml-10">
              <p className="text-base font-normal tracking-[0.03em]">Flex Push Button Bomber</p>
              <div className="price">
                <span className="relative after:absolute after:bottom-[10px] after:left-0 after:h-[1px] after:w-full after:bg-[#212121] after:content-['']">$225.00</span>
                <span className="ml-[10px] text-lg font-semibold leading-6">$190.00</span>
              </div>
            </div>
            <Image
              alt="event"
              src={event3}
              width="282"
              height="368"
              decoding="async"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotions
