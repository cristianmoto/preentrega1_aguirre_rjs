import logo from "../assets/LOGO.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex bg-stone-950  ">
      <div className=" container mx-auto  justify-around">
        <div>
          <Link to={"/"} >
            <img src={logo} alt="logo" className="w-[250px] " />
          </Link>
        </div>

        <ul className="flex  container mx-auto   justify-center gap-5">
          <li>
            <NavLink to={"/"} className=" text-3xl text-gray-200">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/SUV"} className=" text-3xl text-gray-200">
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
    </nav>
  );
};

export default NavBar;
