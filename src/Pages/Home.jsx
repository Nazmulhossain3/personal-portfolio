import Banner from "./Home/Banner";
import Skills from "./Home/Skills";
import SoftSkill from "./Home/SoftSkill";

const Home = () => {
    return (
        <div className="bg-[#252734] text-white">
         <Banner></Banner>
         <Skills></Skills>
         <SoftSkill></SoftSkill>
        </div>
    );
};

export default Home;