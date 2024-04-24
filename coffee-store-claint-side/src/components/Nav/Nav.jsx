import { Link, NavLink } from 'react-router-dom';
import logo1 from '../../assets/images/more/logo1.png';
import profile from '../../assets/images/icons/usrImg.jpg';
import { RiMenuAddLine } from 'react-icons/ri';
import { useContext, useState } from 'react';
import { ContextAuth } from '../../provider/Provider';
import { IoClose } from 'react-icons/io5';
const Nav = () => {
  const { userDta, logOut } = useContext(ContextAuth);
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#372727] ">
      <div className="py-2 flex gap-4 items-center justify-between w-11/12 lg:w-10/12 mx-auto">
        <Link>
          <div className="flex gap-2 items-center justify-center">
            <img className="h-12 md:h-20" src={logo1} alt="" />
            <h1 className="text-white text-4xl md:text-6xl font-normal">
              Snowy Coffee
            </h1>
          </div>
        </Link>
        <div className="relative">
          <div>
            {userDta ? (
              <div className="sm:hidden" onClick={() => setMenu(!menu)}>
                <div className="h-10 w-10 md:h-14 md:w-14 cursor-pointer border-2 border-white rounded-full">
                  <img
                    className="rounded-full border-2 border-primaryColor"
                    src={userDta.photoURL || profile}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <div
                className="text-white text-3xl cursor-pointer sm:hidden"
                onClick={() => setMenu(!menu)}
              >
                <RiMenuAddLine />
              </div>
            )}

            {menu && (
              <ul className="absolute right-0 top-12 border-2  border-white py-3 min-w-32 rounded-md z-20 bg-primaryColor flex flex-col items-center gap-2 text-white sm:hidden">
                <span
                  className="text-white text-2xl absolute top-0 left-0 border-r-2 border-b-2 border-white cursor-pointer"
                  onClick={() => setMenu(!menu)}
                >
                  <IoClose />
                </span>
                <li className="border-b border-transparent hover:border-[#E3B577]">
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className="border-b border-transparent hover:border-[#E3B577]">
                  <NavLink to={'/add-coffee'}>Add Coffee</NavLink>
                </li>
                <li className="border-b border-transparent hover:border-[#E3B577]">
                  <NavLink to={'/users'}>Users</NavLink>
                </li>
                {userDta ? (
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <li className="border-b border-transparent hover:border-[#E3B577]">
                      <NavLink to={'/view-profile'}>View Profile</NavLink>
                    </li>
                    <li className="border-b border-transparent hover:border-[#E3B577]">
                      <NavLink to={'/update-profile'}>Profile Update</NavLink>
                    </li>
                    <li
                      className="mt-1 sm:mt-0 bg-[#E3B577] px-7 py-2 md:py-2 rounded-sm font-bold text-sm cursor-pointer"
                      onClick={logOut}
                    >
                      Log Out
                    </li>
                  </div>
                ) : (
                  <NavLink to={'/login'}>
                    <li className="mt-1 sm:mt-0 bg-[#E3B577] px-7 py-2 md:py-2 rounded-sm font-bold text-sm cursor-pointer">
                      Login
                    </li>
                  </NavLink>
                )}
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
              {userDta ? (
                <div className="relative">
                  <div
                    className="h-10 w-10 md:h-14 md:w-14 cursor-pointer border-2 border-white rounded-full"
                    onClick={() => setMenu(!menu)}
                  >
                    <img
                      className="rounded-full border-2 border-primaryColor"
                      src={userDta.photoURL || profile}
                      alt=""
                    />
                  </div>
                  {menu && (
                    <ul className="absolute right-0 top-12 md:top-16 border-2  border-white py-3 min-w-32 rounded-md z-20 bg-primaryColor flex flex-col items-center gap-2 text-white">
                      <span
                        className="text-white text-2xl absolute top-0 left-0 border-r-2 border-b-2 border-white cursor-pointer"
                        onClick={() => setMenu(!menu)}
                      >
                        <IoClose />
                      </span>
                      <li className="border-b border-transparent hover:border-[#E3B577]">
                        <NavLink to={'/'}>Home</NavLink>
                      </li>
                      <li className="border-b border-transparent hover:border-[#E3B577]">
                        <NavLink to={'/view-profile'}>View Profile</NavLink>
                      </li>
                      <li className="border-b border-transparent hover:border-[#E3B577]">
                        <NavLink to={'/update-profile'}>Profile Update</NavLink>
                      </li>
                      <li
                        className="mt-1 sm:mt-0 bg-[#E3B577] px-7 py-2 md:py-2 rounded-sm font-bold text-sm cursor-pointer"
                        onClick={logOut}
                      >
                        Log Out
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink to={'/login'}>
                  <li className="border-2 mt-1 sm:mt-0 border-transparent hover:border-[#E3B577] bg-[#E3B577] hover:bg-transparent px-5 md:px-7 py-1 md:py-2 rounded-md font-bold active:scale-90 duration-200">
                    Login
                  </li>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
