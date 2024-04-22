import img1 from '../../assets/images/icons/1.png';
import img2 from '../../assets/images/icons/2.png';
import img3 from '../../assets/images/icons/3.png';
import img4 from '../../assets/images/icons/4.png';
const SubBanner = () => {
  return (
    <div className="w-full bg-[#ECEAE3] py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between text-center sm:text-left">
        <div>
          <img
            className="h-14 md:h-[70] w-14 md:w-[70] mx-auto sm:mx-0"
            src={img1}
            alt=""
          />
          <h2 className="text-primaryColor text-[35px] font-normal">
            Awesome Aroma
          </h2>
          <p className="max-w-[301px] mx-auto sm:mx-0 text-stone-900 text-base font-normal">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img
            className="h-14 md:h-[70] w-14 md:w-[70] mx-auto sm:mx-0"
            src={img2}
            alt=""
          />
          <h2 className="text-primaryColor text-[35px] font-normal">
            Awesome Aroma
          </h2>
          <p className="max-w-[301px] mx-auto sm:mx-0 text-stone-900 text-base font-normal">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img
            className="h-14 md:h-[70] w-14 md:w-[70] mx-auto sm:mx-0"
            src={img3}
            alt=""
          />
          <h2 className="text-primaryColor text-[35px] font-normal">
            Awesome Aroma
          </h2>
          <p className="max-w-[301px] mx-auto sm:mx-0 text-stone-900 text-base font-normal">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img
            className="h-14 md:h-[70] w-14 md:w-[70] mx-auto sm:mx-0"
            src={img4}
            alt=""
          />
          <h2 className="text-primaryColor text-[35px] font-normal">
            Awesome Aroma
          </h2>
          <p className="max-w-[301px] mx-auto sm:mx-0 text-stone-900 text-base font-normal">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
