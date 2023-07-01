import Contact from "../Pages/Home/Contact";
import Footer from "../Pages/Home/Footer";
import AboutDetails from "./AboutDetails";

const About = () => {
    return (
        <div className=" bg-[#252734] text-white">
            <AboutDetails></AboutDetails>
            <Contact></Contact>
            <Footer></Footer>


        </div>
    );
};

export default About;