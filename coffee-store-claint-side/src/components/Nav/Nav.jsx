import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/images/more/logo1.png';
import { RiMenuAddLine } from 'react-icons/ri';
import { useState } from 'react';
const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#372727] ">
      <div className="py-2 flex gap-4 items-center justify-between w-11/12 lg:w-10/12 mx-auto">
        <div className="flex gap-2 items-center justify-center">
          <img className="h-12 md:h-20" src={logo1} alt="" />
          <h1 className="text-white text-4xl md:text-6xl font-normal">
            Snowy Coffee
          </h1>
        </div>
        <div className="relative">
          <div
            className="text-white text-3xl cursor-pointer sm:hidden"
            onClick={() => setMenu(!menu)}
          >
            <RiMenuAddLine />
          </div>
          {menu && (
            <ul className="absolute right-0 top-10 border-2  border-white py-3 min-w-32 rounded-md z-20 bg-primaryColor flex flex-col items-center gap-2 text-white sm:hidden">
              <li className="border-b border-transparent hover:border-[#E3B577]">
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className="border-b border-transparent hover:border-[#E3B577]">
                <NavLink to={'/add-coffee'}>Add Coffee</NavLink>
              </li>
              <li className="border-b border-transparent hover:border-[#E3B577]">
                <NavLink to={'/users'}>Users</NavLink>
              </li>
              <NavLink to={'/login'}>
                <li className="mt-1 sm:mt-0 bg-[#E3B577] px-7 py-2 md:py-2 rounded-sm font-bold text-sm cursor-pointer">
                  Login
                </li>
              </NavLink>

              {/* <div>
              <div className="h-10 w-10 md:h-14 md:w-14 cursor-pointer border-2 border-white rounded-full"></div>
            </div> */}
            </ul>
          )}
          <ul className="hidden sm:flex flex-row items-center gap-2 sm:gap-5 lg:gap-8 text-white">
            <li className="border-b border-transparent hover:border-[#E3B577]">
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="border-b border-transparent hover:border-[#E3B577]">
              <NavLink to={'/add-coffee'}>Add Coffee</NavLink>
            </li>
            <li className="border-b border-transparent hover:border-[#E3B577]">
              <NavLink to={'/users'}>Users</NavLink>
            </li>
            <NavLink to={'/login'}>
              <li className="border-2 mt-1 sm:mt-0 border-transparent hover:border-[#E3B577] bg-[#E3B577] hover:bg-transparent px-5 md:px-7 py-1 md:py-2 rounded-md font-bold active:scale-90 duration-200">
                Login
              </li>
            </NavLink>

            {/* <div>
          <div className="h-10 w-10 md:h-14 md:w-14 cursor-pointer border-2 border-white rounded-full"></div>
        </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
