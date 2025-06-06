"use client";

import Image from 'next/image';
import CreateNewBlog from '../_components/CreateNewBlog';
import { useState, useEffect } from 'react';

// Link Preview Card Component
function LinkPreviewCard({ url, title = "Blog Post" }) {
  const [preview, setPreview] = useState({
    imageUrl: "/image1.png",
    loading: true
  });

  useEffect(() => {
    const fetchScreenshot = async () => {
      try {
        const response = await fetch(`/api/screenshot?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.success) {
          setPreview({
            imageUrl: data.imageUrl,
            loading: false
          });
        } else {
          console.error("Screenshot error:", data.error);
          setPreview({
            imageUrl: "/image1.png",
            loading: false
          });
        }
      } catch (error) {
        console.error("Failed to fetch screenshot:", error);
        setPreview({
          imageUrl: "/image1.png",
          loading: false
        });
      }
    };
    
    fetchScreenshot();
  }, [url]);

  return (
    <div className='flex flex-col gap-2 bg-gray-200 min-w-[10vw] rounded-md'>
      {preview.loading ? (
        <div className="w-full h-[100px] bg-gray-300 animate-pulse" />
      ) : (
        <Image 
          src={preview.imageUrl} 
          className='w-full' 
          alt={`Preview of ${title}`}
          width={100} 
          height={100} 
        />
      )}
      <h2 className='text-center p-2'>{title}</h2>
    </div>
  );
}

// Sample website data
const websites = [
  { url: "https://nextjs.org", title: "Next.js Docs" },
  { url: "https://reactjs.org", title: "React Documentation" },
  { url: "https://github.com", title: "GitHub" },
  { url: "https://stackoverflow.com", title: "Stack Overflow" },
  { url: "https://dev.to", title: "DEV Community" },
  { url: "https://tailwindcss.com", title: "Tailwind CSS" },
  { url: "https://vercel.com", title: "Vercel Platform" },
  { url: "https://nodejs.org", title: "Node.js" },
  { url: "https://css-tricks.com", title: "CSS Tricks" },
  { url: "https://medium.com", title: "Medium" },
];

export default function AllBlogs() {
  return (
    <div>
      <h1 className='w-[100%] p-2 bg-gray-200 text-gray-900 flex justify-between'>
        <span>Recent Blogs</span>
        <span>View All</span>
      </h1>
      <div className='p-2 flex gap-3 overflow-x-scroll scroll-smooth w-full'>
        {websites.map((site, index) => (
          <LinkPreviewCard 
            key={index} 
            url={site.url} 
            title={site.title} 
          />
        ))}
      </div>
      {/* <CreateNewBlog/> */}
    </div>
  );
}