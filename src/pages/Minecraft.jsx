import McLogo from "../assets/Game/Mc_Logo.png";
import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";

export default function Minecraft() {
    return (
      <div>
      <div
        className=""
        style={{
          backgroundSize: "1600px 650px",
          backgroundImage:
            "url(https://e1.pxfuel.com/desktop-wallpaper/855/573/desktop-wallpaper-night-sky-stars-falling-animated-video-backgrounds-stars-background.jpg)",
        }}
      >
          {/* ========== Img ========== */}
          <div className="flex justify-center items-center hover:duration-700 hover:scale-110">
            <img
              className="h-auto max-w-full"
              src={McLogo}
              alt="image description"
            />
          </div>
          <br />
          <br />
          {/* ========== Footer ========== */}
          <div className=" flex justify-center items-center">
            <LogoCat />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
