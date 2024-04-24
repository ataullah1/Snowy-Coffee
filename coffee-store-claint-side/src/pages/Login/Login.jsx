import { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { ContextAuth } from '../../provider/Provider';
import Loding from '../Loding/Loding';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/more/11.png';
// Sweetalert import
import Swal from 'sweetalert2';
const Login = () => {
  // Naviget, login done then go to Home
  const naviget = useNavigate();
  // console.log(location);
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);

  const { googleLogin, emlPassLogin, isLoading, userDta, setIsLoading } =
    useContext(ContextAuth);

  console.log(userDta);
  useEffect(() => {
    if (userDta) {
      naviget('/');
      // console.log('login to home');
    }
  }, [naviget, userDta]);

  const handleLoginSubmit = (e) => {
    setEmailErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const email = formDta.get('email');
    const pass = formDta.get('password');
    // console.log(email, pass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (pass.length < 6) {
      setPassErr('Please enter a valid password.');
      return;
    }
    // Email password Login
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
        timer: 1500,
      });
      naviget('/');
      return;
    } else {
      emlPassLogin(email, pass)
        .then((res) => {
          console.log(res.user);
          const firstSignInDate = res.user.metadata?.lastSignInTime;

          const resEmail = res.user.email || email;
          const data = { firstSignInDate, resEmail };
          fetch('https://coffee-store-serve-side.vercel.app/users', {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((dta) => {
              console.log(dta);
            });
          Swal.fire({
            title: 'Good job!',
            text: 'Your account has been successfully logged in.',
            icon: 'success',
            timer: 1500,
          });
          naviget('/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setIsLoading(false);
          Swal.fire({
            title: 'Oops...!',
            text: 'Sorry, your account could not be logged in!',
            icon: 'error',
            timer: 1500,
          });
        });
    }
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
      });
      naviget('/');
      return;
    }
    socialLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
        naviget('/');
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div className="py-8 relative">
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 right-0 w-full -z-10"
      />
      <div
        data-aos="zoom-in"
        className="w-full mt-2 md:max-w-[720px] mx-auto rounded-lg p-5"
      >
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-redLi inline-block pr-3">
          Login Your Account
        </h1>
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <div>
            <label
              className={
                emailErr
                  ? 'input input-bordered flex items-center gap-2 border-red-500'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <MdEmail />
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            {emailErr && (
              <p className="text-sm text-red-500 italic">{emailErr}</p>
            )}
          </div>
          <div>
            <label className="relative input input-bordered flex items-center gap-2">
              <RiLockPasswordFill />
              <input
                type={eye ? 'text' : 'password'}
                className="grow"
                name="password"
                placeholder="Password"
              />
              <div
                onClick={() => setEye(!eye)}
                className="cursor-pointer text-xl absolute right-3"
              >
                {eye ? <FaEye /> : <FaEyeSlash />}
              </div>
            </label>{' '}
            {passErr && (
              <p className="text-sm text-red-500 italic">{passErr}</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="cursor-pointer form-checkbox text-redLi focus:ring-redLi h-4 w-4"
              />{' '}
              <label>Remember me</label>
            </div>

            <p className="underline cursor-pointer">Forgot Password</p>
          </div>
          {/* <input type="submit" value="Login" /> */}
          <button className="w-full py-1 px-4 rounded-md text-center text-primaryColor font-bold hover:bg-[#E3B577] active:scale-95 duration-150 cursor-pointer hover:bg-transparent border-2 border-primaryColor">
            Login
          </button>
        </form>{' '}
        <p className="pt-3">
          {`Don't have an account? `}
          <Link to={'/register'} className="underline text-primaryColor">
            Create Account
          </Link>
        </p>
        <div className="divider before:bg-redLi after:bg-redLi divider-secondary">
          Or
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => socialLogin(googleLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-2 border-redLi"
          >
            <span className=" text-2xl">
              <FcGoogle />
            </span>
            Login With Google
          </button>
          <button
            // onClick={() => socialLogin(gitHubLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-2 border-redLi"
          >
            <span className="text-black text-2xl">
              <FaGithub />
            </span>
            Login With GitHub
          </button>
          <button
            // onClick={() => socialLogin(twitterLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-400-900/20 rounded-md  flex items-center justify-center gap-2 border-redLi"
          >
            <span className="text-blue-400 text-2xl">
              <FaTwitter />
            </span>
            Login With Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
