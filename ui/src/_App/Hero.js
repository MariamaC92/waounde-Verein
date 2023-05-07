import { ReactComponent as LogoHeader } from "./Images/LogoHeader2.svg";
import { ReactComponent as OrnamentOne } from "./Images/OrnamentOne.svg";
import { ReactComponent as OrnamentTwo } from "../_App/Images/OrnamentTwo.svg";


export default function Hero() {
  return (
    <div id="hero">
      <OrnamentOne className="OrnamentOne" />
      <LogoHeader className="Logo" />
      <OrnamentTwo className="OrnamentTwo" />
    </div>
  );
}
