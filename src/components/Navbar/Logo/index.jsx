import LogoImg from "../../../assets/TanitaBeer.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="w-60">
      <img className="w-full" src={LogoImg} alt="" />
    </Link>
  );
}
export default Logo;
