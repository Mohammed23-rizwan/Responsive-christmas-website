import home from "../assets/images/home.png";

const Home = () => {
  return (
    <div className="w-full sm:h-[634px] px-5 sm:px-[156px] flex items-center justify-center sm:gap-[18px] sm:flex-row flex-col mt-[22px] sm:m-0">
      <div className="sm:w-1/2">
        <img src={home} className="w-[500px] h-[442px]" alt="" />
      </div>
      <div className="sm:w-1/2 flex flex-col gap-4 mt-6 mb-3 sm:mb-0 sm:mt-0 items-center sm:items-start">
        <h2 className="sm:text-D-biggest-font-size text-M-biggest-font-size text-center sm:text-left">
          Merry Christmas and Happy New Year!
        </h2>
        <p className=" text-M-normal-font-size sm:text-D-normal-font-size font-semibold text-text-color-dark mb-10 sm:m-0 text-center sm:text-left">
          Christmas and a new year is about to begin, all
          <br /> good wishes and successes.
        </p>
        <button className="w-[204px] h-[64px] rounded-full bg-first-color mb-8 sm:m-0">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
