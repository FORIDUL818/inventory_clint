import { NavLink } from "react-router-dom";


function Navbar({ openLogin }) {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <a href="#" className="flex items-center text-white">
          <h2 className="ml-2 text-lg font-semibold">InventoryApp</h2>
        </a>
        <div className="hidden md:flex space-x-6 text-white">
         
          <NavLink to="#">Home</NavLink>
          <NavLink to="#">Contact</NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Product</NavLink>
          <NavLink to="#">service</NavLink>
        </div>
        <button onClick={openLogin} className="hidden md:inline-block bg-white text-blue-900 py-2 px-4 rounded">Log In</button>
      </nav>
    </header>
  );
}

export default Navbar;
