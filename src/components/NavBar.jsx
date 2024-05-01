import logo from "../assets/LOGO.svg";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="flex bg-stone-950  ">
      <div className=" container mx-auto  justify-between">
        <div>
          <div>
            <div className=" container mx-auto ">
              <Link to={"/"} className="justify-center ">
                <img src={logo} alt="logo"  className="w-[150px] "/>
              </Link>
            </div>
            
          </div>
          <div >
            <div  className="">
              <ul className="flex  container mx-auto  pb-2 gap-4 justify-around">
                <li >
                  <NavLink to={"/"} className=" text-3xl text-gray-200">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/categoria/SUV"}
                    className=" text-3xl text-gray-200"
                  >
                    SUV
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/categoria/SEDAN"}
                    className=" text-3xl text-gray-200"
                  >
                    SEDAN
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/categoria/PickUp"}
                    className=" text-3xl text-gray-200"
                  >
                    PICKUP
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
