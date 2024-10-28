import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ozgecanImage from '../assets/oo.jpg';
import Brands from '../components/Brands';

const TeamPage = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-12 md:mt-24 p-20">
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <h2 className="text-3xl font-bold text-[#252B42] mb-2">Meet Our Team</h2>
                <p className="text-[#737373] w-64 md:w-1/2">
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
                </p>
            </div>
            {/* Container for Members */}
            <div className="flex flex-col justify-center items-center p-4 my-16 gap-6 sm:flex-row sm:flex-wrap">
                {/* Team Member 1 */}
                <div className="w-[241px] h-auto mb-6 flex flex-col  items-center">
                    <div className="bg-white overflow-hidden shadow-lg max-w-[241px] h-[423px]">
                        <div className="h-[280px] overflow-hidden">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4D35AQH7S4tWlpr5gQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725350801989?e=1730584800&v=beta&t=n4PUdtFBckgQVL25K3FHIx9SlxArNDkx753alFdlbKg"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h5 className="text-md font-bold text-[#252B42] text-center">Erhan Fırat</h5>
                            <h6 className="text-sm font-semibold text-[#737373] mb-2 text-center">Product Owner</h6>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Member 2 */}
                <div className="w-[241px] h-auto mb-6 flex flex-col items-center">
                    <div className="bg-white overflow-hidden shadow-lg max-w-[241px] h-[423px]">
                        <div className="h-[280px] overflow-hidden">
                            <img
                                src="https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635783306921?e=1735171200&v=beta&t=x0PyMv1-ZSfsWtVBqrInfGESxao8qyOe5Sy919jOP_Y"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h5 className="text-md font-bold text-[#252B42] text-center">Gökhan Özdemir</h5>
                            <h6 className="text-sm font-semibold text-[#737373] mb-2 text-center">Scrum Master</h6>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Member 3 */}
                <div className="w-[241px] h-auto mb-6 flex flex-col  items-center">
                    <div className="bg-white overflow-hidden shadow-lg max-w-[241px] h-[423px]">
                        <div className="h-[280px] overflow-hidden">
                            <img
                                src={ozgecanImage}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h5 className="text-md font-bold text-[#252B42] text-center">Özgecan Ödemiş</h5>
                            <h6 className="text-sm font-semibold text-[#737373] mb-2 text-center">Full Stack Developer</h6>
                            <div className="flex justify-center space-x-3">
                                <a href="https://github.com/ozgecanodemis" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/%C3%B6zgecan-%C3%B6demi%C5%9F-87552117a/" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Member 4 */}
                <div className="w-[241px] h-auto mb-6 flex flex-col items-center">
                    <div className="bg-white overflow-hidden shadow-lg max-w-[241px] h-[423px]">
                        <div className="h-[280px] overflow-hidden">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h5 className="text-md font-bold text-[#252B42] text-center">Ali Yılmaz</h5>
                            <h6 className="text-sm font-semibold text-[#737373] mb-2 text-center">Full Stack Developer</h6>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brands />
        </div>
    );
};

export default TeamPage;