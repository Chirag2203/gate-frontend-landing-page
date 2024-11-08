import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { testimonialsForAuthSideBar } from "@/constants/data";

const AuthInfoSideBar = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="bg-primary min-h-screen p-12 " >
      <p className="text-white text-xl font-bold font-hero">Kalppo</p>
      <div className="mt-24 ">
        <p className="text-white text-5xl font-medium">
          Your Gateway to IITs & Elite PSUs
        </p>
        <p className="text-gray-400 text-2xl mt-8">
          Join thousands transforming their careers with <br />
          AI-powered GATE preparation
        </p>
      </div>
      <div className="mt-24 flex flex-col items-center gap-4 ">
        <p className="text-gray-300 font-light">Trusted by</p>
        <Carousel
          plugins={[plugin.current]}
          className=" w-2/3 mx-2"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonialsForAuthSideBar.map((testimony, index) => (
              <CarouselItem key={index}>
                <div className="p-4 bg-white rounded-xl h-52 ">
                  <div className="flex gap-2 items-center">
                    <img
                      src="https://avatar.iran.liara.run/public"
                      className="w-12"
                    />
                    <div>
                      <p className="font-semibold">{testimony.name}</p>
                      <p className="text-xs text-primary">{testimony.title}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">{testimony.quote}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default AuthInfoSideBar;
