'use client'
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, Search, Heart, X } from "lucide-react";
import { useState } from "react";
import TopHeader from "./TopHeader";
import Searchbar from "./searchBar";

function MyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="m-0 p-0 max-w-screen">
      {/* Top Header */}
      <TopHeader />

      {/* Main Navbar */}
      <div className="w-full md:w-[93%] mx-auto relative  text-sm font-semibold">
        <div className="flex justify-evenly  md:justify-between items-center h-[60px]">
          {/* Logo */}
          <div className="max-w-[38px]">
            <Image src="/images/logo2.png" alt="nike logo" width={58} height={20} />
          </div>

          {/* Nav Links for Large Screens */}
          <ul className="hidden lg:flex justify-evenly w-[50%]">
            <li>
              <Link href="/" className="hover:text-gray-500">Home</Link>
            </li>
            <li>
              <Link href="/Product_Details" className="hover:text-gray-500">
                Product Details
              </Link>
            </li>
            <li>
              <Link href="/Men" className="hover:text-gray-500">Men</Link>
            </li>
            <li>
              <Link href="/ContactUs" className="hover:text-gray-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/Signin" className="hover:text-gray-500">Sign Up</Link>
            </li>
            <li>
              <Link href="/Login" className="hover:text-gray-500">Login</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex justify-between items-center w-auto  md:w-[60%] lg:w-[25%] gap-4">
            {/* Search Bar */}
            <div className="">
            <Searchbar/></div>

            {/* Icons */}
            <Link href="/Product_Details"><Heart className="cursor-pointer" /></Link>
            <Link href="/Men"><ShoppingBag className="cursor-pointer" /></Link>

            {/* Menu Icon for Small Screens */}
            <div
              className="lg:hidden cursor-pointer bg-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md z-10 lg:hidden">
            <ul className="flex flex-col items-center py-6 space-y-4">
              <li>
                <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Product_Details" className="hover:text-gray-500" onClick={toggleMenu}>
                  Product Details
                </Link>
              </li>
              <li>
                <Link href="/Men" className="hover:text-gray-500" onClick={toggleMenu}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="/ContactUs" className="hover:text-gray-500" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/Signin" className="hover:text-gray-500" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/Login" className="hover:text-gray-500" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/Products" className="hover:text-gray-500" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/CheckOut" className="hover:text-gray-500" onClick={toggleMenu}>
                  CheckOut
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default MyNav;
