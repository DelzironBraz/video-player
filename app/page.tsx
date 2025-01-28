import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-screen h-full flex flex-col justify-start items-center gap-4 mx-auto">
        <div className="max-w-[1366px] w-full flex flex-col justify-center gap-4"></div>
      </main>
      <Footer />
    </>
  );
}
