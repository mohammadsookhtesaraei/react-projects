import clsx from "clsx";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const Header = (): ReactNode => {
  return (
    <header className="border-b border-b-gray-300/30 shadow-md mb-8">
      <nav className="flex items-center container mx-auto px-4 h-15">
        <ul className="flex gap-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "text-blue-400 pb-1 border-b"
                    : "text-gray-400 pb-1 border-b border-b-transparent",
                )
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "text-blue-400 pb-1 border-b"
                    : "text-gray-400 pb-1 border-b border-b-transparent",
                )
              }
            >
              auth
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "text-blue-400 pb-1 border-b transition-colors duration-75"
                    : "text-gray-400 pb-1 border-b border-b-transparent ",
                )
              }
            >
              dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "text-blue-400 pb-1 border-b"
                    : "text-gray-400 pb-1 border-b border-b-transparent",
                )
              }
            >
              admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
