import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-gray-300">      
        <div className="mt-12 py-8 border-t text-center text-xs text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved, YNP College of Pharmacy
        </div>
    </div>
  );
};

export default Footer;
