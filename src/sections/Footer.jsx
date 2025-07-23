import { socialImgs } from "../constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Check me out!</p>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" rel="noopener noreferrer" href={img.url} key={img.url}>
              <img src={img.imgPath}  alt={`${img.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Andomski Rodrigues. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;