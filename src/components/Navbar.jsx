import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="min-w-full py-3 px-6">
      <img className="w-28 cursor-pointer" src={Logo} alt="logo" />
    </div>
  );
};

export default Navbar;
