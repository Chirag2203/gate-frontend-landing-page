function KeysWindow({
  handleButton,
}: {
  handleButton: (item: string) => void;
}) {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];

  const basicKeys = [
    "AC",
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "DEL",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="keysWindow bg-gray-200 xl:gap-2 pt-2 rounded-b-xl">
      <div className="keys_scientific 2xl:gap-4">
        {sciKeys.map((item, index) => (
          <button
            className="2xl:p-4 p-3 hover:bg-gray-300 text-gray-700 rounded-md"
            key={index}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="line bg-gray-700"></div>

      <div className="keys_basic 2xl:gap-4">
        {basicKeys.map((item, index) => (
          <button
            key={index}
            className={`2xl:text-xl text-md text-gray-700 ${
              item >= "0" && item <= "9"
                ? "number hover:bg-gray-300   rounded-md"
                : ""
            } ${
              item === "=" && "bg-primary text-white hover:bg-primary/90"
            } 2xl:p-4 p-3 rounded-tl-md rounded-br-xl`}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default KeysWindow;
