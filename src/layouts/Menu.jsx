/* // =============== < Import In > =============== // */
import "../index.css";
import useAuth from "../hooks/use-auth";

/* // =============== < Import Out > =============== // */
import { ShoppingCart } from "lucide-react";

/* // =============== < Function > =============== // */
export default function Menu() {
  const { authUser, logout } = useAuth();
  /*   // =============== < Return > =============== // */
  return (
    <div>
      <div>
        <div className="flex justify-between items-between bg-gray-800">
          <ul
            role="button"
            className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold"
          >
            <li>
              <a className=" hover:text-cyan-400 duration-300" href="/">
                Home
              </a>
            </li>

            <li>
              <a className=" hover:text-cyan-400 duration-300" href="/rules">
                Rules
              </a>
            </li>

            <li>
              <a className=" hover:text-cyan-400 duration-300" href="/game">
                Game
              </a>
            </li>

            <li>
              <a
                className=" hover:text-cyan-400 duration-300"
                href="/promotion"
              >
                Promotion
              </a>
            </li>

            <li>
              <a className=" hover:text-cyan-400 duration-300" href="/bank">
                Bank
              </a>
            </li>

            <li>
              <a className=" hover:text-cyan-400 duration-300" href="/credit">
                Credit
              </a>
            </li>
          </ul>

          <div>
            <button>
              <ul className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold">
                {authUser ? (
                  // ===== Role ===== //
                  //   ===== ADMIN =====
                  authUser.status == "admin" ? (
                    <>
                      <li>
                        <div className=" hover:text-red-500 text-white">
                          <ShoppingCart />
                        </div>
                      </li>

                      <li>
                        <a
                          className=" hover:text-red-500 duration-300"
                          href="/checkqueue"
                        >
                          Check Order
                        </a>
                      </li>

                      <li>
                        <p
                          className=" hover:text-red-500 duration-300"
                          onClick={logout}
                        >
                          Logout
                        </p>
                      </li>
                    </>
                  ) : (
                    // ===== User =====
                    <>
                      <li>
                        <div className=" hover:text-red-500 text-white">
                          <ShoppingCart />
                        </div>
                      </li>

                      <li>
                        <a
                          className=" hover:text-red-500 duration-300"
                          onClick={logout}
                        >
                          Logout
                        </a>
                      </li>

                      <li>
                        <a
                          className=" hover:text-red-500 duration-300"
                          href="/changepassword"
                        >
                          Change Password
                        </a>
                      </li>
                    </>
                  )
                ) : (
                  // ===== Guest ===== //
                  <>
                    <li>
                      <a className=" hover:text-cyan-400 duration-300">Login</a>
                    </li>
                  </>
                )}
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
