"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className=" w-full z-50 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 px-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              Doctors<span className="text-cyan-400">Point</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/5 backdrop-blur-md font-medium">
                <li>
                  <Link
                    href="/"
                    className={`transition duration-300 ${
                      isActive("/")
                        ? "text-cyan-400 font-semibold"
                        : "hover:text-cyan-400"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className={`transition duration-300 ${
                      isActive("/about")
                        ? "text-cyan-400 font-semibold"
                        : "hover:text-cyan-400"
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Consultant"
                    className={`transition duration-300 ${
                      isActive("/Consultant")
                        ? "text-cyan-400 font-semibold"
                        : "hover:text-cyan-400"
                    }`}
                  >
                    Consultant
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={`transition duration-300 ${
                      isActive("/contact")
                        ? "text-cyan-400 font-semibold"
                        : "hover:text-cyan-400"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="flex  gap-2">
                <Link
                  href="/register"
                  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full text-white font-medium transition shadow-md"
                >
                  Register
                </Link>
                <Link
                  href="/register"
                  className=" border-2 border-cyan-500 hover:bg-cyan-600 hover:text-white px-5 py-2 rounded-full  font-medium transition shadow-md"
                >
                  Get Start
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            >
              {open ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-500 md:hidden z-40 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={isActive("/") ? "text-cyan-400 font-semibold" : ""}
        >
          Home
        </Link>

        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <Link href="/Consultant" onClick={() => setOpen(false)}>
          Consultant
        </Link>

        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>

        <Link
          href="/register"
          onClick={() => setOpen(false)}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg transition"
        >
          Register
        </Link>
        <Link
          href="/register"
          className=" border-2 border-cyan-500 hover:bg-cyan-600 hover:text-white px-5 py-2 rounded-full  font-medium transition shadow-md"
        >
          Get Start
        </Link>
      </div>
    </>
  );
}
