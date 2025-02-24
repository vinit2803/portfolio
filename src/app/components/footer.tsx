import React from "react";
import "../css/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fmaindiv">
      <div className="ffirstdiv">Copyright &copy; 2024, Vinit Patel</div>
      <div className="fseconddiv">
        <div className="fseconddiv1">
          <div className="fseconddiv2">Follow Me On</div>
          <div className="fseconddiv2 instagram-icon" >
            <Link
              href="https://www.instagram.com/vinit_7777_/"
              target="_blank"
              passHref
            >
              <InstagramIcon />
            </Link>
          </div>
          <div className="fseconddiv2 x-icon">
            <Link href="https://x.com/VinitPa48061677" target="_blank" passHref>
              <XIcon />
            </Link>
          </div>

          <div className="fseconddiv2 linkedin-icon">
            <Link
              href="https://www.linkedin.com/in/vinit-patel-301801221/"
              target="_blank"
              passHref
            >
              <LinkedInIcon />
            </Link>
          </div>

          <div className="fseconddiv2 facebook-icon">
            <Link
              href="https://www.facebook.com/profile.php?id=100037280453866"
              target="_blank"
              passHref
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
