import { MainContainer, MaxContainer } from "@/templates/container.template";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainContainer>
      <MaxContainer className="h-screen">
        <h2 className="text-2xl font-semibold">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </MaxContainer>
    </MainContainer>
  );
}
