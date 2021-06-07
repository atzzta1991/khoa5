import React from "react";

export default function Card() {
  return (
    <div className="card w-full">
      <div className="card-body bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg">
        <h3 className="text-purple-800 font-bold text-xs">Category</h3>
        <p className="text-black text-1xl">Cybersolf frontend dev</p>
        <p className="text-black font-thin my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="card-footer flex justify-between bg-gray-100 px-2">
        <p className="mt-4">1 USD</p>
        <button className="rounded-lg bg-purple-500 text-white px-2 py-2 my-2 hover:bg-gray-300 transition duration-500">
          Register
        </button>
      </div>
    </div>
  );
}
