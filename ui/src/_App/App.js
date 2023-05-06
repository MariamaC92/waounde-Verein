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
    <div id="content">
      <div className="row">
        <div className="column"><h2>Überschrift</h2>
      <p>Ich bin der Teaser</p></div>
        <div className="column"> Waoundé ist eine Gemeinde von rund 15.000 Einwohnern in Nord-Ost Senegal.
        Die meisten Bewohner Waoundés gehören zum Volk der Soninké. Ihre Lebens- grundlage war über Generationen die Landwirtschaft, bis die Dürre der letzten Jahrzehnte es unmöglich machte, von der Landwirtschaft zu leben. Die jungen Männer gehen seither auf Arbeitssuche in die Hauptstadt oder, wenn sie die französische Staatsbürgerschaft haben, nach Europa. Eine Gruppe von Bürgern Waoundés lebt und arbeitet in München.</div>
      </div>
      <div className="row">
        <div className="column"><h2>Leaflet</h2>
      <p>Gemeinde Waoundés</p></div>
        <div className="column"> <Map/></div>
      </div>
      
    <Routes>
      <Route path="/">
        <Route index element={<Header />} />
        <Route path="/:side" element={<ContentPage />} />
      </Route>
      </Routes>
    </div>
    <Footer/>
  </>);
}
