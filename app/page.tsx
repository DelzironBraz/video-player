import { IVideoPlayer } from "@/@types/video.interface";
import { getVideoPlayers } from "@/actions/video.action";
import Hero from "@/components/Hero/Hero";
import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";
import { MainContainer, MaxContainer } from "@/templates/container.template";
import { videosByCategory } from "@/utils/videos.helper";

export default async function Home() {
  const videos: IVideoPlayer[] = await getVideoPlayers();

  return (
    <MainContainer>
      <MaxContainer>
        <Hero videos={videos.slice(0, 5)} />

        {Object.entries(videosByCategory(videos)).map(
          ([category, videos], index) => (
            <VideoCarousel
              key={category}
              videos={videos}
              category={category}
              backgroundColor={index % 2 !== 0 ? "#131313" : undefined}
            />
          )
        )}
      </MaxContainer>
    </MainContainer>
  );
}
