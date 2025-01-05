import logo from "../assets/images/1.png";
import img1 from "../assets/images/aviable1.png";
import img2 from "../assets/images/aviable2.png";
const Footer = () => {
  return (
    <div className="w-full sm:h-[400px] py-[72px] flex sm:flex-row p-4 flex-col justify-around relative gap-10 sm:gap-0">
      <div>
        <ul>
          <li className="flex gap-2 items-center mb-6">
            <img src={logo} alt="" />
            <h1>Christmas</h1>
          </li>
          <li className=" text-D-small-font-size">
            <p>This Christmas give a lot of love</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className=" mb-6">
            <h1 className=" text-D-h3-font-size font-semibold">Our Services</h1>
          </li>
          <li>price</li>
          <li className="my-3">discount</li>
          <li>shopping mode</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className=" mb-6">
            <h1 className=" text-D-h3-font-size font-semibold">Support</h1>
          </li>
          <li>FAQs</li>
          <li className="my-3">Support Center</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className=" mb-6">
            <h1 className=" text-D-h3-font-size font-semibold">Available On</h1>
          </li>
          <li>
            <img src={img1} className="w-[100px] h-[30px]" alt="" />
          </li>
          <li className="mt-3">
            <img src={img2} className="w-[100px] h-[30px]" alt="" />
          </li>
        </ul>
      </div>
      <p className="absolute bottom-[36px] w-full flex justify-center sm:text-M-small-font-size text-D-small-font-size text-text-color-light">
        Bedimcode. All rigths reserved
      </p>
    </div>
  );
};

export default Footer;
