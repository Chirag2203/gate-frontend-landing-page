import { CgSpinner } from "react-icons/cg";

const PrimaryLoader = () => {
  return (
    <div className="flex items-center justify-center h-96 my-32">
      <CgSpinner className="text-4xl text-violet-700 dark:text-secondaryDark animate-spin" />
    </div>
  );
};

export default PrimaryLoader;
