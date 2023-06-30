/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <div data-aos="fade-down-left" name='contact' className='w-full   bg-[#252734] flex justify-center items-center mt-6'>
        <form method='POST' action="https://getform.io/f/aaebf962-c164-40c5-aedc-04986d792780" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - hossainmdnazmul268@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-lg'  name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 rounded-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    );
};

export default Contact;