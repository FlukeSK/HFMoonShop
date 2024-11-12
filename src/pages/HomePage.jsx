import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";
import { Link } from "react-router-dom";

import HayDay from "../assets/Game/HayDay_logo.png";
import Arena from "../assets/Game/Arena_logo.png";
import Credit from "../assets/Game/credit_logo.png";

function HomePage() {
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
      {/* // ========== IMG ========== // */}
      <div className="flex justify-center p-16 space-x-12 ">
        <div className="rounded-xl hover:scale-110 duration-200">
          <Link to="/hayday">
            <img
              className=" rounded-t-md h-auto w-[10rem]"
              src={HayDay}
              alt="image description"
            />

            <button className="flex mt-1 justify-center items-center text-white font-bold w-full ">
              HayDay
            </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 2 ========== // */}
        <div className="rounded-xl hover:scale-110 duration-200">
          <Link to="/arena">
            <img
              className=" rounded-t-md h-auto w-[20rem]"
              src={Arena}
              alt="ArenaImg"
            />

            <button className="flex justify-center items-center text-white font-bold w-full">
              Arena Breakout Infinite
            </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 3 ========== // */}
        <div className=" rounded-xl hover:scale-110 duration-200">
          <Link to="/credit">
            <img
              className="ml-4 rounded-t-md h-auto w-[8rem]"
              src={Credit}
              alt="image description"
            />

            <button className=" flex mb-1 justify-center items-center text-white font-bold w-full">
              Credit
            </button>
          </Link>
        </div>
      </div>
      <br />

      {/* // ========== End ========== // */}
      <Footer />
    </div>
  );
}
export default HomePage;
