import { useMemo, useState } from "react";
import NavItem from "./NavItem";

const navArr = [
  {
    id: 0,
    link: "/",
    name: "Index",
  },
  {
    id: 1,
    link: "/newest",
    name: "New",
  },
  {
    id: 2,
    link: "/ask",
    name: "Ask",
  },
  {
    id: 3,
    link: "/show",
    name: "Show",
  },
  {
    id: 4,
    link: "/jobs",
    name: "Jobs",
  }
];

const Navbar = () => {
  return (
    <nav className="sticky top-2 backdrop-blur-md z-10 mt-6 flex justify-evenly items-center font-bold w-96 h-12 shadow-lg text-[#FF6600] rounded-[30px]">
      {navArr.map((item) => (
        <div key={item.id}>
          <NavItem key={item.id} link={item.link} name={item.name} />
        </div>
      ))}
    </nav>
  )
}

export default Navbar;