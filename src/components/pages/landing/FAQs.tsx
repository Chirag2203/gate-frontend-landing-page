import { useState } from "react";
import { motion } from "framer-motion";
import faqData from "@/constants/faqs";
import FAQItem from "@/components/shared/components/FAQItem";
const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <div className="">
      <p className="text-primary font-semibold text-sm sm:text-left text-center">SOMETHING UNCLEAR?</p>
      <p className="sm:text-3xl text-2xl font-bold sm:mt-2 sm:text-left text-center">
        Frequently Asked Questions
      </p>
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
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_right w-full pt-8 "
      >
        <div className="rounded-lg dark:border dark:border-strokedark dark:bg-blacksection">
          {faqData.map((faq, key) => (
            <FAQItem
              key={key}
              faqData={{ ...faq, activeFaq, handleFaqToggle }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
