const NavBar = () => {

  
    return (
      <nav className="bg-gray-800 py-4">
  
        <div className="container mx-auto flex items-center justify-between">
  
          <div className="text-white text-xl font-bold">Epic Recipe Finder</div>
          
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
  
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
  
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Recipes
              </a>
            </li>
  
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
  
        </div>
  
      </nav>
    )
  };
  
  export default NavBar;