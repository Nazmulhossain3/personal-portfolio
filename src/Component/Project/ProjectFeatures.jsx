/* eslint-disable react/no-unescaped-entities */
import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ProjectFeatures = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);



    return (
        <div className="bg-[#252734] text-white p-10 font-serif">
            <div className=' text-white'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Features
            </p>
           
          </div>
     
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 opacity-80">
      
        <div data-aos="zoom-in-up" className="mt-6 shadow-md shadow-[#040c16] p-4 ">
        <p className="flex md:flex-row items-center gap-3 text-2xl font-serif"><FaQuoteLeft></FaQuoteLeft>FluentVerse Site</p>
        <p className="mt-4"><span className="text-green-500">Home page</span> : as it is a foreign learning language site, for this reason, the user saw a navbar and carousel which display some pictures and information. also, explore favorite classes and instructors.</p>
        <p className="mt-4"><span className="text-green-500">Classes page</span> : All users can access the classes because they can select the class for enrollment.</p>
        <p className="mt-4"><span className="text-green-500">Instructors page</span> : as a user anyone can see the instructor page. instructor add a class for student </p>
        <p className="mt-4"><span className="text-green-500">dashboard</span> :  on this site's dashboard is pretty interesting, dashboard conditionally rendering.login user firstly considered as a student </p>
       
     
       
        </div>
        
   
        <div data-aos="zoom-in-down" className="mt-6 shadow-md shadow-[#040c16]  p-4 ">
        <p className="flex md:flex-row items-center gap-3 text-2xl font-serif"><FaQuoteLeft></FaQuoteLeft>Toy Market Site</p>
        <p className="mt-4"><span className="text-green-500">Home page</span> : This is a Teddy Bear online shopping store website. The Home page contains different types of photos of Teddy bears.</p>
        <p className="mt-4"><span className="text-green-500">Add Toy page</span> : If you successfully logged in then you can see add toy, my toy page. add toy page shows a form where you can give your toys information for getting your toy.</p>
        <p className="mt-4"><span className="text-green-500">my toy page</span> : After giving information add the toy page, you can see your toy information on my toy page. added then my toy page contain a view details button for seeing details of toys </p>
        <p className="mt-4"><span className="text-green-500">Update Toy</span> :  on the My Toy page, you can see the detail option there will be a delete and update option. by clicking this button you can easily update or delete your toys. </p>
       
       
        </div>
     
     
        <div data-aos="zoom-out" className="mt-6 shadow-md shadow-[#040c16] p-4">
        <p className="flex md:flex-row items-center gap-3 text-2xl font-serif"><FaQuoteLeft></FaQuoteLeft>Deshi Khabar</p>
        <p className="mt-4"><span className="text-green-500">Home page</span> :  You can see chef details also the home page. There write about chefs. If you click the view recipes button then will see details about chefs(you must have signed in).</p>
        <p className="mt-4"><span className="text-green-500">Register Page</span> : Generally, Every website has a register page. You must give six characters and a valid email for creating a user.</p>
        <p className="mt-4"><span className="text-green-500">Log in Page</span> : You have to over sure that your email and password was registered. Then you will get approval for visiting other information.</p>
        <p className="mt-4"><span className="text-green-500">Privet Route</span> :   You must have to sign for seeing chefs' details. If you click the chef page then auto redirect with the login page. Please login carefully. </p>
       
       
        </div>






        </div>
     
        
            <div className="grid md:grid-cols-3 gap-3">

        <div className="grid md:grid-cols-3 py-4 gap-3 mt-6 px-6 text-pink-500 shadow-md shadow-[#040c16]">
        <a href=" https://summer-camp-auth-f1dcb.web.app/">Live</a>
        <a href="https://github.com/Nazmulhossain3/fluentVerse-client">Client side</a>
        <a href="https://github.com/Nazmulhossain3/FluentVerse-Server">Server</a>
       </div>
    
    
    
        <div className="grid md:grid-cols-3 py-4 gap-3 mt-6 px-6 text-pink-500 shadow-md shadow-[#040c16]">
        <a href=" https://toy-market-auth.web.app/">Live</a>
        <a href="https://github.com/Nazmulhossain3/toy-market-client">Client side</a>
        <a href="https://github.com/Nazmulhossain3/toy-market-server">Server</a>
       </div>
      
        <div className="grid md:grid-cols-3 gap-3 mt-6 px-6 py-4 text-pink-500 shadow-md shadow-[#040c16]">
        <a href=" https://dehsi-khabar-auth.web.app/">Live</a>
        <a href="https://github.com/Nazmulhossain3/dehis-khabar-client">Client side</a>
        <a href="https://github.com/Nazmulhossain3/deshi-khabar-server">Server</a>
       </div>

            </div>
     
        </div>
    );
};

export default ProjectFeatures;