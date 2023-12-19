import { useEffect, useState } from "react";

function Blog() {

    const [title, setTitle] = useState(null);

useEffect(
    ()=>{
        fetch("blogs.json").then(res=>res.json()).then(data=>{
            setTitle(data.posts[1].title);
        })
    }
)

    return (
        <>
        <h4>{title}</h4>
        </>
    )
}

export default Blog;