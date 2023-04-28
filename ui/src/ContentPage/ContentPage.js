import { useEffect, useState } from "react"
import axios from "axios";

export default function ContentPage() {
 const [content, setContent] = useState();

 useEffect(() => {
    axios 
        .get("http://localhost:5000/contentpage/")
        .then ((response) => {setContent(response.data)}) 
        .catch((error) => {console.log(error)})

 },[]) 

    return (<>
    {content && <h1>{content.headline.headcription}</h1>}
    </>)
}