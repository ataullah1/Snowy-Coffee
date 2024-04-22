import { BsCupHot, BsEye } from 'react-icons/bs';
import cup1 from '../../assets/images/6.png';
import img1 from '../../assets/images/more/4.png';
import img2 from '../../assets/images/more/5.png';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const OurPopularProducts = () => {
  const textShadow = {
    textAlign: 'center',
    textShadow:
      '2px 0px 5px #908380af, -2px 0px 4px #908380af, 0px 2px 4px #908380af',
  };
  return (
    <div className="mt-16 pb-24 md:mt-24 relative">
      <img
        className="hidden sm:block w-44 absolute top-16 left-0"
        src={img1}
        alt=""
      />
      <img
        className="hidden sm:block w-72 z-10 absolute bottom-0 right-0"
        src={img2}
        alt=""
      />
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div>
          <p className="text-center text-xl font-normal">--- Sip & Savor ---</p>
          <h1
            className="text-primaryColor text-[55px] font-normal"
            style={textShadow}
          >
            Our Popular Products
          </h1>
          <Link to={'/add-coffee'}>
            <button className="w-[150px] h-12 bg-orange-300 rounded-[5px] border-2 border-primaryColor text-white text-2xl font-normal flex items-center justify-center gap-2 mx-auto mt-2 mb-14 hover:-skew-x-12 duration-200">
              <span style={textShadow}>Add Coffee</span>
              <span className="text-primaryColor">
                <BsCupHot />
              </span>
            </button>
          </Link>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="w-full max-w-[648px] mx-auto lg:mx-0 p-4 sm:p-6 bg-[#F5F4F1] rounded-[10px] flex flex-col sm:flex-row items-center gap-5">
            <div className="sm:w-[30%]">
              <img className="w-full h-auto" src={cup1} />
            </div>
            <div className="sm:w-[60%] flex-col flex gap-1">
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Name: </span>
                <span className="text-opacity-70 font-normal">
                  Americano Coffee
                </span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Chef: </span>
                <span className="text-opacity-70  font-normal ">
                  Mr. Matin Paul
                </span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Price: </span>
                <span className="text-opacity-70 font-normal">890 Taka</span>
              </p>
            </div>
            <div className="text-white flex flex-row sm:flex-col gap-5 sm:w-[10%] sm:items-end mb-2 z-30">
              <Link to={'/coffee-details'}>
                <button className="w-10 h-10 bg-[#D2B48C] rounded-[5px] text-xl flex items-center justify-center">
                  <BsEye />
                </button>
              </Link>
              <Link to={'/coffee-info-update'}>
                <button className="w-10 h-10 bg-black rounded-[5px] text-xl flex items-center justify-center">
                  <FaPen />
                </button>
              </Link>

              <button className="w-10 h-10 bg-red-500 rounded-[5px] text-xl flex items-center justify-center">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPopularProducts;
