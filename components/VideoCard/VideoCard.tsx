"use client";

import { SimpleContainer } from "@/templates/container.template";
import { SimpleLink } from "@/templates/link.template";
import { Headphones, Play, Queue } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

interface IVideoCard {
  thumbnail: string;
  title: string;
  subTitle: string;
  id?: string;
  status: string;
}

const VideoCard: React.FC<IVideoCard> = ({
  thumbnail,
  title,
  subTitle,
  id,
  status,
}) => {
  return (
    <SimpleContainer className={`w-[290px] h-[248px]`}>
      <SimpleLink
        href={`/watch/${id}`}
        className="!no-underline flex flex-col justify-start !items-start gap-2 p-2 w-full relative"
      >
        <Image
          className="w-full h-full rounded-md"
          src={thumbnail}
          alt={title}
          width={290}
          height={164}
          loading="lazy"
        />
        <span className="text-[#868686] text-xs">{subTitle}</span>
        <h4 className="font-semibold text-sm">{title}</h4>
        {status === "music" ? (
          <Headphones
            size={20}
            weight="bold"
            className="absolute top-[20px] right-[15px]"
          />
        ) : status === "default" ? (
          <Play
            size={20}
            weight="bold"
            className="absolute top-[20px] right-[15px]"
          />
        ) : status === "playlist" ? (
          <Queue
            size={20}
            weight="bold"
            className="absolute top-[20px] right-[15px]"
          />
        ) : status === "live" ? (
          <span className="bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded-xl absolute top-[20px] left-[15px]">
            Ao vivo
          </span>
        ) : (
          status === "soon" && (
            <span className="bg-[#8a8a8a] text-white text-xs font-semibold py-1 px-2 rounded-xl absolute top-[20px] left-[15px]">
              Em breve
            </span>
          )
        )}
      </SimpleLink>
    </SimpleContainer>
  );
};

export default VideoCard;
