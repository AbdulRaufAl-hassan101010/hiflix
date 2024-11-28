import { Bell, ChevronDown, Crown, Search } from "lucide-react";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="container mx-auto px-5">
      <div className="flex justify-between py-3 items-center h-[90px]">
        <Link to="/" className="text-2xl font-medium">
          Hiflix
        </Link>

        <ul className="hidden lg:flex rounded-full items-center bg-white px-5 py-2.5 text-sm font-light gap-x-5 text-gray-400">
          <li>
            <Link to="/movies" className="text-black font-medium">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tv">TV Shows</Link>
          </li>
          <li>
            <Link to="/tv">Series</Link>
          </li>
          <li>
            <Link to="/tv">Originals</Link>
          </li>
          <li className="bg-black rounded-full w-[32px] h-[32px] flex items-center justify-center text-white">
            <button>
              <Search />
            </button>
          </li>
        </ul>

        <ul className="rounded-full flex items-center py-2.5 text-sm font-light gap-x-5">
          <li className="relative">
            <button className="bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center text-white">
              <Bell size={20} fill="#fff" />
              <div className="w-5 h-5 absolute top-0 right-[-10px] bg-red-500 rounded-full">
                8
              </div>
            </button>
          </li>
          <li className="flex justify-between gap-x-1.5 items-center">
            <img
              src="https://www.gravatar.com/avatar/"
              className="bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center text-white"
              alt="User"
            />
            <div>
              <div className="font-normal">Abdul Rauf</div>
              <div className="flex items-center text-xs">
                <Crown color="gold" fill="gold" size={14} />
                Premium
              </div>
            </div>
            <button>
              <ChevronDown />
            </button>
          </li>
        </ul>
      </div>

      <ul className="flex lg:hidden rounded-full items-center justify-center bg-white px-5 py-2.5 text-sm font-light gap-x-5 text-gray-400">
        <li>
          <Link to="/movies" className="text-black font-medium">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/tv">TV Shows</Link>
        </li>
        <li>
          <Link to="/tv">Series</Link>
        </li>
        <li>
          <Link to="/tv">Originals</Link>
        </li>
        <li className="bg-black rounded-full w-[32px] h-[32px] flex items-center justify-center text-white">
          <button>
            <Search />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
