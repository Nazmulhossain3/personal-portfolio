import AboutDetails from "../Component/AboutDetails";
import Banner from "./Home/Banner";
import Experince from "./Home/Experince";
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
        </div>
    );
};

export default Home;