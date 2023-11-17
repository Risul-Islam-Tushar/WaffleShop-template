import logo from "../../assets/New+Logo+Full+White.png";
const Header = () => {
  return (
    <div>
      <div className=" bg-black">
        <div className="navbar-start flex py-3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-96"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>XO-WAFFEL</a>
              </li>
              <li>
                <a>MENU</a>
              </li>
            </ul>
          </div>
          <a className="mx-auto flex lg:hidden" href="">
            <img className="h-14 " src={logo} />
          </a>
        </div>

        <div className="hidden lg:flex justify-center">
          <ul className="flex gap-10 text-white items-center p-3">
            <li className="text-2xl font-bold">
              <a>HOME</a>
            </li>
            <li>
              <a>
                <img className="h-36" src={logo} />
              </a>
            </li>
            <li className="text-2xl font-bold">
              <a>MENU</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
