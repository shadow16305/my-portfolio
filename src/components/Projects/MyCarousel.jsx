import React from "react";
import { useSpringCarousel } from "react-spring-carousel";

import arrow from "../../assets/arrow.svg";

const MyCarousel = ({ projects_items }) => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      gutter: 12,
      items: projects_items.map((item) => ({
        id: item.id,
        renderItem: (
          <div className="flex justify-center">
            <div
              key={item.id}
              className="rounded-[30px] w-[300px] h-full lg:w-full lg:h-full relative group"
            >
              <img
                src={item.img}
                className="w-[300px] h-[240px] lg:w-[362px] lg:h-[245px] rounded-t-[30px] hover:opacity-10 transition-[0.25s] relative"
                alt={item.text}
              />
              <div className="hidden lg:flex flex-col items-center justify-center gap-4 opacity-0 rounded-[30px] hover:opacity-100 hover:bg-black hover:bg-opacity-50 absolute z-10 lg:w-[100%] lg:h-[100%] left-0 top-0 transition-[0.25s]">
                <a
                  href={item.siteHref}
                  target="_blank"
                  className="cursor-pointer py-1 px-4 uppercase text-white border-2 border-x-0 border-t-0 border-b-white hover:border-b-[#4BBAC4] transition-[0.25s]"
                >
                  View Site
                </a>
                <a
                  href={item.codeHref}
                  target="_blank"
                  className="cursor-pointer py-1 px-4 uppercase text-white border-2 border-x-0 border-t-0 border-b-white hover:border-b-[#4BBAC4] transition-[0.25s]"
                >
                  View Code
                </a>
              </div>
              <div className="backdrop-filter backdrop-blur-md bg-opacity-20 bg-white  w-full rounded-b-[30px]">
                <p className="uppercase py-4 text-center font-['Philosopher'] text-[18px]">
                  {item.text}
                </p>
                <div className="flex justify-center gap-4 lg:hidden pb-2">
                  <a
                    href={item.siteHref}
                    target="_blank"
                    className="text-[14px] py-1 px-4 uppercase text-white border-2 border-x-0 border-t-0 border-b-[#4BBAC4] transition-[0.25s]"
                  >
                    View Site
                  </a>
                  <a
                    href={item.siteHref}
                    target="_blank"
                    className="text-[14px] py-1 px-4 uppercase text-white border-2 border-x-0 border-t-0 border-b-[#4BBAC4] transition-[0.25s]"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ),
      })),
    });

  return (
    <div className="container mx-auto">
      <div className="relative overflow-hidden w-[300px] lg:w-[1200px] mx-auto">
        {carouselFragment}
      </div>
      <div className="lg:justify-center gap-12 mt-8 hidden lg:flex">
        <button onClick={slideToPrevItem}>
          <img src={arrow} className="rotate-180" alt="" />
        </button>
        <button onClick={slideToNextItem}>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
