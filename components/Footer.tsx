import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black py-12 mt-12 bg-gradient-to-t from-black to-slate-900">
      <div className="container flex items-center justify-center gap-2">
        <p className="text-slate-400">Made by Lifu - 2024</p>
        <p>|</p>
        <FaGithub />
        <Link href="https://github.com/Lifulifu/portfolio-nextjs">Github</Link>
      </div>
    </div>
  );
};

export default Footer;
