import { useEffect, useState } from "react"
import axios from "axios";

export default function ContentPage() {
 const [content, setContent] = useState();

 useEffect(() => {
    axios 
        .get("http://localhost:5000/contentpage/")
        .then ((response) => {setContent(response)}) 
        .catch((error) => {console.log(error)})

 },[]) 
console.log(content);
    return (<>
    <h1></h1>
    </>)
}