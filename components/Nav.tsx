import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { GoDownload } from "react-icons/go";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const links = [
  {
    name: "Home",
    path: "#hero",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];

const Nav = () => {
  return (
    <>
      {/* desktop nav */}
      <nav className="hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <Link key={link.name} href={link.path} className="text-xl font-mono">
            {link.name}
          </Link>
        ))}

        <Button className="text-xl font-mono bg-teal-500 hover:bg-teal-600 gap-2">
          <GoDownload />
          Resume
        </Button>
      </nav>

      {/* mobile nav */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <HiOutlineMenuAlt3 size={24} />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader></SheetHeader>

            <nav className="h-full flex flex-col gap-4 items-center justify-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-xl font-mono text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="text-xl font-mono bg-teal-500 hover:bg-teal-600 gap-2">
                <GoDownload />
                Resume
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Nav;
