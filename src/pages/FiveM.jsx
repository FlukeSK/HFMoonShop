import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";

import FiveMs from "../assets/Game/FiveM_Logo.png";

// =============== < Function > =============== //
export default function FiveM() {
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
        {/* ========== Header ========== */}
        <div className="flex p-10 justify-center items-center hover:duration-700 hover:scale-110">
          <img
            className=" h-64 max-w-full"
            src={FiveMs}
            alt="image description"
          />
        </div>
        <br />
        <br />

<div className="flex justify-center items-center">
        {/* ========== Nomyen ========== */}
        <div className="flex p-10 justify-center items-center hover:duration-700 hover:scale-110">
          <img
            className=" h-64 max-w-full"
            src="https://media.discordapp.net/attachments/1252345602906390651/1267126118373130412/CMS280567_1.png?ex=67340e68&is=6732bce8&hm=8358472c5fdeb63dc304bcc2f4798ec91452f205ce7930b2db3cbcad63a52233&=&format=webp&quality=lossless&width=437&height=437"
            alt="image description"
          />
        </div>
        
        {/* ========== BlueTown ========== */}
        <div className="flex p-10 justify-center items-center hover:duration-700 hover:scale-110">
          <img
            className=" h-64 max-w-full"
            src="https://media.discordapp.net/attachments/1064514376981286973/1270015243774333040/2000X2000-PNG.png?ex=6734051d&is=6732b39d&hm=add686eb5ed25170dfd8a67ad151c4e6c2c58a6e186b0e88bad53298a67a1664&=&format=webp&quality=lossless&width=662&height=662"
            alt="image description"
          />
        </div>

        {/* ========== Around ========== */}
        <div className="flex p-10 justify-center items-center hover:duration-700 hover:scale-110">
          <img
            className=" h-64 max-w-full"
            src="https://media.discordapp.net/attachments/1262465109687664685/1303546224401715200/AroundLogo.png?ex=67340e86&is=6732bd06&hm=0e956f6510e57fa406a9e793843b0c291e75cf7d57ab35ae023b43816d63463b&=&format=webp&quality=lossless&width=640&height=640"
            alt="image description"
          />
        </div>

        </div>
        {/* ========== Footer ========== */}
        <div className=" flex justify-center items-center">
          <LogoCat />
        </div>
        <Footer />
      </div>
    </div>
  );
}
