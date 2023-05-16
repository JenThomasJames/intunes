import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="min-w-full py-3 px-6 flex justify-between items-center">
      <img className="w-28 cursor-pointer" src={Logo} alt="logo" />
      <ul className="flex gap-5">
        <li>
          <Button>Downloader</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
