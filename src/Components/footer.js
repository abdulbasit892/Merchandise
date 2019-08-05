import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import mail from "../images/gmail.png";
import call from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-contact">
        <h1>Contact Us</h1>
        <ul>
          <li>
            <img src={call} align="middle" alt=" call" />
            <a href="#">
              <i> +923082778401</i>
            </a>
          </li>
          <li>
            <img src={mail} alt=" gmail" align="middle" />{" "}
            <a href="#">
              <i>kapray@gmail.com</i>
            </a>
          </li>
          <li>
            <img src={facebook} alt=" facebook" align="middle" />{" "}
            <a href="#">
              <i>fb/kapray.com</i>
            </a>
          </li>
          <li>
            <img src={instagram} alt=" instagram" align="middle" />{" "}
            <a href="#">
              <i> instagram/kapray.com </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-links ">
        <div>
          <h2>Shipment</h2>
          <ul>
            <li>Shipment Charges </li>
            <li>How Long Does It Take </li>
            <li>Queries About Shipment </li>
          </ul>
        </div>
        <div>
          <h2>Return Policy</h2>
          <ul>
            <li>How Do I Return </li>
            <li>Duration </li>
            <li>Refund</li>
          </ul>
        </div>

        <div>
          <h2>Administration</h2>
          <ul>
            <li>Terms And Conditions</li>
            <li>FAQS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
