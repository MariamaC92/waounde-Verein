import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Map from "../_App/Map";


export default function ContentPage() {
  const [content, setContent] = useState();
  const{side} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/contentpage/${side}`)
      .then((response) => {
        setContent(response.data.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [side]);
  return (
    <>
      {content &&
        content.map((item) => {
          let attr = JSON.parse(item.tag_attributes); 
          if (item.content_table == "headlines") {
            const Heading = `h${attr.deepness}`
            return <Heading className= {attr.classname}>{attr.description}</Heading>
          }
          if (item.content_table == "links") {
            return <NavLink className={attr.classname} to={attr.url}>{attr.description}</NavLink>
          }
          if (item.content_table == "images") {
            return <img className={attr.classname} src={`${process.env.PUBLIC_URL}/images/${attr.uri}`}alt={attr.description} />
          }
          if (item.content_table == "textcontent") {
            const Texttype = `${attr.element}`
            return <Texttype className={attr.classname}>{attr.topic}</Texttype> 
          }
          if (item.content_table == "maps") {
            return <Map attr={attr} />
          }
      }) }
    </>
  );
}

