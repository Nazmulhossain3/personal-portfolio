/* eslint-disable react/jsx-no-comment-textnodes */
import img11 from '../../assets/11.png'
import img12 from '../../assets/img12.png'
import img10 from '../../assets/deshi.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ProjectDetails = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);


    return (
        <div name='projectDetails' className='w-full md:h-screen bg-[#252734] text-white'>+

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 ml-12'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Projects
            </p>
            <p className='py-6'>// Check out some of my recent Projects</p>
          </div>
  
  {/* container for projects */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">

  <div
      data-aos="fade-up"
     style={{ backgroundImage: `url(${img12})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
    >
      {/* Hover effect for images */}
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
         MERN Stack Application
        </span>
        <div className="pt-8 text-center ">
          {/* eslint-disable-next-line */}
          <a href='https://summer-camp-auth-f1dcb.web.app/' target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
              Live
            </button>
          </a>
          {/* eslint-disable-next-line */}
          <Link to='/projects'>
          <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
          Details
            </button>
          </Link>
           
        
        </div>
      </div>
  </div>
 
  <div data-aos="fade-down"
     
     style={{ backgroundImage: `url(${img11})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
    >
      {/* Hover effect for images */}
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
         MERN Stack Application
        </span>
        <div className="pt-8 text-center ">
          {/* eslint-disable-next-line */}
          <a href='https://toy-market-auth.web.app/' target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
              Live
            </button>
          </a>
          {/* eslint-disable-next-line */}
          <Link to='/projects'>
          <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
          Details
            </button>
          </Link>
           
        
        </div>
      </div>
 
  </div>
 
  <div data-aos="fade-right"
     
     style={{ backgroundImage: `url(${img10})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
    >
      {/* Hover effect for images */}
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
         React Application
        </span>
        <div className="pt-8 text-center ">
          {/* eslint-disable-next-line */}
          <a href='https://dehsi-khabar-auth.web.app/' target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
              Live
            </button>
          </a>
          {/* eslint-disable-next-line */}
          <Link to='/projects'>
          <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
          Details
            </button>
          </Link>
           
        
        </div>
      </div>
  </div>
  
 
 
 
 
  </div>
        </div>
      </div>
    );
};

export default ProjectDetails;