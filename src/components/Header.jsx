import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="bg-[#2699fb]  p-4">
      <div className="max-w-[1240px] py-[12px] items-center  flex justify-between mx-auto">
        <div className="text-3xl font-semibold">WsCube Tech</div>
        {toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive Menu */}

        <ul
          className={`duration-[400ms] md:hidden w-full h-screen text-white fixed bg-black top-[92px]
        ${toggle ? "left-[-100%]" : "left-[0] "}`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
