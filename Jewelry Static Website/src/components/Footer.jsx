import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
   <footer className="bg-[#2d2c2c] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        {/* Logo + About */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4 tracking-wide">
            Tanishq<span className="text-yellow-500"> Collections</span>
          </h1>
          <p className="text-sm leading-6">
            Discover timeless elegance and handcrafted jewelry that reflects the
            beauty of every occasion. Crafted with passion, inspired by you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-yellow-500 duration-200">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500 duration-200">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-500 duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500 duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Customer Care</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-yellow-500 duration-200">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-500 duration-200">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-yellow-500 duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500 duration-200">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 duration-200">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 duration-200">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 duration-200">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 duration-200">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tanishq Collections. All Rights Reserved.
      </div>
    </footer>
  );
}
