import { CiHeart } from "react-icons/ci";
import img1 from "../assets/images/gift1 2.png";
import img2 from "../assets/images/gift2 1.png";
import img3 from "../assets/images/gift3 2.png";
import img4 from "../assets/images/gift4 1.png";
import img5 from "../assets/images/gift5 1.png";

const ShareGift = () => {
  const details = [
    { rate: 15, name: "Gingerbread", img: img1 },
    { rate: 22, name: "Santa Claus Hat", img: img2 },
    { rate: 12, name: "Candy Stick", img: img3 },
    { rate: 45, name: "Christmas Tree", img: img4 },
    { rate: 35, name: "Snowman", img: img5 },
  ];
  return (
    <div className="w-full sm:h-[738px] flex flex-col items-center">
      <h2 className="capitalize text-D-h2-font-size font-semibold mb-[64px]">
        share a gift
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 place-items-center">
        {details.map((detail, index) => {
          return (
            <div
              className="p-5 flex justify-center sm:w-[200px] w-[144px] h-[192px] sm:h-[247px] bg-container-color-dark flex-col relative rounded-lg"
              key={index}
            >
              <div className="absolute right-[20px] top-[20px] text-first-color">
                <CiHeart />
              </div>
              <div className="w-full flex justify-center mb-4">
                <img
                  src={detail.img}
                  className="w-[120px] h-[120px] text-center"
                  alt=""
                />
              </div>
              <h2 className="sm:text-D-h3-font-size font-semibold text-M-h3-font-size">
                ${detail.rate}
              </h2>
              <p className=" text-[13px] sm:text-[14px] text-text-color-dark capitalize">
                {detail.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShareGift;
