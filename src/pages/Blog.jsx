import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";

export default function Blog() {
    const param = useParams();
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch("/data.json").then(res=>res.json()).then(data=>{
            data.forEach((el)=>{
                if(el.timestamp==Number(param.id)) {
                    setData(el)               
                }
            })
        })
    }, [])

    if(data==null) {
        return <h4>Loading!</h4>
    }


    return (
        <>
         <Helmet>
        <title>{data.title}</title>
        <meta name="title" content={data.title} />
        <meta name="description" content={data.byline} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.byline} />
        </Helmet>
        <Nav />
        <h3 className="text-2xl mt-10">{data.title}</h3>
        <span className="text-sm text-[#919090] block">{data.byline}</span>
        <time className="text-xs text-[#888]">{new Date(data.timestamp).getDate()+"th "+ (new Date(2024, new Date(data.timestamp).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(data.timestamp).getFullYear()}</time>
        <p className="mt-5" dangerouslySetInnerHTML={{__html: data.content}}></p>
        </>
    )
}