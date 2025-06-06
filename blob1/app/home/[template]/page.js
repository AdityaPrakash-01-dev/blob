// import Card from "../_components/Card";
"use client";
import { use, useEffect, useState } from "react";
import MainContent from "../../_components/MainContent";
import axios from "axios";
import { useParams } from "next/navigation";
function Home1() {
  let [data,setData]=useState([]);
  let params=useParams();
  let id=params.template;

  useEffect(() => {
    console.log("Fetching blogs...");
    axios.get("http://localhost:8080/user/1/allblogs/"+id).then(
    (response) => {
      setData(response.data);
      console.log(response.data);
      // console.log(response.data[0].p1[0].heading);
    }
  ).catch(
    (error) => {
      console.error("Error fetching blogs:", error);
    }
  )
  }, []);
  
  return (
    <div className=" w-[100%] h-[100%] flex items-center justify-center flex-col">
      <MainContent data={data} />

      
    </div>
  );
}

export default Home1;
