'use client'
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-blue-800 p-1">
      <h6 className="font-sans text-white text-sm	">Booking Open !!</h6>
      <div className="flex items-center  text-white">
        <FaPhoneAlt className="mr-1 text-sm" />
        <h6 className="font-sans text-sm">+977 9863855065</h6>
      </div>
    </div>
  );
}
