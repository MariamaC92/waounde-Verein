import { ReactComponent as LogoHeader } from "./Images/Logo_header.svg";
import { ReactComponent as Ornament } from "./Images/Zierleiste.svg";

export default function Hero() {
  return (
    <div id="hero">
      <LogoHeader className="Logo" />
      <Ornament className="Ornament" />
    </div>
  );
}
