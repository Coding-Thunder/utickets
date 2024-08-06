import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
    {
        question: 'What is the baggage policy?',
        answer: 'We allow one carry-on bag and one personal item per passenger. Additional baggage can be added for a fee during booking or at the airport.'
    },
    {
        question: 'Can I change or cancel my booking?',
        answer: 'Yes, you can change or cancel your booking through our website or by contacting customer support. Please check our terms for details on fees and policies.'
    },
    {
        question: 'Do you offer in-flight meals?',
        answer: 'Yes, we offer a variety of meals and beverages on all flights. Special meal requests can be made during the booking process.'
    },
    {
        question: 'How can I contact customer support?',
        answer: 'You can contact our customer support team via phone, email, or live chat on our website. We are available 24/7 to assist you.'
    },
];

const FAQSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100 text-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold mb-2">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
