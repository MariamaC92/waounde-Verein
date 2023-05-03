import "./CSS/App.css"; 
import Header from "../Header/Header";
import MainNavigation from "../MainNavigation/MainNavigation";
import {Route, Routes} from "react-router-dom"
import Kontaktformular from "../Footer/Kontaktformular";
import ContentPage from "../ContentPage/ContentPage";
import Footer from "../Footer/Footer.js";




export default function App() {
  return (<>
  <MainNavigation /> 

 <Routes>
  <Route path="/" >
  <Route index element={<Header />} />
  <Route path="/kontakt" element={<Kontaktformular />} />
  <Route path="/:side" element={<ContentPage />} />
 
  
  </Route>
  
 </Routes>

  <Footer/>
  </>);
}
