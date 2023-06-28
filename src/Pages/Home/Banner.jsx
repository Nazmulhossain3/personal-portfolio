/* eslint-disable react/no-unescaped-entities */

const Banner = () => {

    const handleDownloadResume = () => {
        // Replace "path/to/resume.pdf" with the actual path or URL of your resume PDF
        window.open("../../../public/MERN-stack-Resume-Nazmul.pdf", "_blank");
      };


    return (
        <div className="bg-[#252734] text-white flex flex-col md:flex-row px-12 py-6 gap-30">
            <div className="ml-10">
            <p className="text-6xl mt-10 font-serif group-hover:text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-600">Hello! I'm Nazmul</p>
        <p className="mt-10 text-xl opacity-60 font-serif group-hover:text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-600">Web Developer specializing in <br /> MERN Stack Development</p>
    <button  onClick={handleDownloadResume} className="mt-10 px-6 py-3 sm:mb-4 text-lg font-bold bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
      Download Resume
    </button>
            </div>
         
            <div >
            <img className="mt-6 sm:mr-10" src="https://i.ibb.co/fdQ41Ng/linkedin-removebg-preview-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;