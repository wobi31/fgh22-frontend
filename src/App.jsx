import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import img from "./asset/Ticket";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="flex py-5 text-slate-100 bg-black px-28  h-24 al items-center  text-align: center; justify-between shadow-sm">
        <div>
          <img src="" alt="" />
          brand
        </div>
        <ul className="flex gap-5 ">
          <il>
            <a href="">Home</a>
          </il>
          <il>
            <a href="">Movie</a>
          </il>
          <il>
            <a href="">Buy Ticket</a>
          </il>
        </ul>
        <div className="flex gap-1.5 text-center ">
          <a
            className="flex w-24 border h-14 justify-center items-center text-center rounded-lg "
            href=""
          >
            Sign In
          </a>
          <a
            className="flex w-24  bg-yellow-500 h-14 items-center justify-center text-center rounded-lg "
            href=""
          >
            Sign Up
          </a>
        </div>
      </nav>
      <section className="flex pt-8  w-auto h-96 justify-around bg-black ">
        <div className=" text-left gap-5">
          <div className="text-yellow-500 text-lg">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </div>
          <div className="  text-white text-4xl">
            Experience the Magic of Cinema: Book Your Tickets Today
          </div>
          <div className="text-white">
            Sign up and get the ticket with a lot of discount
          </div>
        </div>
        <div className="text-white">Lorem ipsum dolor sit amet.</div>
      </section>
      <main className="flex-col pt-8 p-24 h-96 bg-black">
        <div>
          <div className="text-yellow-500 text-lg ">WHY CHOOSE US</div>
          <div className="text-white text-4xl">
            Unleashing the Ultimate Movie Experience
          </div>
        </div>
        <div className="flex  pt-14">
          <div className="flex gap-4 justify-around">
            <div>
              <div>
                <div className="w-20 h-20 rounded-full bg-yellow-500">1</div>
              </div>
              <div className="text-white">Guaranteed</div>
              <div className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quod ipsum sint molestiae! Aliquid, error?
              </div>
            </div>
            <div>
              <div>
                <div className="w-20 h-20 rounded-full bg-yellow-500">1</div>
              </div>
              <div className="text-white">Guaranteed</div>
              <div className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quod ipsum sint molestiae! Aliquid, error?
              </div>
            </div>
            <div className="flex-col gap-5">
              <div>
                <div className="w-20 h-20 rounded-full bg-yellow-500">1</div>
              </div>
              <div className="text-white">Guaranteed</div>
              <div className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quod ipsum sint molestiae! Aliquid, error?
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className=" flex-col bg-black ">
        <div className="flex-col pt-11 h-36 bg-black text-center justify-center">
          <div className=" text-yellow-500 text-lg">MOVIES</div>
          <div className=" text-white text-4xl">
            Exciting Movies That Should Be Watched Today
          </div>
        </div>
        <div className="flex justify-around bg-black h-96 text-center">
          <div className="flex-col justify-around">
            <div className="w-72 bg-yellow-500 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex gap-3">
                <button className="text-white">action</button>
                <button className="text-white">action</button>
              </div>
            </div>
          </div>
          <div className="flex-col justify-around">
            <div className="w-72 bg-yellow-500 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex gap-3">
                <button className="text-white">action</button>
                <button className="text-white">action</button>
              </div>
            </div>
          </div>
          <div className="flex-col justify-around">
            <div className="w-72 bg-yellow-500 gap-4 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex-col gap-3">
                <button className="text-white">action</button>
                <button className="text-white">action</button>
              </div>
            </div>
          </div>
          <div className="flex-col justify-around">
            <div className="w-72  bg-yellow-500 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex gap-3">
                <button className="text-white">action</button>
                <button className="text-white">action</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-60 justify-center pt-5">
          <div className="text-white">View All</div>
          <div></div>
        </div>
        <div className="flex justify-around pt-24 bg-black h-auto text-center">
          <div className="flex-col justify-around">
            <div className="w-72 bg-yellow-500 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex-col gap-3">
                <div className="text-blue-600">June 2024</div>
                <div className="flex gap-3">
                  <button className="text-white">action</button>
                  <button className="text-white">action</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-around">
            <div className="w-72 bg-yellow-500 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex-col gap-3">
                <div className="text-blue-600">June 2024</div>
                <div className="flex gap-3">
                  <button className="text-white">action</button>
                  <button className="text-white">action</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-around">
            <div className="w-72 bg-yellow-500 gap-4 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex-col gap-3">
                <div className="text-blue-600">June 2024</div>
                <div className="flex gap-3">
                  <button className="text-white">action</button>
                  <button className="text-white">action</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-around">
            <div className="w-72 justify-center flex  bg-yellow-500 h-96"></div>
            <div className="text-left pt-5">
              <div className="text-white">
                <b>Black widow</b>
              </div>
              <div className="flex-col gap-3">
                <div className="text-blue-600">June 2024</div>
                <div className="flex gap-3">
                  <button className="text-white">action</button>
                  <button className="text-white">action</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-3  h-auto justify-center bg-black pt-20">
          <div className="flex rounded-t-lg rounded-b-lg justify-around items-center w-11/12 h-96 bg-yellow-500">
            <div
              className="flex-col gap-16
             justify-between"
            >
              <div className="flex justify-center text-5xl">
                Subscribe to our newsletter
              </div>
              <div className="flex gap-6">
                <input
                  className="w-52 pl-3 text-slate-900  h-16  rounded-md"
                  type="text"
                  placeholder="first name"
                />
                <input
                  className="w-52 pl-3 text-slate-900  h-16  rounded-md"
                  type="text"
                  placeholder="Last name"
                />
                <button className="w-52 pl-3 text-slate-900  h-16 bg-white rounded-md">
                  Subcarbe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-col w-full justify-self-center h-56 gap-11 bg-red-600">
        <div className="flex pt-16 bg-red-600 justify-around">
          <div>
            <div>img</div>
            <div>
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </div>
          </div>
          <div>
            <div>naruto</div>
            <div>naruto</div>
            <div>naruto</div>
            <div>naruto</div>
          </div>
          <div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
            <div>img</div>
          </div>
          <div>
            <div>Follow</div>
            <div>Follow</div>
            <div>Follow</div>
            <div>Follow</div>
          </div>
        </div>
        <div className="flex pt-16 bg-red-600 justify-center">
          © 2020 Tickitz. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
