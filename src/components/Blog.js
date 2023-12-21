import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

function Blog(props) {

    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [content, setContent] = useState(null);

    const {id} = useParams();

useEffect(
    ()=>{
        fetch("/blogs/" + id + ".json").then(res=>res.json()).then(data=>{
            setTitle(data.title);
            setContent(data.content);
            setDate(Date(data.timestamp));

        })
    }
)

    return (
        <>
        <Link to="/"><i class="fa-solid fa-xmark md:absolute left-5 top-5 text-xl"></i></Link>
        <article className="">
        <h2 className="text-2xl">{title}</h2>
        <time>{date}</time>
        <hr className="my-3"/>
        <p dangerouslySetInnerHTML={{__html: content}}></p>
        </article>
        </>
    )
}

export default Blog;