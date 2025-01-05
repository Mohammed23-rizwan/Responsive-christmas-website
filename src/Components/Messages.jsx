import letter from "../assets/images/letter 1.png";

const Messages = () => {
  return (
    <div className="w-full sm:h-[522px] h-full sm:px-[156px] flex justify-center items-center mt-7 px-5 sm:mt-0">
      <div className="sm:h-[354px] w-full flex justify-center items-center rounded-[36px] bg-container-color-dark sm:flex-row flex-col">
        <div className="sm:w-[30%] sm:block p-8 sm:p-0 flex items-center flex-col">
          <h2 className="sm:text-M-h1-font-size text-D-h2-font-size font-semibold">
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
