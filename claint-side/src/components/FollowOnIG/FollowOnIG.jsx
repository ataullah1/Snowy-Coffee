import img1 from '../../assets/images/cups/Rectangle 10.png';
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
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
          <img className="rounded-lg w-full" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FollowOnIG;
