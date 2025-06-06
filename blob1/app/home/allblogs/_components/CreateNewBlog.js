import Image from 'next/image';
function CreateNewBlog() {
    return ( 
        <div className='my-8'>
            <h1 className='w-[100%] p-2 bg-gray-200 text-gray-900 flex justify-between'><span>Create New Blog</span><span>View All</span></h1>
                    <div className='p-2 flex gap-3 overflow-x-scroll scroll-smooth w-full'>
            
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image1.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Template 01</h2>
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-200  min-w-[10vw] rounded-md' >
                        <Image src="/image3.png" className='w-full' alt="Blog Image" width={100} height={100} />
                        <h2 className='text-center  p-2 '>Create Blank</h2>
                    </div>
                    
                   
        </div>
        </div>
     );
}

export default CreateNewBlog;