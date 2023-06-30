import ProgressBar from "@ramonak/react-progress-bar";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

const SoftSkill = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

    const handleDownloadResume = () => {
        // Replace "path/to/resume.pdf" with the actual path or URL of your resume PDF
        window.open("../../../public/MERN-stack-Resume-Nazmul.pdf", "_blank");
      };



    return (
        <div name='softSkill' className=" p-12 gap-10 bg-[#252734] text-white flex flex-col md:flex-row">
        
            <div className="ml-10" data-aos="zoom-out-right">
            <p>|| <span className="ml-10 mt-6 font-thin">Soft Skill</span></p>
            
            <p className="text-5xl font-serif mt-6 mb-3">My Special Skill Field Here.</p>
         
            
            
            
    <button  onClick={handleDownloadResume} className="mt-10 px-6 py-3 sm:mb-4 text-lg font-bold bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
      Download Resume
    </button>
         
            </div>
        
        
        
        
            <div className="p-8" data-aos="zoom-out-left">

            <div className="md:w-96">
            <p className="mb-4">Communication</p>
            <ProgressBar completed={80} 
            bgColor = "linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        
            animateOnRender= {true}
          
            />

            </div>
            <div className="md:w-96 mt-4">
            <p className="mb-4">Leadership</p>
            <ProgressBar completed={70} 
            bgColor = "linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        
            animateOnRender= {true}
          
            />

            </div>
        
            <div className="md:w-96 mt-4">
            <p className="mb-4">Teamwork</p>
            <ProgressBar completed={60} 
            bgColor = "linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        
            animateOnRender= {true}
          
            />

            </div>
        
            <div className="md:w-96 mt-4">
            <p className="mb-4">Flexibility</p>
            <ProgressBar completed={80} 
            bgColor = "linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
        
            animateOnRender= {true}
          
            />

            </div>
        
        
            </div>

       
      
        </div>
    );
};

export default SoftSkill;