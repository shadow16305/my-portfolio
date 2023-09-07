import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
const MyCarousel_Mobile = ({ projects_items }) => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 1,
      withLoop: true,
      gutter: 12,
      items: projects_items.map((item) => ({
        id: item.id,
        renderItem: (
          <div className="flex justify-center">
            <div key={item.id} className="rounded-[30px] w-[300px] relative">
              <img
                src={item.img}
                className="w-[300px] h-[240px] rounded-t-[30px] hover:opacity-10 transition-[0.25s] relative"
                alt={item.text}
              />
              <div className="backdrop-filter backdrop-blur-md bg-opacity-20 bg-white  w-full rounded-b-[30px]">
                <p className="uppercase py-4 text-center font-['Philosopher'] text-[18px]">
                  {item.text}
                </p>
                <div className="flex justify-center gap-4 pb-2">
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
      <div className="relative overflow-hidden max-w-[300px]">
        {carouselFragment}
      </div>
    </div>
  );
};

export default MyCarousel_Mobile;
