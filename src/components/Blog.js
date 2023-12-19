import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

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
        <article>
        <h4>{title}</h4>
        <time>{date}</time>
        <p>{content}</p>
        </article>
        </>
    )
}

export default Blog;