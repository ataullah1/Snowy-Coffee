import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Loding from '../pages/Loding/Loding';
import { useContext } from 'react';
import { ContextAuth } from '../provider/Provider';

const Root = () => {
  const { isLoading } = useContext(ContextAuth);

  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Nav />
      <div className="max-w-[1900px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
