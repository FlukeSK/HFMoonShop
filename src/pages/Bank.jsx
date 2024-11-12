// =============== < Import > =============== //
import bank from "../assets/BankCredit/bank.png";
import truewallet from "../assets/BankCredit/true.png";

import Footer from "../layouts/Footer";
// =============== < Function > =============== //
export default function Bank() {
  return (
    <div
      className=""
      style={{
        backgroundSize: "1600px 1200px",
        backgroundImage:
          "url(https://e1.pxfuel.com/desktop-wallpaper/855/573/desktop-wallpaper-night-sky-stars-falling-animated-video-backgrounds-stars-background.jpg)",
      }}
    >
      <div className=" flex flex-col justify-center items-center">
        <img
          className="mt-10 rounded-lg h-[500px] max-w-[700px]"
          src={bank}
          alt="image description"
        />
        <br />

        <img
          className="mt-10 rounded-lg h-[500px] max-w-[700px]"
          src={truewallet}
          alt="image description"
        />
        <br />
        <br />

      </div>
      <Footer />
    </div>
  );
}
