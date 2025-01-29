"use client";

import { IVideoPlayer } from "@/@types/video.interface";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import CardPlayer from "../CardPlayer/CardPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { SimpleContainer } from "@/templates/container.template";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { SimpleLink } from "@/templates/link.template";

interface VideoCarouselProps {
  category: string;
  videos: IVideoPlayer[];
  backgroundColor?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  category,
  backgroundColor,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <section
      className={`relative w-full px-4 py-8 rounded-lg ${
        backgroundColor ? `bg-[${backgroundColor}]` : `bg-transparent`
      }`}
    >
      <SimpleContainer>
        <h3 className="text-lg font-semibold">{category}</h3>

        {videos.length > 4 && (
          <SimpleContainer>
            <SimpleLink href={`/watch/${category}`}>Ver mais</SimpleLink>

            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              className={`p-2 rounded-full transition ${
                isBeginning
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:bg-gray-700"
              }`}
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              className={`p-2 rounded-full transition ${
                isEnd
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:bg-gray-700"
              }`}
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </SimpleContainer>
        )}
      </SimpleContainer>

      <Swiper
        cssMode={true}
        navigation={false}
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        onSwiper={handleSwiper}
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id} className="!relative">
            <CardPlayer
              thumbnail={video.thumbnail}
              title={video.title}
              subTitle={video.subTitle}
              status={video.status}
              id={video.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoCarousel;
