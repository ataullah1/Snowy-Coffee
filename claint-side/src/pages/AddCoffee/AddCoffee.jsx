import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/more/11.png';

const AddCoffee = () => {
  const textShadow = {
    textShadow:
      '2px 0px 5px #908380af, -2px 0px 4px #908380af, 0px 2px 4px #908380af',
  };
  return (
    <div className="relative">
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 right-0 w-full -z-10"
      />
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <Link to={'/'}>
          <button
            className="flex items-center gap-2 py-3 px-5 my-3 md:my-8 text-[#000000] w-44"
            style={textShadow}
          >
            <span>
              <FaArrowLeftLong />
            </span>
            <span className="text-xl">Back To Home</span>
          </button>
        </Link>
        <div className="w-full bg-[#F4F3F0] rounded-[5px] py-6 md:py-14 px-4 md:px-8 lg:px-16 mb-28 space-y-5">
          <h1
            className="text-[45px] text-primaryColor text-center"
            style={textShadow}
          >
            Add New Coffee
          </h1>
          <p className="max-w-[932px] text-center text-stone-900 text-opacity-70 sm:text-lg font-normal sm:leading-[30px] mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Name
                  </label>
                  <input
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    placeholder="Enter coffee name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Chef
                  </label>
                  <input
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    placeholder="Enter coffee chef"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Supplier
                  </label>
                  <input
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    placeholder="Enter coffee supplier"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Taste
                  </label>
                  <input
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    placeholder="Enter coffee taste"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Category
                  </label>
                  <input
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    placeholder="Enter coffee category"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Details
                  </label>
                  <input
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    placeholder="Enter coffee details"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                  Photo
                </label>
                <input
                  className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                  type="text"
                  placeholder="Enter photo URL"
                />
              </div>
              <button className="w-full py-1 bg-[#D2B48C] rounded-[5px] border-2 border-primaryColor text-primaryColor text-lg font-bold sm:text-2xl mb-5 md:mb-0">
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
