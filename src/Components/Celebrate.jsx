import img1 from "../assets/images/celebrate 1.png";

const Celebrate = () => {
  return (
    <div className="w-full h-[554px] flex justify-center items-center px-[180px] gap-20">
      <div className="w-1/2">
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
      <div className="w-1/2">
        <img src={img1} className="w-[450px] h-[450px]" alt="" />
      </div>
    </div>
  );
};

export default Celebrate;
