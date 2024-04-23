import { FaArrowLeftLong } from 'react-icons/fa6';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import errImg from '../../assets/images/404/404.gif';

const ErrorPage = () => {
  const textShadow = {
    textShadow:
      '2px 0px 5px #908380af, -2px 0px 4px #908380af, 0px 2px 4px #908380af',
  };
  return (
    <div>
      <Nav />

      <div className="min-h-[calc(100vh-96px)]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <Link to={'/'}>
            <button
              className="flex items-center gap-2 py-3 px-5 my-3 md:my-5 text-[#000000] w-44 mx-auto"
              style={textShadow}
            >
              <span>
                <FaArrowLeftLong />
              </span>
              <span className="text-2xl">Back To Home</span>
            </button>
          </Link>
          <div className="text-center">
            <img className="mx-auto" src={errImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
