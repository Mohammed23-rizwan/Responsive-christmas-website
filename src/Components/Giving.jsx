import img1 from "../assets/images/giving1.png";
import img2 from "../assets/images/giving2.png";
import img3 from "../assets/images/giving3 1.png";

const Giving = () => {
  const detail = [
    {
      name: "Surprise gifts",
      desc: "They are the best gifts there is.",
      img: img1,
    },
    { name: "Ornaments", desc: "Give a moment to decorate", img: img2 },
    {
      name: "Lots of love",
      desc: "Give away feelings that last forever",
      img: img3,
    },
  ];
  return (
    <div className="w-full h-[440px] flex flex-col justify-center items-center">
      <div>
        <h2 className=" text-D-h2-font-size text-center font-semibold">
          Start Giving This <br />
          Christmas
        </h2>
      </div>
      <div className="pt-[56px] flex gap-[128px]">
        {detail.map((item, index) => {
          return (
            <div
              className="w-[142px] h-[208px] flex flex-col justify-center items-center"
              key={index}
            >
              <img src={item.img} className="w-[120px] h-[120px]" alt="" />
              <h2 className="text-D-h3-font-size font-semibold">{item.name}</h2>
              <p className=" text-D-small-font-size text-center pt-1">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Giving;
