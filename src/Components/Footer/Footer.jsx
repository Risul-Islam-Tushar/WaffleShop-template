import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black mt-5">
      <div className="flex justify-center  gap-3 pt-5 text-4xl">
        <FaInstagram className="rounded-full p-2 hover:bg-white text-white hover:text-black" />
        <FaFacebookF className=" rounded-full p-2 hover:bg-white text-white hover:text-black" />
      </div>
      <div className="text-xs lg:text-sm font-normal pt-10 lg:pt-32 pb-10 lg:pb-20 text-center text-white">
        <h1>
          1909 BELLAMAH AVE NW STE S, ALBUQUERQUE, NM 87104, UNITED
          STATESADMIN@XOWAFFLE.COM
        </h1>
      </div>
    </div>
  );
};

export default Footer;
