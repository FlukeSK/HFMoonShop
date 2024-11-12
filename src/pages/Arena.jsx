import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";
//import { useContext } from "react";//
//import { DateContext } from "../features/auth/contexts/DateContext";\\

import { Link } from "react-router-dom";
import ArenaLogo from "../assets/Game/Arena_logo.png";

export default function Arena() {
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
      {/* ========== Img ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-[400px] max-w-[600px] hover:duration-700 hover:scale-110"
          src={ArenaLogo}
          alt="image description"
        />
      </div>
      {/* ========== Funtion 01 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1299037802700472381/image.png?ex=673379bb&is=6732283b&hm=9261a6778750f66c33a8b947ceab5ea826ee371d93d1dfcb5722233d64abd340&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID01"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 001 — เวล 21 Rank Rookie 3</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_1" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 4.1 M | คลัง 6 M
                    <br />
                    • เซฟ 2 ช่อง เหลือ 13+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • Bundle Coupon 3 กล่อง | Card Elite 3 วัน
                    <br />• กุญแจ 201 15ดอก | กุญแจ StaWarehouse 24ดอก | กุญแจ
                    Barn Office 15 ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 02 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1299816044810211328/image.png?ex=6733ab86&is=67325a06&hm=3e0e0db9a7d24aeb744b0f9ef05359ce9162e58c16207f89603c2297ec3b483f&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID02"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 002 — เวล 20 Rank Rookie 3</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_2" className="modal2 rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 4.5 M | คลัง 6 M | Market 79k
                    <br />
                    • เซฟ 2 ช่อง เหลือ 5+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • Card Elite 3 วัน
                    <br />• กุญแจ Main Bedroom 12ดอก | กุญแจ Barnoffice 12ดอก |
                    กุญแจ House 20 ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 03 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1301828774572064819/image.png?ex=6733bdc6&is=67326c46&hm=34455bd101ecef1ce7aa85593bfb685fe745d73b0f8960caa8979326bb6558bf&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID03"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 003 — เวล 23 Rank Vanguard 3</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_3" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 5 M | คลัง 9 M
                    <br />
                    • เซฟ 2 ช่อง เหลือ 13+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • ของทอง 7 ชิ้น | ของม่วง 2 ชิ้น
                    <br />
                    • Bundle Coupon 11 กล่อง | Card Elite 6 วัน
                    <br />• กุญแจ Recycling Office Key 49 ดอก | กุญแจทอง Factory
                    File Room Key 15 ดอก | กุญแจทอง Barn Office 12 ดอก |
                    กุญแจทอง 201 8 ดอก | กุญแจทอง Main Bedroom 9 ดอก | กุญแจผี 1
                    ดอก 43+วัน
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 04 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1301946776818942032/image.png?ex=673382ec&is=6732316c&hm=2da4f744eb7460f4982a192932779a12065c8577fe56093c9706075b68e35914&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID04"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 004 — เวล 21 Rank Rookie 3</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_4" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 4.7 M | คลัง 7 M | Market 140k+
                    <br />
                    • เซฟ 2 ช่อง เหลือ 6+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • ของทอง 5 ชิ้น | ของม่วง 5 ชิ้น
                    <br />
                    • Bundle Coupon 9 กล่อง | Card Elite 6 วัน
                    <br />• กุญแจ StaWarehouse 19ดอก | กุญแจ Barn office 6 ดอก |
                    กุญแจ 201 10 ดอก | กุญแจผี 1 ดอก 41วัน+
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 05 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1302347609238802483/image.png?ex=6733a6ba&is=6732553a&hm=58a14ce11c21be96800d28f83ae1a77470f4f2c4f9fef5eec56499150828c9a7&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID05"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 005 — เวล 19 Rank Rookie 3</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_5" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 4.2 M | คลัง 6 M | Market 131k+
                    <br />
                    • เซฟ 2 ช่อง เหลือ 6+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • ของทอง 3 ชิ้น
                    <br />
                    • Bundle Coupon 7 กล่อง | Card Elite 6 วัน
                    <br />• กุญแจ StaWarehouse 19ดอก | กุญแจ Barn office 9 ดอก |
                    กุญแจ Main Bedroom 12 ดอก | กุญแจ Cabin Cafeteria 15 ดอก |
                    กุญแจผี 1 ดอก 40วัน+
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 06 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1303797491573063680/image.png?ex=6733a709&is=67325589&hm=5c076afbd940609f32fea41adc180d3f16d29a1359365a51445da7eb68ef3922&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID06"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 006 — เวล 21 Rank Vanguard 3</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_6").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_6" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 7.1 M | คลัง 10 M | Market 133k+
                    <br />
                    • เซฟ 2 ช่อง เหลือ 13+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • ของทอง 5 ชิ้น
                    <br />
                    • Bundle Coupon 15 กล่อง | Card Elite 3 วัน
                    <br />• กุญแจ StaWarehouse 13 ดอก | กุญแจ Barn office 11 ดอก
                    | กุญแจ Main Bedroom 9 ดอก | กุญแจผี 1 ดอก 37วัน+
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 07 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1305196993806602291/image.png?ex=6733786c&is=673226ec&hm=7943675a29f27ae9b149f533cf3afaf0b0eee1fc31cb4b1fc27d5a8484f655d2&=&format=webp&quality=lossless&width=1181&height=662"
              alt="ID07"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 007 — เวล 23 Rank Vanguard 2</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_7").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_7" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 6.6 M | คลัง 8 M
                    <br />
                    • เซฟ 2 ช่อง เหลือ xx วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • Bundle Coupon 7 กล่อง
                    <br />• กุญแจ StaWarehouse 14 ดอก | กุญแจผี 1 ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 08 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1304109816557338645/8.png?ex=67337869&is=673226e9&hm=eb53c1d481cbd316fe09b2f8d31270b46dd80954472ba30a3e424ecb6b598d8d&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID08"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 008 — เวล 21 Rank Vanguard 1</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_8").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_8" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 4.1 M | คลัง 7 M
                    <br />
                    • เซฟ 2 ช่อง เหลือ 7+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น แน่น ๆ
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • Bundle Coupon 8 กล่อง | Card Elite 3 วัน
                    <br />• กุญแจ House 22 ดอก | กุญแจ Loading Area 25 ดอก |
                    กุญแจ Stock 5 ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 09 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1305266128410513418/image.png?ex=6733b8cf&is=6732674f&hm=35ece0fafa1431c926bef8dec560ee2c06f2ee4ffcb531b170f9a7863af1d25a&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID09"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 009 — เวล 26 Rank Eiite 1</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_9").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_9" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 6 M | คลัง 11 M
                    <br />
                    • เซฟ 2 ช่อง เหลือ 1+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • ของทอง 3 ชิ้น | ของม่วง 8 ชิ้น
                    <br />
                    • Bundle Coupon 22 กล่อง
                    <br />• กุญแจ StaWarehouse 13 ดอก | กุญแจ Barn Office 14 ดอก
                    | กุญแจ Main Bedroom 50 ดอก | กุญแจ Loading Area 25 ดอก |
                    กุญแจ Recycing Office 25 ดอก | กุญแจผี 1 ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 10 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://media.discordapp.net/attachments/1273761062088609913/1305587503226683492/image.png?ex=6733929d&is=6732411d&hm=03d86655664aa7c2c01fb8f942df6db0dc627b7729c05896f35e1d52cd71869e&=&format=webp&quality=lossless&width=1177&height=662"
              alt="ID10"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 010 — เวล 22 Rank Rookie 1</h2>
            <div className="card-actions justify-end">
              <Link to="">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-red-600 font-bold"
                >
                  ❌ SOLD OUT ❌
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_10").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_10" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด 5 M | คลัง 6 M | Market 80k+
                    <br />
                    • เซฟ 2 ช่อง เหลือ 11+ วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • ปลด 150 ช่องแล้ว
                    <br />
                    • ของม่วง 1 ชิ้น
                    <br />
                    • Bundle Coupon 11 กล่อง | Card Elite xx วัน
                    <br />• กุญแจ Barn Office 10 ดอก | กุญแจ Main Bedroom 10 ดอก
                    | กุญแจ Recycing Office 25 ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 11 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://t3.ftcdn.net/jpg/04/92/51/66/360_F_492516631_Tzxtms5jydBakvSf3wA9g3gdNtiV1bqS.jpg"
              alt="ID11"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 011 — เวล xx Rank xx </h2>
            <div className="card-actions justify-end">
              <Link to="/bank">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-green-600 font-bold"
                >
                  ✅ BUY ✅
                </button>
              </Link>
              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_11").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_11" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด xx M | คลัง xx M
                    <br />
                    • เซฟ 2 ช่อง เหลือ xx วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • Bundle Coupon xx กล่อง | Card Elite xx วัน
                    <br />• กุญแจ xx ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 12 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://t3.ftcdn.net/jpg/04/92/51/66/360_F_492516631_Tzxtms5jydBakvSf3wA9g3gdNtiV1bqS.jpg"
              alt="ID12"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 012 — เวล xx Rank xx </h2>
            <div className="card-actions justify-end">
              <Link to="/bank">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-green-600 font-bold"
                >
                  ✅ BUY ✅
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_12").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_12" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด xx M | คลัง xx M
                    <br />
                    • เซฟ 2 ช่อง เหลือ xx วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • Bundle Coupon xx กล่อง | Card Elite xx วัน
                    <br />• กุญแจ xx ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 13 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://t3.ftcdn.net/jpg/04/92/51/66/360_F_492516631_Tzxtms5jydBakvSf3wA9g3gdNtiV1bqS.jpg"
              alt="ID13"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 013 — เวล xx Rank xx </h2>

            <div className="card-actions justify-end">
              <Link to="/bank">
                <button
                  className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-green-600 font-bold"
                >
                  ✅ BUY ✅
                </button>
              </Link>

              <button
                className="btn 
              btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_13").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_13" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด xx M | คลัง xx M
                    <br />
                    • เซฟ 2 ช่อง เหลือ xx วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • Bundle Coupon xx กล่อง | Card Elite xx วัน
                    <br />• กุญแจ xx ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 14 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://t3.ftcdn.net/jpg/04/92/51/66/360_F_492516631_Tzxtms5jydBakvSf3wA9g3gdNtiV1bqS.jpg"
              alt="ID14"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 014 — เวล xx Rank xx </h2>

            <div className="card-actions justify-end">
              <Link to="/bank">
                <button
                  className="btn 
        btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-green-600 font-bold"
                >
                  ✅ BUY ✅
                </button>
              </Link>

              <button
                className="btn 
        btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_14").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_14" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด xx M | คลัง xx M
                    <br />
                    • เซฟ 2 ช่อง เหลือ xx วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • Bundle Coupon xx กล่อง | Card Elite xx วัน
                    <br />• กุญแจ xx ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Funtion 15 ========== */}
      <div className="flex justify-center items-center ">
        <div className="card card-compact rounded-lg bg-gray-200 w-96 shadow-xl">
          <figure>
            <img
              className=" rounded-t-lg"
              src="https://t3.ftcdn.net/jpg/04/92/51/66/360_F_492516631_Tzxtms5jydBakvSf3wA9g3gdNtiV1bqS.jpg"
              alt="ID15"
            />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title ml-2">ID 015 — เวล xx Rank xx </h2>

            <div className="card-actions justify-end">
              <Link to="/bank">
                <button
                  className="btn 
        btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-green-600 font-bold"
                >
                  ✅ BUY ✅
                </button>
              </Link>

              <button
                className="btn 
        btn-primary ml-1 p-1 hover:scale-105 rounded-lg hover:text-yellow-500 font-bold"
                onClick={() =>
                  document.getElementById("my_modal_15").showModal()
                }
              >
                🔔 VIEW 🔔
              </button>
              <dialog id="my_modal_15" className="modal rounded-lg p-2">
                <div className="modal-box">
                  <p className="py-4 p-1 ml-2">
                    • เงินสด xx M | คลัง xx M
                    <br />
                    • เซฟ 2 ช่อง เหลือ xx วัน
                    <br />
                    • ปืนและของพร้อมเล่น
                    <br />
                    • เปิดแมพ Armory แล้ว
                    <br />
                    • เปิด Rank แล้ว
                    <br />
                    • Bundle Coupon xx กล่อง | Card Elite xx วัน
                    <br />• กุญแจ xx ดอก
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn p-1 ml-2 hover:bg-red-500 rounded-lg font-bold hover:duration-100 hover:text-white hover:font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      {/* ========== END ========== */}
      <div className=" flex justify-center items-center">
        <LogoCat />
      </div>
      <br />
      <Footer />
    </div>
  );
}
