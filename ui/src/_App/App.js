import "./CSS/App.css"; 
import Header from "../Header/Header";
import MainNavigation from "../MainNavigation/MainNavigation";
import {Route, Routes} from "react-router-dom"
import Kontaktformular from "../Footer/Kontaktformular";
import ContentPage from "../ContentPage/ContentPage";
import Footer from "../Footer/Footer.js";
import Hero from "./Hero.js";
import Map from "./Map.js"

export default function App() {
  return (<>
    <Hero />
    <MainNavigation /> 
    <Routes>
      <Route path="/">
        <Route index element={<Header />} />
        <Route path="/:side" element={<ContentPage />} />
      </Route>
      </Routes>
    <Footer/>
  </>);
}
