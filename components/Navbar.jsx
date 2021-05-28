import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Image src="/images/tree.webp" width={128} height={128} />
      </div>
      <div className="navbar__left">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
