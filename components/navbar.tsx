import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-5 bg-slate-200 fixed top-0 right-0 z-50 w-full">
      <div className="container">
        <Link href="/">MDX</Link>
      </div>
    </nav>
  );
};

export default Navbar;
