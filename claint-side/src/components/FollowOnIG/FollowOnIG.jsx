import img1 from '../../assets/images/cups/Rectangle 10.png';
import img2 from '../../assets/images/cups/Rectangle 11.png';
import img3 from '../../assets/images/cups/Rectangle 12.png';
import img4 from '../../assets/images/cups/Rectangle 13.png';
import img5 from '../../assets/images/cups/Rectangle 14.png';
import img6 from '../../assets/images/cups/Rectangle 15.png';
import img7 from '../../assets/images/cups/Rectangle 16.png';
import img8 from '../../assets/images/cups/Rectangle 9.png';
const FollowOnIG = () => {
  const textShadow = {
    textAlign: 'center',
    textShadow:
      '2px 0px 5px #908380af, -2px 0px 4px #908380af, 0px 2px 4px #908380af',
  };
  return (
    <div className="mb-24">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="mb-10">
          <p className="text-center text-xl font-normal">Follow Us Now</p>
          <h1
            className="text-primaryColor text-[55px] font-normal"
            style={textShadow}
          >
            Follow on Instagram
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img1}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img2}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img3}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img4}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img5}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img6}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img7}
            alt=""
          />
          <img
            className="rounded-lg w-full hover:scale-105 duration-200"
            src={img8}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FollowOnIG;
