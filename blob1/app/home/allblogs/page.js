
import Image from 'next/image';
import CreateNewBlog from './_components/CreateNewBlog';
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
// import { use, useEffect } from 'react';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
// import html2png from 'html2png';
async function all() {

   
    return (  <div>
        <h1 className='w-[100%] p-2 bg-gray-200 text-gray-900 flex justify-between'><span>Recent Blogs</span><span>View All</span></h1>
        <div className='p-2 flex gap-3 overflow-x-scroll scroll-smooth w-full'>

        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
            <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
            <h2 className='text-center  p-2 '>Blog Title 1</h2>
        </div>
       
        </div>
        <CreateNewBlog/>
    </div>);
}


export default all;