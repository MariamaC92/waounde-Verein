import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
          if (item.content_table == "headlines") {
            let attr = JSON.parse(item.tag_attributes); 
            const Heading = `h${attr.deepness}`
            return <Heading>{attr.description}</Heading>
          }
      }) }
    </>
  );
}

