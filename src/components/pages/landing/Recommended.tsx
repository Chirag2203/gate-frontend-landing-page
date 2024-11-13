import { InfiniteMovingCards } from "@/components/ui/infinite-moving-images";
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
      className="pt-8  flex flex-col  sm:gap-12 gap-2 sm:mb-0 mb-4 items-center "
    >
      <p className="sm:text-xl text-lg text-primary font-medium">
        We are recommended by people at
      </p>
      <InfiniteMovingCards items={allImgs} direction="right" speed="slow" />
    </motion.div>
  );
};

export default Recommended;
