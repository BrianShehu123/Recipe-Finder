import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-10">
      <div className="container mx-auto flex items-center justify-between">

        <div className="text-white text-xl font-bold">
          <Link to= "/" className="text-gray-300 hover:text-white">
            Epic Recipe Finder
          </Link>
        </div>

        <div className="flex space-x-4">
          <li className="text-gray-300 hover:text-white"><Link to = "/">Home</Link></li>
          <li className="text-gray-300 hover:text-white"><Link to = "/about">About</Link></li>
          <li className="text-gray-300 hover:text-white"><Link to = "/recipes">Recipes</Link></li>
          <li className="text-gray-300 hover:text-white"><Link to = "/contact">Contact</Link></li>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;