import React from 'react';

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <>
      <div className="flex min-w-max justify-end items-center pb-2 sm:p-6">
        <ul className="flex text-gray-500 font-semibold h-8 justify-between items-center">
          <li className="ml-2 hover:text-purple-800 px-2 py-1 cursor-pointer transition-all">
            Login
          </li>
          <li className="ml-2 hover:text-purple-800 px-2 py-1 cursor-pointer transition-all">
            Sign up
          </li>
          <li className="ml-2 hover:text-purple-800 px-2 py-1 cursor-pointer transition-all">
            SMTHG
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
