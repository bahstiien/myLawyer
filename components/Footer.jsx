import React from "react";
import { LinkedinOutlined, MailTwoTone } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        vps
        <div className="flex justify-center space-x-6 md:order-2">
          <LinkedinOutlined style={{ fontSize: "48px", color: "#F8EDE3" }} />
        </div>
        {/* <div className="flex justify-center space-x-6 md:order-2">
          <LinkedinOutlined style={{ fontSize: "48px", color: "#F8EDE3" }} />
        </div> */}
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-900 opacity-60">
            &copy; 2022 Bastien LE CALVEZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
