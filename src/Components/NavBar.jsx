import { CiDark } from "react-icons/ci";
import logo from "../assets/images/1.png";

const NavBar = () => {
  const navbar = ["Home", "celebrate", "gift", "news"];
  return (
    <div className="h-[72px] bg-transparent w-full px-[156px] flex justify-between items-center">
      <div className="gap-1 flex h-full items-center">
        <img src={logo} className="w-6 h-6 object-cover" alt="" />
        <p>christmas</p>
      </div>
      <div>
        <ul className="flex h-full capitalize items-center text-[16px] gap-12">
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
