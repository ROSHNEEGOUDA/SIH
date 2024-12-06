import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white p-4 shadow">
      <div className="font-semibold text-lg">Case: Case #1234</div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search case..."
          className="border px-4 py-2 rounded-md focus:outline-none"
        />
        <button className="px-4 py-2 bg-black text-white rounded-md">New Case</button>
      </div>
    </div>
  );
};

export default Navbar;
