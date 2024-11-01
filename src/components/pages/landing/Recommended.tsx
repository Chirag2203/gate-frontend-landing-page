import { setOne, setTwo } from "@/constants/recommended";
import { motion } from "framer-motion";
const Recommended = () => {
  const allImgs = [...setOne, ...setTwo];
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="pt-8  flex flex-col  gap-12 items-center "
    >
      <p className="sm:text-xl text-lg text-primary font-medium">
        We are recommended by people at
      </p>
      <div className="sm:flex sm:flex-col w-full gap-4 hidden">
        <div className="flex gap-4 w-full justify-between">
          {setOne.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="img"
              className="w-24 h-24 object-contain transform  transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          ))}
        </div>
        <div className="flex gap-16 w-full justify-center">
          {setTwo.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="img"
              className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden  flex gap-6 justify-center items-center flex-wrap">
        {allImgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="img"
            className="w-14 h-14 object-contain transform  transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Recommended;
