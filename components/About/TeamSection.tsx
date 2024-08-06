import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import vinay from "@/public/jpg-jpeg/vinay.jpeg"
import abhinav from "@/public/jpg-jpeg/abhinav.jpeg"
const teamMembers = [
    {
        name: 'Abhinav Mishra',
        position: 'Chief Executive Officer',
        imageUrl: abhinav.src,
        linkedin: '#',
        twitter: '#',
        email: '',
    },
    {
        name: 'Vinay Maheshwari',
        position: 'Chief Technology Officer',
        imageUrl: vinay.src,
        linkedin: '#',
        twitter: '#',
        email: '',
    }
];

const TeamSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Team</h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
                    Our dedicated team of professionals is here to make your travel experience smooth and enjoyable. Meet the faces behind Jatt Travels.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-gray-700 mb-4">{member.position}</p>
                                <div className="flex justify-center gap-4 text-blue-500">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300" />
                                    </a>
                                    {/* <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="text-2xl hover:text-blue-600 transition duration-300" />
                                    </a> */}
                                    <a href={`mailto:${member.email}`}>
                                        <FaEnvelope className="text-2xl hover:text-blue-600 transition duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
