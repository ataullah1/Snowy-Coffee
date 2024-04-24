import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ContextAuth } from '../provider/Provider';

const PrivetRoute = ({ children }) => {
  const { userDta } = useContext(ContextAuth);
  const location = useLocation();
  //   console.log(location.pathname);

  if (userDta) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'} />;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
