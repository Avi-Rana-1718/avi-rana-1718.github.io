import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
    const param = useParams();
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        fetch("/data.json").then(res=>res.json()).then(data=>{
            data.forEach((el)=>{
                if(el.title.replace(/[^A-Z0-9]/ig, "").toLowerCase()==param.id) {
                    setData(el)               
                }
            })
        })
    }, [])

    if(data==null) {
        return <h4>Loading!</h4>
    }

    return (
        <main className="p-3 md:p-4">
        <header className="flex justify-between">
            <div>
            <h3 className="text-3xl mt-4 font-semibold">{data.title}</h3>
            <span className="text-sm text-[#919090] mt-2 block">{data.byline}</span>
            <time className="text-xs block mt-2 text-[#888]">{new Date(data.timestamp).getDate()+"th "+ (new Date(2024, new Date(data.timestamp).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(data.timestamp).getFullYear()}</time>
            </div>
            <div className="flex flex-col justify-between">
            <span className="mt-4 text-2xl mx-auto text-gray-500 hover:text-gray-600"><Link to="/"><FontAwesomeIcon icon={faCircleXmark} /></Link></span>
            {/* <ShareBtn /> */}
            </div>
        </header>
        <img className="w-full my-6 rounded mx-auto" src={data.thumbnail} />
        <p className="mt-5" dangerouslySetInnerHTML={{__html: data.content}}></p>
        </main>
    )
}