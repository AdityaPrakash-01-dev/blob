import Image from "next/image";

function MainContent() {
    return (  
        <div className="w-[60%] flex items-center justify-center flex-col my-4 mx-auto border-1 p-5 py-15">
            <div className="w-[80%]">

            <div className="flex flex-col mx-auto">

            <p>Mar 1,2023 . 2 min read</p>
            <p className="text-3xl font-bold">
                App & Down: 5 Apps to Help You Meditate
            </p>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
            </div>

            <div className="border-[10px] border-gray-300 my-4 flex justify-center items-center">
                <Image src="/image1.png" className="w-[50%] object-cover" alt="img" width={100} height={150} />
            </div>
            <div>
                <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. 

            </p>
            </div>
            <div>
                <p className="text-xl font-bold my-4">
                    Design with Ease
                </p>
                <em>
                    “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” 
                </em>
                <p>
                    Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.   
                </p>
            </div>
            <div>
                <p className="text-xl font-bold my-4">
                    Design with Ease
                </p>
                <em>
                    “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” 
                </em>
                <p>
                    Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.   
                </p>
            </div>
            <div>
                <p className="text-xl font-bold my-4">
                    Design with Ease
                </p>
                <em>
                    “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” 
                </em>
                <p>
                    Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.   
                </p>
            </div>
            <hr className="mt-10"/> 
            <div className="flex gap-4 my-3">
                <Image src="/image.png" className="w-[30px] h-[30px] rounded-full" alt="img" width={80} height={100} />
                <Image src="/image.png" className="w-[30px] h-[30px] rounded-full" alt="img" width={80} height={100} />
                <Image src="/image.png" className="w-[30px] h-[30px] rounded-full" alt="img" width={80} height={100} />
                <Image src="/image.png" className="w-[30px] h-[30px] rounded-full" alt="img" width={80} height={100} />

{/* <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
</svg> */}

            </div>
            <hr/>
                <p className="mt-2"> 0 Comments</p>
            </div>
        </div>
    );
}

export default MainContent;