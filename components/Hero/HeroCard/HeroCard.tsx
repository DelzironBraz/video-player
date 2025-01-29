/* eslint-disable @next/next/no-img-element */
"use client";

import { IVideoPlayer } from "@/@types/video.interface";
import Link from "next/link";
import React from "react";

interface HeroCardProps {
  video: IVideoPlayer;
}

const HeroCard: React.FC<HeroCardProps> = ({ video }) => {
  return (
    <div className="w-full h-[628px] lg:h-[768px]">
      <img
        src={video.thumbnail}
        alt={video.thumbnail}
        className="w-full h-full opacity-40"
      />

      <div className="w-full lg:w-1/2 h-full flex flex-col justify-start items-start gap-4 p-4 absolute top-0 left-0">
        <span className="text-gray-400 font-semibold text-sm">
          {video.subTitle}
        </span>
        <h2 className="font-semibold text-white text-4xl">{video.title}</h2>
        <p className="text-gray-400 font-semibold text-sm">
          {video.description}
        </p>
        <Link
          href={`/watch/${video.id}`}
          className="bg-white rounded-lg px-4 py-2 hover:bg-gray-200 text-black font-semibold text-sm"
        >
          Reproduzir agora
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
