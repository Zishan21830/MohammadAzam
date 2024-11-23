import React from 'react'
import { FaLocationDot, FaEnvelope, FaPhone, FaRocket } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import Headline from './Headline';

const Contact = () => {
  return (
   <div>
   <Headline heading={"Contact"}/>
     <div className='flex md:flex-row xs:flex-col-reverse border-2'>
    
    {/* Contact details section start */}
    <div className='md:w-2/5 xs:w-full h-full border-2'>  
        <h1 className='text-orange-500 font-bold text-2xl'>DON'T BE SHY !</h1>
        <p className='text-white'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppertunities to be part of your vision.</p>
        {/* address */}
        <div>
            <div className='flex items-center gap-1 text-lg text-orange-500'><FaLocationDot/><h3>ADDRESS POINT</h3></div>
            <p className='text-white'>123 street New York, United States Of America 000000</p>
        </div>

        {/* Email */}
        <div>
        <div className='flex items-center gap-1 text-lg text-orange-500'><FaEnvelope/><h3>EMAIL ME</h3></div>
        <a href="mailto:zishant21830@gmail.com" className='text-white'>zishan21830@gmail.com</a>
        </div>

        {/* Mobile number */}
        <div>
        <div className='flex items-center gap-1 text-lg text-orange-500'><FaPhone/><h3>CALL ME</h3></div>
        <p className='text-white'>+91 25487896541</p>
        </div>

        {/* social link */}
        <ul className='flex gap-4 my-4 cursor-pointer'>
            <li className='text-orange-500 text-2xl'><a href="#"><FaLinkedinIn/></a></li>
            <li className='text-orange-500 text-2xl'><a href="#"><FaGithub/></a></li>
            <li className='text-orange-500 text-2xl'><a href="#"><FaTwitter/></a></li>
            <li className='text-orange-500 text-2xl'><a href="#"><FaInstagram/></a></li>
        </ul>

    </div>
    {/* Contact details section end */}
    {/* Contact form start */}
    <form className='md:w-3/5 xs:w-full h-full border-2'>
    <h1 className='text-3xl text-white font-bold mb-3'>GET IN <span className='text-orange-500'>TOUCH</span></h1>
    <div className='flex items-center gap-3 w-3/5'>
        <input type="text" name="username" id="username" placeholder='YOUR NAME' className='bg-[#3e3e3e] rounded-3xl py-2 px-2 w-2/4 outline-none text-orange-500'/>
        <input type="email" name="email" id="email" placeholder='YOUR EMAIL' className='bg-[#3e3e3e] rounded-3xl py-2 px-2 w-2/4 outline-none text-orange-500'/>
    </div>
    <input type="text" name="subject" id="subject" placeholder='YOUR SUBJECT' className='bg-[#3e3e3e] rounded-3xl py-2 px-2 w-3/5 my-2 outline-none text-orange-500'/>
    <textarea name="message" id="message" cols="30" rows="7" placeholder='YOUR MESSAGE' className='block bg-[#3e3e3e] rounded-3xl py-2 px-2 w-3/5 my-2 outline-none text-orange-500'></textarea>
    <button className='flex items-center gap-3 px-4 py-2 bg-orange-500 rounded-full text-white font-bold'>SEND MESSAGE<FaRocket className='text-2xl'/></button>
    </form>
    {/* Contact form end */}
</div>
   </div>
  )
}

export default Contact