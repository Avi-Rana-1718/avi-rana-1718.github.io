import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

import "./Blog.css";

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
        <Link to="/"><i id="cross" class="fa-solid fa-xmark"></i></Link>
        <article>
        <h2>{title}</h2>
        <time>{date}</time>
        <hr />
        <p>{content}</p>
        </article>
        </>
    )
}

export default Blog;