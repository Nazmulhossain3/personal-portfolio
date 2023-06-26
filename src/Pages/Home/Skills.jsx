import {  FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
const Skills = () => {
    return (
        <div>
            <h2 className="text-4xl font-serif mt-6 text-center"> I am Skill at</h2>
            <hr className="ml-40 mr-40 font-semibold mt-4" />
            <hr className="ml-40 mr-40 font-semibold" />
          
            <div className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-20 gap-4">

            <div>
            <FaHtml5 className="text-8xl bg-red-500 rounded-lg"></FaHtml5>
            <p className="mt-2 font-serif font-light">Html</p>
            </div>
           
            <div>
            <FaCss3Alt className="text-8xl bg-[#4990EB] rounded-lg"></FaCss3Alt>
            <p className="mt-2 font-serif font-light">CSS3</p>
            </div>
            
            <div>
            <FaBootstrap className="text-8xl bg-[#7811F7] rounded-lg"></FaBootstrap>
            <p className="mt-2 font-serif font-light">Bootstrap</p>
            </div>
          
            <div>
            <FaJs className="text-8xl bg-[#EFD81E] rounded-lg"></FaJs>
            <p className="mt-2 font-serif font-light">JavaScript</p>
            </div>
          
            <div>
            <img className="h-20 w-20 rounded-lg" src="https://i.ibb.co/kKNLCVg/tw.webp" alt="" />
            <p className="mt-2 font-serif font-light">Tailwind CSS</p>
            </div>

            <div>
            <FaReact className="text-8xl text-[#5CBAD7] rounded-lg"></FaReact>
            <p className="mt-2 font-serif font-light">React</p>
            </div>
            <div>
            <FaNode className="text-8xl text-[#88C04A] rounded-lg"></FaNode>
            <p className="mt-2 font-serif font-light">Node.Js</p>
            </div>
        
            <div>
            <FaDatabase className="text-8xl text-[#88C04A] rounded-lg"></FaDatabase>
            <p className="mt-2 font-serif font-light">MongoDb</p>
            </div>
          
           
          
          
          
            </div>
       </div>
    );
};

export default Skills;