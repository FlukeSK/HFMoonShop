{
  /*========= Import ===========*/
}
import { Link } from "react-router-dom";
import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";
{
  /*========= Funtion ===========*/
}
export default function Credit() {
  return (
    <div
      className=""
      style={{
        backgroundSize: "1600px 650px",
        backgroundImage:
          "url(https://e1.pxfuel.com/desktop-wallpaper/855/573/desktop-wallpaper-night-sky-stars-falling-animated-video-backgrounds-stars-background.jpg)",
      }}
    >
      <LogoCat />
      {/*========= Header ===========*/}
      <div className="flex p-2 justify-center items-center">
        <Link to="https://discord.gg/46cnRuf2TW">
          <img
            className=" h-60 max-w-full hover:scale-105 hover:duration-300"
            src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg"
            alt="image description"
          />
        </Link>
        <h1 className=" text-white font-bold">
          สามารถดูเครดิตได้ที่ Discord ทางร้านได้เลยครับ
        </h1>
      </div>
      {/*========= Footer ===========*/}
      <br />
      <Footer />
    </div>
  );
}
