import React from "react";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Container from "./Container";
import logoHTS from "@/images/icon/icon.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* top-bar hotline */}
      <div className="bg-blue-800 text-white">
        <Container className="flex h-8 items-center justify-end px-6">
          <p className="text-xs font-semibold tracking-wider">
            HOTLINE: 1900 2929 62
          </p>
        </Container>
      </div>

      {/* Header logo và menu */}
      <div className="bg-white">
        <Container>
          <div className="flex h-20 items-center justify-between gap-8 px-2">
            {/* Logo */}
            <Link href="/" passHref>
              <div className="flex-shrink-0 cursor-pointer  ">
                <Image
                  src={logoHTS}
                  alt="HILO Logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Menu điều hướng */}
            <div className="flex h-full flex-1 items-center justify-end">
              <HeaderMenu />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
