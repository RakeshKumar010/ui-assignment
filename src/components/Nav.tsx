import logo from "../assets/Frame 1073714022.png";
const Nav = () => {
  return (
    <>
      {screen.availWidth <= 1200 ? (
        <>
          <div className="flex justify-between  items-center">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="logo" />
            </div>
            <i className="fa-solid fa-bars mr-1 text-3xl"></i>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-around m-10  items-center">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="" />
            </div>
            <ul className="flex gap-4 ">
              <li className=" hover:bg-gray-900 hover:cursor-pointer  p-3 rounded-full">Solutions</li>
              <li className=" hover:bg-gray-900 hover:cursor-pointer  p-3 rounded-full">Services</li>
              <li className=" hover:bg-gray-900 hover:cursor-pointer  p-3 rounded-full">About</li>
              <li className=" hover:bg-gray-900 hover:cursor-pointer  p-3 rounded-full">Culture</li>
            </ul>
            <div className="flex gap-3 items-center">
              <button className="p-3 bg-gray-900 rounded-full">
                Contact us
              </button>
              <i className="fa-solid fa-arrow-right p-3 bg-gray-900 rounded-full"></i>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
