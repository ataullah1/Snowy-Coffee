import logo1 from '../../assets/images/more/logo1.png';
const Nav = () => {
  return (
    <div className="bg-[#372727] py-2">
      <div className="flex gap-2 items-center justify-center">
        <img className="h-16 md:h-20" src={logo1} alt="" />
        <h1 className="text-white text-6xl font-normal">Snowy Coffee</h1>
      </div>
    </div>
  );
};

export default Nav;
