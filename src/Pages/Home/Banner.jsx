/* eslint-disable react/no-unescaped-entities */

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

import { TypeAnimation } from "react-type-animation";

const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    

    const handleDownloadResume = () => {
        // Replace "path/to/resume.pdf" with the actual path or URL of your resume PDF
      
        window.open("../../../public/MERN-stack-Resume-Nazmul.pdf", "_blank");
       
    };



    return (
<div className="bg-[#252734] name='banner' text-white flex flex-col md:flex-row px-12 py-6 justify-between">
  
    <div data-aos="fade-up" className="md:ml-10 md:mt-20 ml-40">
           
       
<TypeAnimation
 
  sequence={[
    'Hello',
    500,
    'Hello I', //  Continuing previous Text
    500,
    'Hello I am',
    500,
    'Hello I am Nazmul',
    500,
    'Hello',
    500,
    '',
    500,
  ]}
  speed={50}
  style={{ fontSize: '3rem',
  fontFamily : 'serif',
  



}}
  repeat={Infinity}
/>
       
       
       
       
     <p className="mt-6 text-xl opacity-60 font-serif group-hover:text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-600">Web Developer specializing in <br /> MERN Stack Development</p>
    <button  onClick={handleDownloadResume} className="mt-10 px-6 py-3 sm:mb-4 text-lg font-bold bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
      Download Resume
    </button>
     </div>
         
            <div data-aos="fade-left" className="" >
            <img className="mt-6 flex mx-auto " src="https://i.ibb.co/fdQ41Ng/linkedin-removebg-preview-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;