import img1 from "../assets/images/celebrate 1.png";

const Celebrate = () => {
  return (
    <div className="w-full sm:h-[554px] flex-col sm:flex-row flex justify-center items-center mt-12 sm:m-0 sm:px-[180px] sm:gap-20">
      <div className="sm:w-1/2 px-6 sm:p-0 flex sm:block flex-col items-center">
        <h2 className="text-D-h2-font-size font-semibold">
          Celebrate With A Lot Of Love
        </h2>
        <p className=" text-D-normal-font-size text-text-color-dark mt-6">
          In this holidays, celebrate with much love and peace, offering many
          blessings to our loved ones, friends and neighbors, wishing them a
          good Christmas message.
        </p>
        <button className="w-[215px] h-[56px] bg-first-color capitalize rounded-full mt-10">
          send good wishes
        </button>
      </div>
      <div className="px-5 sm:p-0  sm:w-1/2">
        <img src={img1} className="w-[450px] h-[450px]" alt="" />
      </div>
    </div>
  );
};

export default Celebrate;
