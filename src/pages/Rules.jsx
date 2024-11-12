import Footer from "../layouts/Footer.jsx";
import LogoCat from "../layouts/LogoCat.jsx";

import { Link } from "react-router-dom";

// ========== Funtion ========== //
export default function Rules() {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundSize: "1600px 1200px",
          backgroundImage:
            "url(https://e1.pxfuel.com/desktop-wallpaper/855/573/desktop-wallpaper-night-sky-stars-falling-animated-video-backgrounds-stars-background.jpg)",
        }}
      >
        <div className="flex justify-center items-center">
          <h1 className=" hover:scale-125 hover:duration-700 mt-16 text-white font-bold">
            1.&nbsp;สินค้า ไอเทม เงิน ID ทุกอย่างที่ทางร้านขาย
            ล้วนเป็นการเล่นเองโดยไม่ได้ใช้โปรแกรมช่วยเล่นแต่อย่างใด
            <br />
            2.&nbsp;สินค้า ไอเทม เงิน ID ทุกอย่างที่ทางร้านขาย รับประกันตลอดชีพ
            หรือจนเกมปิด
            <br />
            หมายเหตุ ❗ หากลูกค้านำไปใช้เล่นโปรแกรมช่วยเล่น
            หรือเสียงต่อการโดนแบน ทางร้านจะไม่รับผิดชอบใด ๆ ทั้งสิ้น
            และจะถือว่าประกันขาดทันที
            <br />
            3.&nbsp;สินค้า ไอเทม เงิน ID ทุกอย่างที่ทางร้านขาย หากลูกค้านำไปแล้ว
            ของหาย ของบัค หรือไม่สามารถเข้า ID ได้
            หากเป็นความผิดของทางร้านจะรับผิดชอบทันที
            <br />
            4.&nbsp;กรณีลูกค้าฝากทางร้านฟาร์ม สามารถขอดูหลักฐานการฟาร์มได้ (
            ทางร้านจะอัดวีดีโอการฟาร์มไว้ให้ลูกค้าได้ตรวจสอบการฟาร์มอย่างขาวสะอาด
            )
            <br />
            5.&nbsp;ลูกค้าสามารถนำ ชื่อ เลขบัญชี และเบอร์โทร
            ของทีมงานทุกคนไปตรวจสอบในเว็บ Blacklistseller ได้เลยครับ
            ไม่มีการโกงแต่อย่างใด
          </h1>
        </div>
        <div className="flex  mt-8 justify-center items-center">
          <Link to={"https://www.blacklistseller.com/"}>
          <button className=" bg-green-600 hover:scale-105 hover:bg-red-600 p-2 rounded-lg text-white font-bold">
            BlacklistSeller
          </button>
          </Link>
        </div>
<br />

        {/* ========== ADMIN ========== */}
        <div className="flex p-4 justify-center items-center">
          <img
            className=" h-20rem max-w-full rounded-lg"
            src="https://media.discordapp.net/attachments/1266846403439886457/1300407188035993662/image.png?ex=6733d7d2&is=67328652&hm=97e6639a3ba2a34222ff97ec7bc8714c095c9de76c15ab38575fd0b78e007d7e&=&format=webp&quality=lossless&width=1176&height=660"
            alt="image description"
          />
        </div>

        {/*// ========== End ========== //*/}
        <br />
        <LogoCat />
      </div>

      <Footer />
    </div>
  );
}
