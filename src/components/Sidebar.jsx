import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faSearch,
  faBarChart,
  faShield,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-gray-100 to-gray-200 h-screen border-r flex flex-col shadow-lg">
      <div className="p-4 font-bold text-xl text-gray-700 flex items-center space-x-2">
        <span className="text-indigo-500 animate-pulse">⚡</span>
        <span>DigiForensics</span>
      </div>
      <ul className="mt-6 flex flex-col space-y-2">
        <li>
          <Link
            to="/"
            className="block px-4 py-2 flex items-center space-x-3 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faFileImport} className="text-black w-5 h-5" />
            <span>Evidence Import</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Analysis"
            className="block px-4 py-2 flex items-center space-x-3 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faSearch} className="text-black w-5 h-5" />
            <span>Analysis</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Eventtimeline"
            className="block px-4 py-2 flex items-center space-x-3 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faBarChart} className="text-black w-5 h-5" />
            <span>Timeline</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Report"
            className="block px-4 py-2 flex items-center space-x-3 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faShield} className="text-black-500 w-5 h-5" />
            <span>Reporting</span>
          </Link>
        </li>
      </ul>
      <div className="mt-auto border-t">
        <button className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faGear} className="text-black-500 w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
