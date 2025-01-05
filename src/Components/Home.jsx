import home from "../assets/images/home.png";

const Home = () => {
  return (
    <div className="w-full h-[634px] px-[156px] flex items-center justify-center gap-[18px]">
      <div className="w-1/2">
        <img src={home} className="w-[500px] h-[442px]" alt="" />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className=" text-D-biggest-font-size">
          Merry Christmas and Happy New Year!
        </h2>
        <p className=" text-M-normal-font-size font-semibold text-text-color-dark">
          Christmas and a new year is about to begin, all
          <br /> good wishes and successes.
        </p>
        <button className="w-[204px] h-[64px] rounded-full bg-first-color">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
