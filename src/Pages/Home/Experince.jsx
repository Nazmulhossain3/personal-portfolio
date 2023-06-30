import ProgressBar from "@ramonak/react-progress-bar";
import { FaBriefcase } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


const Experince = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div name='experince' className="px-12 py-6 ml-6 font-serif mt-6 flex flex-col md:flex-row">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h2>
          || <span className="ml-6 ">Job Experience</span>
        </h2>
        <div className=" w-[450px] py-4 px-3 rounded-2xl shadow-2xl flex md:flex-row mt-6 gap-5 border-2 border-zinc-50">
          <FaBriefcase className="text-[#C2E7FE] text-3xl "></FaBriefcase>
          <div>
            <h2>2023 - Present</h2>
            <h2>Front-end Developer - InfoServe It Limited </h2>
            <h2>
              {" "}
              I am currently working as a Part time and front-end <br />{" "}
              Developer this company.Infoserve Established 1999,{" "}
              Infoserve builds amazing websites and powers <br />{" "}
              high-performance digital marketing for SMEs.
            </h2>
          </div>
        </div>
      </div>

     
      <div className="p-8" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="md:w-96">
            <p className="mb-4">HTML</p>
            <ProgressBar
              completed={92}
              bgColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              animateOnRender={true}
            />
          </div>
          <div className="md:w-96 mt-4">
            <p className="mb-4">CSS and Framework(Bootstrap and Tailwind)</p>
            <ProgressBar
              completed={80}
              bgColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              animateOnRender={true}
            />
          </div>

          <div className="md:w-96 mt-4">
            <p className="mb-4">JavaScript</p>
            <ProgressBar
              completed={70}
              bgColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              animateOnRender={true}
            />
          </div>

          <div className="md:w-96 mt-4">
            <p className="mb-4">React</p>
            <ProgressBar
              completed={80}
              bgColor="linear-gradient(to right, #78abe9, #74dad8, #ec7cac)"
              animateOnRender={true}
            />
          </div>
        </div>
    </div>
  );
};

export default Experince;
