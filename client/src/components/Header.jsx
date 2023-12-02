import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Swan</span>
            <span className="text-slate-700">Estates</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            placeholder="search..."
          />
          <FaSearch className="text-slate-500" />
        </form>

        <ul className="flex gap-4">
          <Link to="/" className="nav-li">
            Home
            {/* <li ></li> */}
          </Link>
          <Link to="/about" className="nav-li">
            About
            {/* <li></li> */}
          </Link>
          <Link to="/sign-in" className="text-slate-700 hover:underline">
            SignIn
            {/* <li ></li> */}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
