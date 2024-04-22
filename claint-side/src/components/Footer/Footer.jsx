import bgImg from '../../assets/images/more/13.jpg';
import logo1 from '../../assets/images/more/logo1.png';
const Footer = () => {
  return (
    <footer
      className="bg-neutral-900 text-white bg-cover w-full"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="pb-5 sm:pb-10 pt-20 sm:pt-24">
          <img className="w-14 md:w-[75px]" src={logo1} alt="" />
        </div>
        <p>
          Copyright © 2024 - All right reserved by{' '}
          <a
            href="https://www.facebook.com/ataullah0"
            className="text-pink-500 italic font-semibold tracking-wide"
          >
            Md Ataullah
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
