import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";
/* import { Link } from "react-router-dom"; */

export default function HomePage() {
  return (
    // ========== Start ========== //
    <div
      className=""
      style={{
        backgroundSize: "1600px 650px",
        backgroundImage:
          "url(https://e1.pxfuel.com/desktop-wallpaper/855/573/desktop-wallpaper-night-sky-stars-falling-animated-video-backgrounds-stars-background.jpg)",
      }}
    >
      <br />
      <LogoCat />
      {/* // ========== Funtion ========== // */}

  

      {/* // ========== End ========== // */}
      <Footer />
    </div>
  );
}
