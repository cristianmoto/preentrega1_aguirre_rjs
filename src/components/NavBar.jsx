
import LogoAuto from "./LogoAuto";
import Links from "./Links";
import Cart from "./Cart";



const NavBar = () => {
  return (
    <nav className="flex bg-blue-950  justify-between ">
     
<LogoAuto/>
<Links/>
<Cart/>
     
    </nav>
  );
};

export default NavBar;
