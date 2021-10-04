import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isShown, toggleShown] = useState(false);

  return (
    <nav className="w-full flex justify-between flex-wrap p-6 lg:pl-0 bg-gray-100">
      <div className="block lg:hidden">
        <button
          className="flex px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-black hover:underline hover:border-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Menu
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto nav-links transition duration-400 ease-in-out transform`}
      >
        <div className="lg:flex-grow md:items-center lg:items-center ml-10 pt-3 tracking-tight">
          <div className="mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-black hover:underline mr-8">
            <Link href="/" activeClassName="underline">
              <a>Home</a>
            </Link>
          </div>

          <div className="mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-black hover:underline mr-8">
            <Link href="/about" activeClassName="underline">
              <a>About</a>
            </Link>
          </div>

          <div className="mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-black hover:underline mr-8">
            <Link href="/events" activeClassName="underline">
              <a>Events</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
