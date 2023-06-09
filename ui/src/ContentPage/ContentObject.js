import Map from "../_App/Map.js";
import { NavLink, useParams } from "react-router-dom";

const ContentObject = ({ content }) => {
  return (
    <>
      {content && content.map((item) => {
        let attr = JSON.parse(item.tag_attributes);
        if (item.content_table == "headlines") {
          const Heading = `h${attr.deepness}`
          return <Heading key={attr.sort} className={attr.classname}>{attr.description}</Heading>
        }
        if (item.content_table == "links") {
          return <NavLink key={attr.sort} className={attr.classname} to={attr.url}>{attr.description}</NavLink>
        }
        if (item.content_table == "images") {
          return <img key={attr.sort} className={attr.classname} src={`${process.env.PUBLIC_URL}/images/${attr.uri}`} alt={attr.description} />
        }
        if (item.content_table == "textcontent") {
          const Texttype = `${attr.element}`
          return <Texttype key={attr.sort} className={attr.classname}>{attr.topic}</Texttype>
        }
        if (item.content_table == "maps") {
          return <Map key={attr.sort} attr={attr}></Map>
        }
        if (attr.closing == false) {
          return <div key={attr.sort} className={attr.classname}><ContentObject key={attr.sort}  content={item.children} /></div>
        }
      })
      }
    </>
  );
};

export default ContentObject;