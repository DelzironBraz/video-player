"use client";

import { IVideoPlayer } from "@/@types/video.interface";
import { SimpleContainer } from "@/templates/container.template";
import {
  CloudArrowDown,
  DotsThreeOutline,
  Play,
  SpotifyLogo,
} from "@phosphor-icons/react";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

interface VideoPlayerContentProps {
  video: IVideoPlayer;
}

const VideoPlayerContent: React.FC<VideoPlayerContentProps> = ({ video }) => {
  return (
    <section className="w-full flex flex-col justify-start items-start gap-3 px-4 lg:p-0">
      <SimpleContainer
        $flexDirection="column"
        $justifyContent="flex-start"
        $alignItems="start"
        className="w-full"
      >
        <h4 className="text-gray-500 font-semibold text-xl pb-4">Resumo</h4>
        <p className="text-gray-500 font-medium">{video.description}</p>
      </SimpleContainer>
      <SimpleContainer
        $flexDirection="column"
        $justifyContent="flex-start"
        $alignItems="start"
        className="w-full"
      >
        <h4 className="text-2xl font-semibold text-gray-400 py-4">
          Como fazer upload
        </h4>
        <p className="text-gray-500 font-medium">{video.description}</p>
      </SimpleContainer>
      <SimpleContainer
        $flexDirection="column"
        $alignItems="start"
        className="!gap-6 w-full"
      >
        <h5 className="text-gray-500 font-semibold text-xl pt-4">
          Arquivos complementares
        </h5>
        <Button
          color="default"
          variant="outlined"
          icon={<CloudArrowDown size={20} weight="bold" />}
          iconPosition="end"
          className="bg-transparent text-white hover:!text-black text-lg p-5"
        >
          arquivo-do-curso-aula-3.pdf
        </Button>
        <Button
          color="default"
          variant="outlined"
          icon={<CloudArrowDown size={20} weight="bold" />}
          iconPosition="end"
          className="bg-transparent text-white hover:!text-black text-lg p-5"
        >
          Phototipinho top
        </Button>
      </SimpleContainer>
      <SimpleContainer
        $flexDirection="column"
        $alignItems="start"
        className="w-full"
      >
        <h5 className="text-gray-500 font-semibold text-xl py-4">Texto</h5>
        <p className="text-gray-500 font-medium">{video.description}</p>
      </SimpleContainer>
      <SimpleContainer
        $flexDirection="column"
        $alignItems="start"
        className="w-full !hidden lg:!flex"
      >
        <h5 className="text-gray-500 font-semibold text-xl py-4">Aúdio</h5>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 bg-[#8c6e7d] rounded-lg p-3">
          <div className="flex justify-start items-center gap-3">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={78}
              height={78}
              className="rounded-lg"
            />

            <SimpleContainer
              $flexDirection="column"
              $alignItems="start"
              className="!gap-1"
            >
              <h6 className="text-sm font-semibold text-white">
                {video.title}
              </h6>
              <span className="text-xs text-thin white">{video.subTitle}</span>
              <span className="text-[9px] uppercase text-black font-semibold p-1 rounded-md bg-gray-300">
                preview
              </span>
            </SimpleContainer>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-end items-end pr-1">
              <SpotifyLogo size={20} weight="bold" />
            </div>

            <div className="flex justify-end items-end gap-4">
              <Button
                type="text"
                icon={
                  <DotsThreeOutline
                    size={14}
                    weight="bold"
                    className="!text-white"
                  />
                }
              />
              <Button
                type="text"
                shape="circle"
                className="bg-white hover:!bg-gray-200"
                icon={<Play size={20} weight="bold" className="" />}
              />
            </div>
          </div>
        </div>
      </SimpleContainer>
    </section>
  );
};

export default VideoPlayerContent;
