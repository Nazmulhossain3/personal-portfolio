import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
    return (
        <div className="w-[1000px] mx-auto">
            <Navbar></Navbar>
          <Outlet></Outlet>  
         
        </div>
    );
};

export default Main;