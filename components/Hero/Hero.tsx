"use client";

import { IVideoPlayer } from "@/@types/video.interface";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";
import HeroCard from "./HeroCard/HeroCard";
import VideoCarousel from "../VideoCarousel/VideoCarousel";

interface HeroProps {
  videos: IVideoPlayer[];
}

const Hero: React.FC<HeroProps> = ({ videos }) => {
  return (
    <section className="w-full h-full relative mb-[215px]">
      <Swiper
        cssMode={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id} className="!relative">
            <HeroCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-40 w-full -bottom-[245px]">
        <VideoCarousel videos={videos} category="Continuar reprodução" />
      </div>
    </section>
  );
};

export default Hero;
