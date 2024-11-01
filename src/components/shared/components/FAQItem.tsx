const FAQItem = ({ faqData }:
  {
    faqData: {
      activeFaq: number;
      id: number;
      handleFaqToggle: (id: number) => void;
      quest: string;
      ans: string;
    };
  }

) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;

  return (
    <>
      <div className="flex flex-col  ">
        <button
          onClick={() => {
            handleFaqToggle(id);
          }}
          className="flex text-left border-b  text-xl cursor-pointer items-center justify-between  py-5  font-medium  dark:text-white lg:py-4"
        >
          {quest}

          {activeFaq === id ? (
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <p
          className={` text-gray-700 py-5 dark:border-strokedark lg:py-4 sm:w-5/6  ${
            activeFaq === id ? "block" : "hidden"
          }`}
        >
          {ans}
        </p>
      </div>
    </>
  );
};

export default FAQItem;
