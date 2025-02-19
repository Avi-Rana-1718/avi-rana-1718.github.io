import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import TimelineList from "../components/TimelineList";
import DocumentMeta from 'react-document-meta';

export default function Index() {

   const [data, setData] = useState(null)

   useEffect(()=>{
      fetch("data.json").then(res=>res.json()).then(data=>{
         setData(data);
      });
   }, [])

   const meta = {
      title: "Avi Rana",
      description: "",
      meta: {
        charset: 'utf-8',
      }
  }

    return (
        <>
        <main className="p-4">
             <Nav />
                <p className="mt-10">
                Hello! My name is Avi Rana! I am computer science student. I try to make cool stuff in my freetime. I like web dev and am somewhat into gamedev.
                </p>
             <h5 className="text-3xl font-bold mt-10">Blogs</h5>
               <TimelineList data={data} />
             <h5 className="text-3xl font-bold mt-10">Projects</h5>
             <ul>
               <ListItem label="Byline" href="https://github.com/Avi-Rana-1718/Byline"/>
               <ListItem label="Friction" href="https://github.com/arnxv-gupta/Friction"/>
                <ListItem label="java-wordle" href="https://github.com/Avi-Rana-1718/java-wordle"/>
                <ListItem label="dishalearning" href="https://github.com/Avi-Rana-1718/dishalearning" />
                <ListItem label="Stranded" href="https://github.com/Avi-Rana-1718/Stranded" />
                <ListItem label="bad-flappybird" href="https://github.com/Avi-Rana-1718/bad-flappybird" />
             </ul>

             <h5 className="text-3xl font-bold mt-10 ">Contact me</h5>
             <ul>
                <ListItem label="github" href="https://github.com/Avi-Rana-1718" />
                <ListItem label="leetcode" href="https://leetcode.com/u/avirana3449/" />
                <ListItem label="linkedin" href="https://www.linkedin.com/in/avi-rana/" />
                <ListItem label="twitter" href="https://x.com/_AviRana" />
                <ListItem label="myanimelist" href="https://myanimelist.net/profile/_AviRana" />
             </ul>
        </main>
        </>
    )
}