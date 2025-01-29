"use client";

import { IVideoPlayer } from "@/@types/video.interface";
import {
  BookmarkSimple,
  ThumbsDown,
  ThumbsUp,
  TreeStructure,
} from "@phosphor-icons/react";
import { Button, Tooltip } from "antd";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  video: IVideoPlayer;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <section className="w-full h-full flex flex-col justify-start items-center gap-4">
      <ReactPlayer
        className="!h-[300px] lg:!h-[600px]"
        url={video.video}
        width="100%"
      />

      <div className="w-full flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-3 w-full lg:w-fit px-4 lg:py-4 lg:px-0">
          <h2 className="text-white font-semibold text-2xl">{video.title}</h2>
        </div>
        <div className="flex justify-between items-center w-full py-2">
          <div className="flex justify-center lg:justify-start items-center gap-3 w-full lg:w-fit p-4 lg:p-0">
            <span className="bg-[#757575] text-white font-medium text-xs rounded-lg p-1">
              {video.subTitle}
            </span>
            <span className="text-[#757575] font-medium text-xs rounded-lg p-1">
              {new Date().toLocaleString()}
            </span>
            <Button
              type="text"
              className="text-white py-2 px-3 hover:!bg-[#757575] text-base"
              icon={<BookmarkSimple size={20} weight="bold" />}
            >
              <span className="hidden lg:block">Adicionar à minha lista</span>
              <span className="block lg:hidden">Minha lista</span>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-3 w-full lg:w-fit p-4 lg:p-0">
            <Button
              type="text"
              className="text-white py-2 px-3 hover:!bg-[#757575] text-base"
              icon={<ThumbsUp size={20} weight="bold" />}
            >
              <span className="hidden lg:block">Gostei</span>
            </Button>
            <Button
              type="text"
              className="text-white py-2 px-3 hover:!bg-[#757575] text-base"
              icon={<ThumbsDown size={20} weight="bold" />}
            >
              <span className="hidden lg:block">Não é pra mim</span>
            </Button>
            <Tooltip title="Link copiado com sucesso">
              <Button
                type="text"
                className="text-white py-2 px-3 hover:!bg-[#757575] text-base"
                icon={<TreeStructure size={20} weight="bold" />}
              >
                Compartilhar
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
