import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between p-3 place-items-center">
      <h2 className="sm:ml-40 text-slate-400 font-medium text-xl">
        Resume<span className="text-blue-600">4u</span>
      </h2>
      <nav className="font-semibold ">
        <li className="hidden sm:flex gap-10">
          <a href="/">
            <ul>Home</ul>
          </a>
          <a href="/resume">
            <ul>Resume</ul>
          </a>
          <a href="/coverLetter">
            <ul>Cover Letter</ul>
          </a>
          <a href="/templates">
            <ul>Templates</ul>
          </a>
        </li>
      </nav>
      <div className="hidden sm:flex gap-8">
        <button className="font-bold text-blue-600">Login</button>
        <button className="bg-blue-600 text-white font-semibold rounded-lg mr-40 p-2 pr-5 pl-5">
          Sign up
        </button>
      </div>
      <button className="sm:hidden block">
        <Hamburger toggled={isOpen} toggle={setOpen} size={19} />
      </button>
    </header>
  );
};

export default Header;
