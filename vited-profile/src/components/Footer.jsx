import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const resumePDF = 'src/assets/resume-v1.2.pdf';
    return (
        < div className='text-sm sm:text-md text-white h-20 mt-20' >
            <div className='justify-between items-center bg-gradient-to-r from-transparent to-opacityBlue p-4 flex gap-x-5 w-full sm:absolute bottom-0' >
                <p className="ml-5">&copy; Daniel Grayson Portfolio</p>
                <a href={resumePDF} download="resume-v1.2.pdf">
                    <button className="w-25 hover:w-35 h-10 hover:h-13 hover:text-white hover:border-blue hover:scale-125 duration-225 text-yellow border border-yellow rounded-lg p-2">
                        Resume
                    </button>
                </a>
                <div className='flex gap-x-6 mr-4 items-center'>
                    <a href="https://github.com/GrayCoded/"
                        className="hover:scale-120 hover:text-magenta duration-250" aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '45px' }} />

                    </a>
                    <a href="https://www.linkedin.com/in/daniel-grayson-3229a5119/"
                        className="hover:scale-120 hover:text-magenta duration-250" aria-label="Linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '45px' }} />

                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;