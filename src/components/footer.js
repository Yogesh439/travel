import React from 'react';
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Address: Kathmandu, Nepal</p>
            <p className="text-gray-400">Email: info@visitnepal.com</p>
            <p className="text-gray-400">Phone: +977-1234567890</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="text-gray-400"><a href="#">Home</a></li>
              <li className="text-gray-400"><a href="#">About Us</a></li>
              <li className="text-gray-400"><a href="#">Nepal Tour</a></li>
              <li className="text-gray-400"><a href="#">Treking</a></li>
              <li className="text-gray-400"><a href="#">Travel Info</a></li>
              <li className="text-gray-400"><a href="#">Peak Climbing</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <p className="flex items-center text-gray-400">Connect with us on
            <FaFacebook className="icon mx-1"/>
            <FaInstagram className="icon mx-1"/>
            <FaTwitter className="icon mx-1"/>
           </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300 transition duration-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
