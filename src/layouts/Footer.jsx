import "../index.css";
import { Link } from "react-router-dom";

// =============== < Function > =============== //
export default function Footer() {
  return (
    <footer className="footer p-4 bg-neutral text-neutral-content bg-gray-800 flex justify-center">
      <div className="flex justify-center items-center text-white font-bold">
      <Link to="https://discord.gg/46cnRuf2TW">
          <button className=" flex justify-center items-center text-white font-bold w-full">
          ☀️ Discord
          </button>
        </Link>
      </div>
      <p className=" text-white font-bold">
        &nbsp;&nbsp;&nbsp;———————————————————————————&nbsp;&nbsp;&nbsp;
      </p>
      <div className="flex justify-center items-center text-white font-bold">
        <Link to="https://www.facebook.com/sanhanat.kaewjinda/">
          <button className=" flex justify-center items-center text-white font-bold w-full">
            Facebook ☀️
          </button>
        </Link>
      </div>
    </footer>
  );
}
