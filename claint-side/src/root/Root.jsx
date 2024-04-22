import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-[1700px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
