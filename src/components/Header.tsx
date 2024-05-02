import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between p-3 place-items-center">
      <h2 className="sm:ml-40 text-slate-400 font-medium text-xl">
        <Link to={"/"}>
          Resume<span className="text-blue-600">4u</span>
        </Link>
      </h2>
      <nav className="font-semibold">
        <li className="hidden sm:flex gap-10">
          <Link to="/">
            <ul>Home</ul>
          </Link>
          <Link to="/resume">
            <ul>Resume</ul>
          </Link>
          <Link to="/coverLetter">
            <ul>Cover Letter</ul>
          </Link>
          <Link to="/templates">
            <ul>Templates</ul>
          </Link>
        </li>
      </nav>
      <div className="hidden sm:flex gap-8">
        <button className="font-bold text-blue-600"><Link to={"/login"}>Login</Link></button>
        <button className="bg-blue-600 text-white font-semibold rounded-lg mr-40 p-2 pr-5 pl-5">
          <Link to={"/signup"}>Sign up</Link>
        </button>
      </div>
      <button className="sm:hidden block">
        <Hamburger toggled={isOpen} toggle={setOpen} size={19} />
      </button>
    </header>
  );
};

export default Header;
