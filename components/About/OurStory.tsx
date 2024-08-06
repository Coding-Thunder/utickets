import React from 'react';

const OurStory: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
                <div className="space-y-12">
                    {/* Story Part 1 */}
                    <div
                        className="relative h-96 bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?travel,journey)' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white max-w-xl mx-auto p-6">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4">2021: The Beginning</h3>
                                <p>
                                    We launched our platform with a focus on providing the best travel deals. From humble beginnings, we quickly gained a reputation for transparency and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Story Part 2 */}
                    <div
                        className="relative h-96 bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?growth,expansion)' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white max-w-xl mx-auto p-6">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4">2022: Expansion & Growth</h3>
                                <p>
                                    Our team grew, and so did our offerings. We expanded our services to include a wider range of destinations and developed new features to enhance user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Story Part 3 */}
                    <div
                        className="relative h-96 bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?innovation,technology)' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white max-w-xl mx-auto p-6">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4">2023: Innovating the Future</h3>
                                <p>
                                    We introduced innovative technologies like personalized travel recommendations and AI-driven customer support, setting a new standard in the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Story Part 4 */}
                    <div
                        className="relative h-96 bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?future,vision)' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white max-w-xl mx-auto p-6">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4">2024 & Beyond</h3>
                                <p>
                                    Our journey continues as we strive to innovate and provide exceptional travel experiences. With a strong foundation, we are excited for the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
