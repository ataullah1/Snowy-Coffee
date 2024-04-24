import { BiEdit } from 'react-icons/bi';
import img1 from '../../assets/images/more/11.png';
import { BsTrash } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';
const Users = () => {
  const userData = useLoaderData();
  // console.log(userData);
  return (
    <div className="relative">
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 right-0 w-full -z-10"
      />
      <div className=" w-11/12 lg:w-10/12 mx-auto">
        <h1 className="text-6xl font-bold text-center py-3">All Users Data</h1>
        <div className="overflow-x-auto border-2 border-primaryColor rounded-lg mt-5 mb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-primaryColor text-white font-semibold text-lg">
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Last SignIn</th>
                <th className="w-2">Edit</th>
                <th className="w-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((dta, i) => (
                <tr className="hover" key={dta._id}>
                  <th>{i + 1}</th>
                  <td className="">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={dta.resPhoto}
                      alt=""
                    />
                  </td>
                  <td>{dta.resName}</td>
                  <td>{dta.resEmail}</td>
                  <td>{dta.lastSignInDate}</td>
                  <td className="text-center">
                    <button className="text-2xl">
                      <BiEdit />
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="text-2xl hover:text-red-400">
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
