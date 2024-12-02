// import Tickizt form "./assets/asset/Tickitz2.png"
// import BCA from "./assets/asset/BCA.png"
// import HOW from "./assets/asset/Tickitz2.png"


function Navbar() {
  return (
    <nav className="flex py-5 text-slate-100 bg-black px-28  h-24 al items-center  text-align: center; justify-between shadow-sm">
      <div>
        {/* <img src={BCA} alt="" /> */}
      </div>
      <ul className="flex gap-5 justify ">
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
          className="flex w-24  bg-[#ffbf00] h-14 items-center justify-center text-center rounded-lg "
          href=""
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
