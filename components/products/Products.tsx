import Image from "next/image"

import female1 from "../../public/female1.png"
import female2 from "../../public/female2.png"
import female3 from "../../public/female3.png"

const Products = () => {
  return (
    <div className="px-8 lg:px-32 py-16">
      <div className="flex flex-col gap-4 mb-8 text-center">
        <span className="text-center text-xs font-bold leading-[0.1em] text-[#0062f5]">PRODUCTS</span>
        <h2 className="text-center text-[32px] font-bold leading-10 tracking-[0.03em] text-[#212121]">Check What We Have</h2>
      </div>
      <div className="relative z-[1] lg:mx-auto list-none overflow-hidden p-0">
        <div
          className="relative z-[1] box-content flex h-full w-1/6 lg:w-full transition-transform"
          id="swiper-wrapper"
          aria-live="polite"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className="relative h-full lg:w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="1 / 11"
          >
            <div>
              <a href="/product/brushed-raglan-sweatshirt">
                <div className=" flex flex-col items-center lg:items-start py-8 pl-[1.3rem] pr-0 transition-transform">
                  <Image
                    alt="product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="mt-2 text-[1.1rem] font-semibold leading-6 tracking-[0.03em] text-[#212121]">Brushed Raglan Sweatshirt</p>
                  <p className="mt-2 text-[1.2rem] font-semibold leading-6 text-[#212121]">$195</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="2 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/cameryn-sash-tie-dress">
                <div className="py-8 pl-[1.3rem] pr-0 transition-transform">
                  <Image
                    alt="Product"
                    src={female2}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="mt-2 text-[1.1rem] font-semibold leading-6 tracking-[0.03em] text-[#212121]">Cameryn Sash Tie Dress</p>
                  <p className="mt-2 text-[1.2rem] font-semibold leading-6 text-[#212121]">$545</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="3 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/flex-sweatshirt">
                <div className="py-8 pl-[1.3rem] pr-0 transition-transform">
                  <Image
                    alt="Product"
                    src={female3}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="mt-2 text-[1.1rem] font-semibold leading-6 tracking-[0.03em] text-[#212121]">Flex Sweatshirt</p>
                  <p className="mt-2 text-[1.2rem] font-semibold leading-6 text-[#212121]">$175</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="4 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/flex-sweatpants">
                <div className="py-8 pl-[1.3rem] pr-0 transition-transform">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="mt-2 text-[1.1rem] font-semibold leading-6 tracking-[0.03em] text-[#212121]">Flex Sweatpants</p>
                  <p className="mt-2 text-[1.2rem] font-semibold leading-6 text-[#212121]">$175</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="5 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/pink-fleece-sweatpants">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Pink Fleece Sweatpants</p>
                  <p className="product-price">$195</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="6 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/lite-sweatpants">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Lite Sweatpants</p>
                  <p className="product-price">$150</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="7 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/imperial-alpaca-hoodie">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Imperial Alpaca Hoodie</p>
                  <p className="product-price">$525</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="8 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/flex-push-button-bomber">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Flex Push Button Bomber</p>
                  <p className="product-price">$225</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="9 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/muscle-tank">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Muscle Tank</p>
                  <p className="product-price">$75</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="10 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/brushed-bomber">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Brushed Bomber</p>
                  <p className="product-price">$225</p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="relative h-full w-[446px] shrink-0 transition-transform"
            role="group"
            aria-label="11 / 11"
            style={{ width: "446.333px" }}
          >
            <div>
              <a href="/product/raglan-sweatshirt">
                <div className="product-card">
                  <Image
                    alt="Product"
                    src={female1}
                    width="380"
                    height="400"
                    className="product-image"
                  />
                  <p className="product-name">Raglan Sweatshirt</p>
                  <p className="product-price">$195</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="swiper-button-prev swiper-button-disabled"
        tabIndex={-1}
        role="button"
        aria-label="Previous slide"
        aria-controls="swiper-wrapper"
        aria-disabled="true"
      ></div>
      <div
        className="swiper-button-next"
        tabIndex={0}
        role="button"
        aria-label="Next slide"
        aria-controls="swiper-wrapper"
        aria-disabled="false"
      ></div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  )
}

export default Products
