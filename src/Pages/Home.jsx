import AboutDetails from "../Component/AboutDetails";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Experince from "./Home/Experince";
import ProjectDetails from "./Home/ProjectDetails";
import Skills from "./Home/Skills";
import SoftSkill from "./Home/SoftSkill";

const Home = () => {
    return (
        <div className="bg-[#252734] text-white">
         <Banner></Banner>
         <Skills></Skills>
         <SoftSkill></SoftSkill>
         <AboutDetails></AboutDetails>
         <Experince></Experince>
         <ProjectDetails></ProjectDetails>
         <Contact></Contact>
        </div>
    );
};

export default Home;