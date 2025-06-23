"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAllCategories, CATEGORIES_QUERYResult } from "@/sanity/lib/client";
import { navLinks } from "@/constants/index";

const HeaderMenu = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<CATEGORIES_QUERYResult>([]);
  console.log(pathname);
  useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);

  return (
    <nav className="hidden md:flex h-full items-center gap-4 text-sm font-semibold text-gray-700">
      {navLinks.map((link) => {
        if (link.title === "Sản Phẩm") {
          return (
            <div
              key={link.title}
              className="group relative flex h-full items-center"
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 transition-colors hover:text-orange-500",
                  pathname === link.href && "text-orange-500 font-bold"
                )}
              >
                {link.title}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 z-20 hidden w-56 rounded-md border bg-white py-2 shadow-lg group-hover:block">
                {categories?.map((category) => (
                  <Link
                    key={category?._id}
                    href={`/san-pham/${category?.slug?.current}`}
                    className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600
                      ${pathname === `/san-pham/${category?.slug?.current}` && "text-orange-500 font-bold"}`}
                  >
                    {category?.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div
            key={link.title}
            className="group relative flex h-full items-center"
          >
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-1 px-3 py-2 transition-colors hover:text-orange-500",
                pathname === link.href && "text-orange-500 font-bold"
              )}
            >
              {link.title}
              {link.subLinks && (
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              )}
            </Link>
            {link.subLinks && (
              <div className="absolute top-full left-0 z-20 hidden w-56 rounded-md border bg-white py-2 shadow-lg group-hover:block">
                {link.subLinks.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.href}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;
