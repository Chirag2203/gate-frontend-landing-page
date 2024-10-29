
import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-300 text-gray-700">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-3 bg-secondary dark:bg-secondaryDark text-white rounded-md hover:bg-opacity-90 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
