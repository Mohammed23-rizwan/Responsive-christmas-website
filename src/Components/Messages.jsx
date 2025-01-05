import letter from "../assets/images/letter 1.png";

const Messages = () => {
  return (
    <div className="w-full h-[522px] px-[156px] flex justify-center items-center">
      <div className="h-[354px] w-full flex justify-center items-center rounded-[36px] bg-container-color-dark">
        <div className="w-[30%]">
          <h2 className=" text-D-h1-font-size font-semibold">
            Send Good Wishes!
          </h2>
          <input
            type="search"
            name=""
            className="w-full h-[55px] rounded-full px-6 bg-body-color-dark border-none outline-none mt-[25px] mb-3"
            placeholder="write your messages"
            id=""
          />
          <button className="h-[55px] w-[175px] bg-first-color rounded-full capitalize">
            {" "}
            submit
          </button>
        </div>
        <div>
          <img src={letter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
