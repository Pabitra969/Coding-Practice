import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setView, viewType, setviewType }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or Site Title */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 lg:text-3xl"
              onClick={(e) => {
                e.preventDefault();
                setView("login");
              }}
            >
              Blog Website
            </a>
          </div>

          {/* Buttons on the right */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                setviewType((prev) => (prev === "grid" ? "list" : "grid"))
              }
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {viewType == "grid" ? "List View" : "Grid View"}
            </button>

            <Link to="/view">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                View Blog
              </button>
            </Link>

            <Link to="/login">
              <button
                onClick={() => setView("login")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button
                onClick={() => setView("register")}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
