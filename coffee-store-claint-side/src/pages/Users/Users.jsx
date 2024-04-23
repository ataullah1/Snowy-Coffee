import img1 from '../../assets/images/more/11.png';
const Users = () => {
  return (
    <div className="relative">
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 right-0 w-full -z-10"
      />
      <h1 className="text-6xl font-bold text-center py-3">
        This is Users Section.
      </h1>
    </div>
  );
};

export default Users;
