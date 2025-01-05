import { CiDark } from "react-icons/ci";
import logo from "../assets/images/1.png";
import { PiSquaresFourLight } from "react-icons/pi";

const NavBar = () => {
  const navbar = ["Home", "celebrate", "gift", "news"];
  return (
    <div className="h-[56px] sm:h-[72px] bg-transparent w-full px-6 sm:px-[156px] flex justify-between items-center">
      <div className="gap-1 flex h-full items-center">
        <img src={logo} className="w-6 h-6 object-cover" alt="" />
        <p>christmas</p>
      </div>
      <div>
        <ul className="flex gap-4 sm:hidden">
          <li className="w-5 h-5">
            <CiDark className="text-xl" />
          </li>
          <li>
            <PiSquaresFourLight className="text-xl" />
          </li>
        </ul>
        <ul className="hidden sm:flex h-full capitalize items-center text-[16px] gap-12">
          {navbar.map((items, index) => {
            return (
              <li key={index} className="cursor-pointer">
                {items}
              </li>
            );
          })}
          <li>
            <CiDark className="text-bold" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
