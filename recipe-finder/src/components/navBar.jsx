import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-teal-700 py-10">
      <div className="container mx-auto flex items-center justify-between">

        <div className="text-white text-xl font-bold">
          <Link to= "/" className="text-white-300 hover:text-white strong" >
            Epic Recipe Finder
          </Link>
        </div>

        <div className="flex space-x-4">
          <li className=" hover:text-white"><Link to = "/">Home</Link></li>
          <li className=" hover:text-white"><Link to = "/recipes">Recipes</Link></li>
         
        </div>

      </div>
    </nav>
  );
};

export default NavBar;