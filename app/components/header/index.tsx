import React from "react";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <header className="bg-background flex justify-between items-center px-6 py-4 fixed w-full z-10 shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2"
            alt="perspective logo"
            width={32}
            height={32}
          />
        </Link>
        <h2 className="ml-4 text-primary text-xl font-semibold">Perspective</h2>
      </div>
      <button
        className="text-background py-1.5 px-4 rounded-lg bg-accent hover:bg-accent-hover"
      >
        Upload Another Funnel
      </button>
    </header>
  );
}

export default Header;