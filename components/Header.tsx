"use client";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Container from "./Container";
import logoHTS from "@/images/icon/icon.png";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* top-bar hotline */}
      <div className="bg-blue-800 text-white">
        <Container className="flex h-8 items-center justify-end px-6">
          <p className="text-xs font-semibold tracking-wider">
            HOTLINE: 0901.355.688
          </p>
        </Container>
      </div>

      {/* Header logo và menu */}
      <div className="bg-white">
        <Container>
          <MobileMenu />
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
            <div className="flex h-full flex-1 items-center justify-end">
              <HeaderMenu />
              <CartIcon />
              <div className="ml-4">
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-4 py-2 rounded-full bg-orange-400 text-white font-semibold hover:bg-orange-600 transition">
                      Đăng nhập
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
