import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AboutDetails = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
   
      return (
        <div name='aboutDetails' className="px-12 py-6 flex flex-col md:flex-row">
            <div className="ml-6 "  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <p className=" mb-6">||  <span className="ml-10  font-serif">About Me</span> </p>
                <p className="text-xl font-serif">My Name is Nazmul</p>
                <p className="text-4xl mt-5 font-serif">I am available for  MERN stack Projects</p>
                <p className="opacity-60 mt-5 font-serif">Born in 2001,I am living in Bangladesh. I provide MERN <br /> stack Web Application, as well as front-end and back-end <br /> implementation. We will continue to pursue a wide range <br /> of expressions and better code by pursuing our “likes”.</p>
              
                <div className="flex md:flex-row mt-6 gap-3">
                <a href="https://www.facebook.com/mdnazmul.miah.73"><FaFacebook className="text-[#3F7AE9]  bg-black text-2xl rounded-full hover:text-3xl transition duration-200 hover:bg-stone-500"></FaFacebook></a>
                <div className="flex  md:flex-row gap-3">
                <a href="https://www.linkedin.com/in/md-nazmul-hossain1/"><FaLinkedin className="text-2xl  hover:text-3xl transition duration-200"></FaLinkedin></a>
                <a href="https://github.com/Nazmulhossain3"><FaGithub className="text-2xl  hover:text-3xl transition duration-200"></FaGithub></a>
                </div>
                </div>
                </div>
          

            <div data-aos="fade-left">
                <img src="https://i.ibb.co/x6c8CnP/aboutme-removebg-preview-fotor-20230629143443.png" alt="" />
            </div>

        </div>
    );
};

export default AboutDetails;