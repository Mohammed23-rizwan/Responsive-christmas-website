import { CiHeart } from "react-icons/ci";
import img1 from "../assets/images/gift4.png";
import img4 from "../assets/images/gift4.png";
import img2 from "../assets/images/gift2 1.png";
import img3 from "../assets/images/gift4 1.png";

const NewArraival = () => {
  const GiftDetails = [
    { name: "Christmas Wreath", rate: 18, img: img1 },
    { name: "Reindeer", rate: 95, img: img2 },
    { name: "Sledge", rate: 75, img: img3 },
    { name: "Snow Globe", rate: 20, img: img4 },
  ];

  return (
    <div className="w-full sm:h-[537px] mt-4 sm:mt-0 h-full">
      <h2 className="capitalize text-D-h2-font-size flex justify-center pb-16">
        new gifts
      </h2>
      <div className="sm:flex justify-center gap-16 grid grid-cols-1 place-items-center">
        {GiftDetails.map((detail, index) => {
          return (
            <div
              className="w-[230px] h-[278px] relative overflow-hidden bg-container-color-dark flex justify-center items-center rounded-lg"
              key={index}
            >
              <div className="absolute w-[250px] h-[250px] bg-first-color -top-[70px] rounded-full"></div>
              <div className="w-full h-full flex py-4 items-center flex-col z-10">
                <img
                  src={detail.img}
                  className="w-[150px] h-[150px] mb-8"
                  alt=""
                />
                <h2 className="text-D-h3-font-size font-semibold mb-1">
                  ${detail.rate}
                </h2>
                <p className="text-[15px] capitalize font-medium">
                  {detail.name}
                </p>
              </div>
              <div className="absolute w-9 h-9 rounded-sm bg-first-color bottom-0 right-0 flex justify-center items-center">
                <CiHeart />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArraival;
