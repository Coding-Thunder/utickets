import React from 'react';
import { ShieldCheck, Headphones, CreditCard, Star } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const features = [
    {
        title: 'Best Price Guarantee',
        description: 'We offer the best prices on flights, ensuring you get the best deal available.',
        icon: ShieldCheck,
    },
    {
        title: '24/7 Customer Support',
        description: 'Our customer support team is available around the clock to assist you with any inquiries.',
        icon: Headphones,
    },
    {
        title: 'Easy & Secure Booking',
        description: 'Experience a seamless and secure booking process with our user-friendly platform.',
        icon: CreditCard,
    },
    {
        title: 'Exclusive Offers',
        description: 'Access special deals and discounts available only to our members.',
        icon: Star,
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <Card key={index} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
                            <CardHeader className="flex items-center justify-center mb-4">
                                <feature.icon className="w-12 h-12 text-blue-600" />
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
