import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/more/11.png';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const textShadow = {
    textShadow:
      '2px 0px 5px #908380af, -2px 0px 4px #908380af, 0px 2px 4px #908380af',
  };

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const dta = e.target;
    const name = dta.name.value;
    const chef = dta.chef.value;
    const supplier = dta.supplier.value;
    const taste = dta.taste.value;
    const category = dta.category.value;
    const details = dta.details.value;
    const photo = dta.photo.value;
    const price = dta.price.value;
    const formData = {
      name,
      chef,
      supplier,
      taste,
      category,
      photo,
      price,
      details,
    };
    // console.log(formData);
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((dta) => {
        // console.log(dta);
        if (dta.acknowledged) {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your Coffee has been successfully Added',
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
    dta.reset();
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
            <form className="flex flex-col gap-5" onSubmit={handleAddCoffee}>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Name
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Chef
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="chef"
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
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Taste
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="taste"
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
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="category"
                    placeholder="Enter coffee category"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Price
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="price"
                    placeholder="Enter coffee price"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Photo
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Details
                  </label>
                  <textarea
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none min-h-10 h-10"
                    name="details"
                    placeholder="Enter coffee details"
                  ></textarea>
                  {/* <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="details"
                    placeholder="Enter coffee details"
                  /> */}
                </div>
              </div>

              <button className="w-full py-1 bg-[#D2B48C] rounded-[5px] border-2 border-primaryColor text-primaryColor text-lg font-bold sm:text-2xl mb-5 md:mb-0 active:-skew-x-[30deg] duration-200">
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
