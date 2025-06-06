import Image from "next/image";
import Hero from "./_components/Hero";
import RecentPosts from "./_components/RecentPosts";
import Card from "./_components/Card";
import MainContent from "./_components/MainContent";
import Home1 from "./home/page";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <RecentPosts></RecentPosts>
      <Card></Card>
      {/* <Home1/> */}
    </div>
  );
}
