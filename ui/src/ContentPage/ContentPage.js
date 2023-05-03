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
        setContent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [side]);
  console.log(content);
  return (
    <>
      {content &&
      content.headline.map((item) => {
        const Heading = `h${item.deepness}`
        return <Heading>{item.headcription}</Heading>
      }) }
      {/* Lukas alleine */}
      {/*    {content && <p>{content.textcontent.topic}</p>} */}
    </>
  );
}

