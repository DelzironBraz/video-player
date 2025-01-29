import { IVideoPlayer } from "@/@types/video.interface";

export const videosByCategory = (videos: IVideoPlayer[]) => {
  return videos.reduce<Record<string, IVideoPlayer[]>>((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});
};
