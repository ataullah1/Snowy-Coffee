import bannerImg from '../../assets/images/more/bannerimg.png';

const Banner = () => {
  return (
    <div
      className="h-[300px] md:min-h-[calc(100vh-96px)]  bg-cover bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="md:w-1/4 lg:w-2/5 h-full"></div>
      <div className=" md:w-9/12 lg:w-3/5 p-5 md:pr-16 text-center md:text-left">
        <h1 className="text-white text-4xl md:text-[55px] font-normal leading-[50px] md:leading-[65px]">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="max-w-[724px] text-white text-base font-normal pt-2 md:pt-4 pb-4 md:pb-8">{`It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.`}</p>
        <button className="text-primaryColor text-xl md:text-2xl font-normal bg-[#E3B577] px-5 py-1 hover:-skew-x-[20deg] duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
