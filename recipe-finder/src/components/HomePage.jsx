import { Link } from "react-router-dom"

const HomePage = () => {

  return (
    <div className="mx-auto my-8 min-h-screen">
      <div className="h-[850px]">

        <img
          className="w-full h-[700px] object-cover"
          src=""
          alt="Homepage Background"
        />


        <p className="text-center text-gray-800 mt-[40px] text-[20px]">
        Welcome to Tasty Delights.These are recipes that I have made throughout my years of cooking .
        </p>

        <div className="mt-[30px] flex justify-center">
          <Link to={"/recipes"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;