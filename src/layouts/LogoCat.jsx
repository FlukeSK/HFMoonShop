import LOGO from "../assets/Game/Moon_LOGO.png";

// =============== < Function > =============== //
export default function LogoCat() {
  return (
    <div className=" flex justify-center items-center">
      <img
        className=" ml-16 h-auto w-[24rem] p-1 hover:scale-125 hover:-rotate-12 duration-500"
        src={LOGO}
        alt="image description"
      />
    </div>
  );
}
