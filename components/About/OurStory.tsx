import React from 'react';

const OurStory: React.FC = () => {
    const steps = [
        {
            title: "Our Beginnings",
            description: "We started as a small team passionate about making travel easier for everyone. Our mission was to simplify the ticket booking process."
        },
        {
            title: "Our Growth",
            description: "As we grew, so did our vision. We expanded our services and improved our technology to provide a seamless booking experience."
        },
        {
            title: "Our Commitment",
            description: "We are committed to delivering the best customer service and ensuring that your travel plans are hassle-free."
        },
        {
            title: "Our Future",
            description: "We continue to innovate and adapt to the evolving needs of our customers. Join us as we strive to make travel better for everyone."
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Our Story</h2>
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
