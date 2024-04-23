import { FaArrowLeftLong } from 'react-icons/fa6';
import img1 from '../../assets/images/more/11.png';
import cup1 from '../../assets/images/6.png';
import { Link, useLoaderData, useParams } from 'react-router-dom';
const CoffeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const findDta = data.find((dta) => dta._id === id);
  const { name, chef, details, price, category, taste, supplier, photo } =
    findDta;
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
        <div className="w-full bg-[#F4F3F0] rounded-[5px] p-6 md:py-16 md:px-14 mb-28 flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div className="w-full md:w-2/5">
            <img
              className="h-auto w-[200px] md:w-[300px] mx-auto"
              src={photo || cup1}
            />
          </div>
          <div className="w-full md:w-3/5 space-y-5 md:space-y-8">
            <h1
              style={textShadow}
              className="text-primaryColor text-4xl font-normal"
            >
              Niceties
            </h1>
            <div className="sm:w-full flex-col flex gap-1">
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Name: </span>
                <span className="text-opacity-70 font-normal">{name}</span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Chef: </span>
                <span className="text-opacity-70  font-normal ">{chef}</span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Supplier </span>
                <span className="text-opacity-70 font-normal">{supplier}</span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Taste: </span>
                <span className="text-opacity-70 font-normal">{taste}</span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Category: </span>
                <span className="text-opacity-70 font-normal">{category}</span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Price: </span>
                <span className="text-opacity-70 font-normal">
                  {price} Taka
                </span>
              </p>
              <p className="text-primaryColor text-xl">
                <span className="font-semibold">Details: </span>
                <span className="text-opacity-70 font-normal">{details}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
