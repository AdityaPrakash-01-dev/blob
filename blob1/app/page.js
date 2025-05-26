import Image from "next/image";
import Hero from "./_components/Hero";
import RecentPosts from "./_components/RecentPosts";
import Card from "./_components/Card";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <RecentPosts></RecentPosts>
      <Card></Card>
    </div>
  );
}
