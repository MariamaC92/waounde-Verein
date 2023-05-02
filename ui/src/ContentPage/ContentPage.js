import { useEffect, useState } from "react"
import axios from "axios";

export default function ContentPage() {
 const [content, setContent] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/contentpage/")
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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