import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from 'react-icons/fa';
import bgImg from '../../assets/images/more/13.jpg';
import logo1 from '../../assets/images/more/logo1.png';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  const textShadow = {
    textShadow:
      '2px 0px 5px #908380af, -2px 0px 4px #908380af, 0px 2px 4px #908380af',
  };
  return (
    <footer
      className="bg-neutral-900 text-white bg-cover w-full"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="w-11/12 lg:w-10/12 max-w-[1900px] mx-auto">
        <div className="pb-5 sm:pb-10 pt-20 sm:pt-24">
          <img className="w-14 md:w-[75px]" src={logo1} alt="" />
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-3/5 space-y-6">
              <h1 className="text-[45px] text-primaryColor" style={textShadow}>
                Snowy Coffee
              </h1>
              <p className="max-w-[663px] text-stone-900 text-base sm:text-xl font-normal leading-9">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex items-center gap-5 text-3xl text-primaryColor">
                <span className="hover:scale-125 duration-200 cursor-pointer">
                  <FaFacebook />
                </span>
                <span className="hover:scale-125 duration-200 cursor-pointer">
                  <FaTwitter />
                </span>
                <span className="hover:scale-125 duration-200 cursor-pointer">
                  <FaInstagram />
                </span>
                <span className="hover:scale-125 duration-200 cursor-pointer">
                  <FaLinkedin />
                </span>
              </div>{' '}
              <h1 className="text-[45px] text-primaryColor" style={textShadow}>
                Get in Touch
              </h1>
              <div className="flex flex-col gap-3">
                <div className="text-stone-900 flex items-center gap-6">
                  <span className="text-primaryColor text-2xl">
                    <IoCall />
                  </span>
                  <span>+880 1719-199967</span>
                </div>
                <div className="text-stone-900 flex items-center gap-6">
                  <span className="text-primaryColor text-2xl">
                    <MdEmail />
                  </span>
                  <span>ataullahm100@gmail.com</span>
                </div>
                <div className="text-stone-900 flex items-center gap-6">
                  <span className="text-primaryColor text-2xl">
                    <FaLocationArrow />
                  </span>
                  <span>Mirpur-10, Dhaka, Bangladesh </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <h1 className="text-[45px] text-primaryColor" style={textShadow}>
                Connect with Us
              </h1>
              <div>
                <form className="flex flex-col gap-4">
                  <input
                    className="py-2 px-4 text-stone-900 text-opacity-60 text-base font-normal outline-none rounded-md shadow-sm"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="py-2 px-4 text-stone-900 text-opacity-60 text-base font-normal outline-none rounded-md shadow-sm"
                    type="email"
                    placeholder="Email"
                  />
                  <textarea
                    className="py-2 px-4 text-stone-900 text-opacity-60 text-base font-normal outline-none rounded-md shadow-sm h-40"
                    name="message"
                    placeholder="Message"
                    id=""
                  ></textarea>
                  <button className="text-primaryColor py-1 px-4 rounded-full text-center border-2 border-primaryColor w-44 text-2xl font-normal hover:translate-x-4 duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-[#372727] py-3 text-center text-white text-base sm:text-xl font-normal italic">
        Copyright © Snowy Coffee - All right reserved by{' '}
        <a
          href="https://www.facebook.com/ataullah0"
          className="text-pink-500 italic font-semibold tracking-wide"
        >
          Md Ataullah
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
