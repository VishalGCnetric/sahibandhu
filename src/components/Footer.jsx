import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0D3685] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        <div>
        <img src="https://sahibandhu.com/wp-content/themes/sahibandhu/images/logo.png" alt="Logo" className="h-auto  w-30 my-8 mr-2 ml-20" />          <p className="text-sm">
            SahiBandhu is India's leading gold loan platform backed by The Manipal Group. SahiBandhu offers quick and secure gold loans at affordable interest rates.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Site Map</h3>
          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>Transfer Gold Loan</li>
            <li>Calculator</li>
            <li>FAQs</li>
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center"><FaWhatsapp className="mr-2" />Whatsapp</li>
            <li className="flex items-center"><FaInstagram className="mr-2" />Instagram</li>
            <li className="flex items-center"><FaFacebook className="mr-2" />Facebook</li>
            <li className="flex items-center"><RxTwitterLogo className="mr-2" />X (formerly Twitter)</li>
            <li className="flex items-center"><FaLinkedin className="mr-2" />LinkedIn</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">
            Corporate Office:<br />
            Gurgaon, Haryana<br />
            SahiBandhu FinTech Services Pvt Ltd<br />
            Address One by Baani,<br />
            303-308, 3rd Floor,<br />
            Golf Course Road, Sector 56,<br />
            Gurgaon, Haryana - 122011
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-5">
        <p>#The loan value/gm is provided based on the rates followed by one of our lending partners. This loan value is tentative.</p>
        <p>Copyright © 2025, SahiBandhu. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
