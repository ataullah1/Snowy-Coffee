import img1 from '../../assets/images/more/11.png';
const Users = () => {
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
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
