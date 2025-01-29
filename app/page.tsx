import { IVideoPlayer } from "@/@types/video.interface";
import { getVideoPlayers } from "@/actions/video.action";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";
import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";
import { videosByCategory } from "@/utils/videos.helper";

export default async function Home() {
  const videos: IVideoPlayer[] = await getVideoPlayers();

  return (
    <>
      <Navigation />
      <main className="w-screen h-full flex flex-col justify-start items-center gap-4 mx-auto overflow-x-hidden mt-[60px]">
        <div className="max-w-[1366px] w-full flex flex-col justify-center gap-4">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
