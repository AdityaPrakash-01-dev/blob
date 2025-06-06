"use client";
import axios from "axios";
import { all } from "axios";
import Image from "next/image";
import { useState,useRef,useEffect } from "react";
import { useParams } from "next/navigation";
// import { parse } from "next/dist/build/swc/generated-native";
function addBlog() {
    let params= useParams();
    let [id,setId]=useState(params.template);
    let [messsage, setMessage] = useState("Add your blog content here");
    let [allDetails, setAllDetails] = useState({
        heading1:"Add this to your blog",
        p1:[{
            heading: "This is the subheading",
            description: "This is the content of the blog that you can edit and add more details to it."
        },{
            heading: "This is the second subheading",
            description: "This is the content of the second blog that you can edit and add more details to it."
        }]
    });
 let [data,setData]=useState([]);

  useEffect(() => {
    console.log("Fetching blogs...");
    axios.get("http://localhost:8080/user/1/allblogs/"+id).then(
    (response) => {
        setAllDetails({
            heading1: response.data.heading,
            p1: response.data.p1.map(item => ({
                heading: item.heading,
                description: item.description
            }))
        })
    //   setData(response.data);
      console.log(response.data);
    //   console.log(response.data[0].p1[0].heading);
    }
  ).catch(
    (error) => {
      console.error("Error fetching blogs:", error);
    }
  )
  }, []);
    let buttonHandler=()=>{
        axios.post("http://localhost:8080/user/1/updateblog", {
            id:parseInt(id, 10)+1   ,
            heading: allDetails.heading1,
            p1: allDetails.p1
        }).then((response) => {
            console.log("Blog added successfully:", response.data);
        }).catch((error) => {
            console.error("Error adding blog:", error);
        });
    }

    const editableRef = useRef(null);
    const handleContentChange = (e) => {
        const newContent = e.currentTarget.textContent;
        if(e.target.getAttribute("name") === "heading" || e.target.getAttribute("name") === "description") {
            let idx=e.target.getAttribute("key1");
            console.log("Index:", idx);
            idx = parseInt(idx, 10); 
            let updatedOtherHeadings = [...allDetails.p1];
            if (e.target.getAttribute("name") === "heading") {
                updatedOtherHeadings[idx].heading = newContent;
            } else if (e.target.getAttribute("name") === "description") {
                updatedOtherHeadings[idx].description= newContent;
            }
            setAllDetails({...allDetails, p1: updatedOtherHeadings });
        }else{

            setAllDetails({...allDetails, [e.target.getAttribute("name")]: newContent });
        }
     
        console.log(allDetails);
    };
     const handleBlur = () => {
        if (editableRef.current) {
            setMessage(editableRef.current.textContent);
            console.log(messsage)
        }
    };
    return ( 
        <>
        
         <div className="w-[60%] relative flex items-center justify-center flex-col my-4 mx-auto border-1 p-5 py-15">
            <button className="text-white bg-purple-500 absolute p-2 top-0 right-0 z-10" onClick={buttonHandler}>Publish</button>
                    <div className="w-[80%]">
        
                    <div className="flex flex-col mx-auto">
        
                    <p>Mar 1,2023 . 2 min read</p>
                    <p className="text-3xl font-bold">
                        <h1 contentEditable="true"  onBlur={handleContentChange}
                    suppressContentEditableWarning={true}
                    name="heading1"
                   className="text-3xl font-bold text-start my-4"
                   
               >{allDetails.heading1?allDetails.heading1:"loading" }</h1>
                     
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
                    {
                        allDetails && allDetails.p1 ? 
                        allDetails.p1.map((item,idx)=>{
        
                       return     <div key={idx}>
                        <p className="text-xl font-bold my-4"
                           
                    contentEditable="true"  onBlur={handleContentChange}    
                    name="heading" key1={idx}
                    suppressContentEditableWarning={true}
                        >
                        {allDetails.p1[idx].heading}
                        </p>
                        <em>
                            “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” 
                        </em>
                        <p
                        name="description" key1={0} suppressContentEditableWarning={true} contentEditable="true"  onBlur={handleContentChange}
                        >
                            {allDetails.p1[idx].description}
                            {/* {data[0].p1.description} */}
                            </p>
                    </div>
                        }
                    ):<p>Loading...</p>


                    }



                
                    {/* <div>
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
                    </div> */}
                    </div>
                    <hr className="te"></hr>
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
        </>
     );
}

export default addBlog;