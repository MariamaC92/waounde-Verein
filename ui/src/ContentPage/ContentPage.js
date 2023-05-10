import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Map from "../_App/Map";
import "./CSS/contentPage.css";
import ContentObject from "./ContentObject";


export default function ContentPage() {
  const [content, setContent] = useState();
  const{side} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/contentpage/${side}`)
      .then((response) => {
        var root = { children: [] }
        var current = root;
        var parents = [root];

        response.data.rows.forEach((Item) => {
          let attr = JSON.parse(Item.tag_attributes);
          if (attr.closing == false) {
            current.children.push(Item);
            parents.push(current);
            current = current.children[current.children.length - 1];
          }
          if (attr.closing == true) {
            current = parents.pop();
          }
          if (attr.closing === undefined) {
            current.children.push(Item);
          }
          if (!current.children) current.children = [];
        })
        setContent(root.children);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [side]);
  return (
    <>
      {content && <ContentObject content={content} />} 
    </>
  );
}

