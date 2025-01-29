import { IVideoPlayer } from "@/@types/video.interface";
import { getVideoPlayerById, getVideoPlayers } from "@/actions/video.action";
import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import VideoPlayerContent from "@/components/VideoPlayerContent/VideoPlayerContent";
import { MainContainer, MaxContainer } from "@/templates/container.template";

export default async function Watch({ params }: { params: { id: string } }) {
  const video: IVideoPlayer = await getVideoPlayerById(params.id);
  const videos: IVideoPlayer[] = await getVideoPlayers();

  return (
    <MainContainer>
      <MaxContainer>
        <VideoPlayer video={video} />
        <VideoPlayerContent video={video} />
        <VideoCarousel videos={videos} category="Conteúdos relacionados" />
      </MaxContainer>
    </MainContainer>
  );
}
