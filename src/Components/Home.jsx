import React from 'react'
import { RiDownloadLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import myImage from '../assets/myImage.jpg'

const Home = () => {
  return (
    <div className='min-h-[80vh] min-w-fit flex gap-10  xs:flex-col lg:flex-row md:px-20 xs:px-4'>
        {/* left container start here*/}
        <div className='md:w-2/5 xs:w-full md:h-full xs:h-[50vh] flex justify-center items-center border-2'>
        
        </div>
        {/* left container ends here*/}

        {/* Right container start here*/}
        <div className='lg:w-3/5 xs:w-full flex flex-col items-start justify-center'>
            {/* main heading */}
            <h1 className='lg:text-3xl xs:text-xl font-bold text-white mb-6'><span className='lg:text-5xl xs:text-3xl text-orange-500 font-mono'>I'M MOHAMMAD AZAM KHAN.</span><br />Data Analyst</h1>

            {/* bio paragraph */}
            <p className='text-white text-justify'>
            Aspiring Data Analyst skilled in <span className='font-bold text-lg'>data visualization, statistical analysis, and data manipulation using tools like Excel, SQL, Python, and Tableau</span> . With hands-on project experience in cleaning, analyzing, and visualizing datasets, I am passionate about transforming raw data into clear, actionable insights. I enjoy crafting data-driven stories that support informed decision-making and I am eager to deepen my expertise through impactful projects.
            </p>

            {/* social link */}
            <ul className='flex gap-4 mb-4 mt-8 cursor-pointer'>
                <li className='text-orange-500 text-3xl hover:scale-[1.2] transition-all'><a href="#"><FaLinkedinIn/></a></li>
                <li className='text-orange-500 text-3xl hover:scale-[1.2] transition-all'><a href="#"><FaGithub/></a></li>
                <li className='text-orange-500 text-3xl hover:scale-[1.2] transition-all'><a href="#"><FaTwitter/></a></li>
                <li className='text-orange-500 text-3xl hover:scale-[1.2] transition-all'><a href="#"><FaInstagram/></a></li>
            </ul>

            <button className='flex items-center gap-2 bg-orange-500 box-border p-2 px-4 rounded-full text-white font-semibold mt-3 mb-6 transition-colors hover:bg-orange-600 hover:border-orange-600'>Download CV <RiDownloadLine></RiDownloadLine></button>
        </div>
        {/* Right container ends here*/}
    </div>
  )
}

export default Home