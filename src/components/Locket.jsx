import Photo from "./Photo.jsx";
import { asset } from "../asset.js";

// The photos sit in the locket's two ovals; until they're added the
// painted roses in the artwork show through.
export default function Locket() {
  return (
    <div className="locket">
      <img className="locket__art" src={asset("assets/locket.png")} alt="" />
      <div className="locket__photo locket__photo--left">
        <Photo src={asset("assets/photo-1.jpg")} />
      </div>
      <div className="locket__photo locket__photo--right">
        <Photo src={asset("assets/photo-2.jpg")} />
      </div>
    </div>
  );
}
