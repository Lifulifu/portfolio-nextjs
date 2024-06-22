import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/button";
import { GoDownload } from "react-icons/go";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Hero() {
  return (
    <WavyBackground
      className="container flex flex-col items-center gap-8 pt-20"
      backgroundFill="#0f172a"
      blur={2}
      waveWidth={5}
    >
      <h1 className="font-mono text-center text-5xl sm:text-6xl tracking-wide">
        Hello, I am <span className="text-teal-400 font-bold">Lifu Hsieh</span>
      </h1>

      <p className="text-xl text-center text-slate-400 font-mono max-w-2xl">
        A software engineer with a deep enthusiasm for exploring new
        technologies across diverse fields, from full-stack web development to
        AI.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link href="https://github.com/lifulifu">
          <Button variant="outline" size="icon">
            <FaGithub size={28} />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/立凡-謝-375b42115">
          <Button variant="outline" size="icon">
            <FaLinkedin size={28} />
          </Button>
        </Link>
        <Link href="https://x.com/hotatetahomain">
          <Button variant="outline" size="icon">
            <FaTwitter size={28} />
          </Button>
        </Link>
      </div>

      <Link href="/resume.pdf">
        <Button
          size="lg"
          className="text-xl font-mono bg-teal-500 hover:bg-teal-600 gap-2"
        >
          <GoDownload />
          Resume
        </Button>
      </Link>
    </WavyBackground>
  );
}

export default Hero;
