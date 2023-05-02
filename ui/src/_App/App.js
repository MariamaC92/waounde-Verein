import "./CSS/App.css"; 
import Header from "../Header/Header";
import MainNavigation from "../MainNavigation/MainNavigation";
import {Route, Routes} from "react-router-dom"
import Kontaktformular from "../Footer/Kontaktformular";


export default function App() {
  return (<>
  <MainNavigation /> 

 <Routes>
  <Route path="/" >
  <Route index element={<Header />} />
  <Route path="/hallo" element={<Header />} />
  <Route path="/kontakt" element={<Kontaktformular />} />

  </Route>
  
 </Routes>
  </>);
}
