import Image from "next/image";
import Hero from "./_components/Hero";
import RecentPosts from "./_components/RecentPosts";
import Card from "./_components/Card";
import Banner from "./_components/Banner";
import Banner2 from "./_components/Banner2";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentPosts />
      <Card />
      <Card />
      <Banner />
      <Banner2 />
      
    </div>
  );
}
