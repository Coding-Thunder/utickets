import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const SupportForm: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">We’re Here to Help!</h2>
                    <p className="text-lg text-gray-700 max-w-md mx-auto">
                        If you have any questions or need support, fill out the form below and our team will get back to you as soon as possible.
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                    <form>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Name</label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
                            <Textarea
                                id="message"
                                rows={6}
                                placeholder="Your Message"
                                className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SupportForm;
