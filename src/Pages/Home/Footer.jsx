import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (

<div className="p-12">
 <footer className="footer grid grid-cols-3 md:grid-cols-3  bg-[#252734] text-white">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Web Development</a> 
    <a className="link link-hover">MERN stack Development</a> 
    <a className="link link-hover">Front-end Development</a> 
    <a className="link link-hover">JavaScript Development</a>
  </div> 
  <div>
    <span className="footer-title">About</span> 
    <a className="link link-hover flex md:flex-row items-center gap-2"> <FaWhatsapp className="text-2xl"></FaWhatsapp> : +8801316037657</a>
    <a href="https://www.facebook.com/mdnazmul.miah.73" className="link link-hover flex md:flex-row items-center gap-2"> <FaFacebook className="text-xl">  </FaFacebook> : Md Nazmul Hossain </a> 
    <a className="link link-hover  flex md:flex-row items-center gap-2"><FaEnvelope className="text-xl"></FaEnvelope> : hossainmdnazmul268@gmail.com</a> 
    <a className="link link-hover flex md:flex-row items-center gap-2"><FaMapMarkerAlt className=" text-xl"></FaMapMarkerAlt>: Tejgaon-Dhaka</a>
  </div> 
  <div>
    <span className="footer-title">Rights</span> 
    <p>Copyright © 2023 - All right reserved by Nazmul</p>
  </div>
</footer> 

</div>

);
};

export default Footer;