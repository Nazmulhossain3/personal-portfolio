/* eslint-disable react/jsx-no-comment-textnodes */
import '../Project/ProjectInfo.css'
import img12 from '../../assets/a-12.png'
import img11 from '../../assets/a-11.png'
import img10 from '../../assets/a-10.png'
import ProjectFeatures from './ProjectFeatures';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ProjectInfo = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);




    return (
        <div className='text-white' >
       
       <div className=' ml-12 text-white'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Projects
            </p>
            <p className='py-6'>// Check out some of my recent Projects</p>
          </div>
       
       
       
           <div className='grid grid-cols-2 md:grid-cols-3  md:px-8 rounded-xl md:gap-8'>
           <div className='image-wrap'  data-aos="fade-up"data-aos-duration="3000">
            <p className='mb-6 md:ml-10 text-2xl font-serif'>FluentVerse Academy</p>
                <a href="">
                <img src={img12} alt="" />

                </a>
            </div>
            <div className='image-wrap'  data-aos="fade-right" >
            <p className='mb-6 md:ml-10 text-2xl font-serif'>Toy Market Site</p>
                <a href="">
                <img src={img11} alt="" />

                </a>
            </div>
            <div className='image-wrap'  data-aos="fade-left">
            <p className='mb-6 md:ml-10 text-2xl font-serif'>Deshi Khabar Site</p>
                <a href="">
                <img src={img10} alt="" />

                </a>
            </div>
           </div>
      <ProjectFeatures></ProjectFeatures>
      
      
        </div>
    );
};

export default ProjectInfo;