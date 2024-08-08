import React from 'react';

const TermsAndConditions: React.FC = () => {
    const todayDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-lg border border-gray-200 my-10">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
                <p className="text-lg text-gray-600">Last updated: {todayDate}</p>
            </header>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    By creating an account on Universal Tickets{","} you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms{","} you should not register for an account.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    We reserve the right to update or modify these Terms and Conditions at any time. Your continued use of the site after any changes indicates your acceptance of the new terms.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">2. Account Registration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    To register for an account{","} you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You must notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    We reserve the right to refuse service{","} terminate accounts{","} or remove or edit content at our sole discretion.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">3. User Obligations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You agree to use your account only for lawful purposes and in accordance with our guidelines. You must not engage in any activity that disrupts or interferes with the functioning of our website or services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You must comply with all applicable laws and regulations while using our services. Any use of the website that is unlawful or harmful is prohibited.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    You are responsible for all content posted under your account and for any consequences that arise from such content.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">4. Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You are responsible for safeguarding your account credentials and must notify us immediately of any unauthorized use of your account or other security breaches.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We take reasonable measures to protect your information but cannot guarantee complete security. By using our services{","} you acknowledge the inherent risks and limitations of online security.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    We are not liable for any damages resulting from unauthorized access to your account or any loss of data.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">5. Changes to Account</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You may update or modify your account information at any time through your account settings. We reserve the right to suspend or terminate accounts that violate these Terms and Conditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We may also update or change your account settings to comply with legal requirements or to enhance our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    If we make changes to your account or suspend your access{","} we will notify you through the email address associated with your account.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">6. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We may terminate or suspend your account at our discretion{","} without notice{","} for any reason{","} including if we believe you have violated these Terms and Conditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Upon termination{","} your right to use the website will immediately cease. We are not liable for any damages or losses resulting from the termination of your account.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    You may terminate your account at any time by contacting us{","} and we will assist you in closing it.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">7. Disclaimer of Warranties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Universal Tickets is provided on an {'"as-is"'} and {'"as-available"'} basis. We make no warranties{","} express or implied{","} regarding the availability{","} reliability{","} or performance of our services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We do not warrant that our services will meet your requirements{","} be uninterrupted{","} or be free from errors or viruses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Your use of our services is at your own risk{","} and you are solely responsible for any damage to your device or loss of data resulting from such use.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    To the fullest extent permitted by law{","} Universal Tickets shall not be liable for any indirect{","} incidental{","} special{","} consequential{","} or punitive damages arising out of or related to your use of the services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Our total liability for any claim arising from your use of the services shall be limited to the amount paid by you{","} if any{","} for accessing the services in the six (6) months preceding the claim.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Some jurisdictions do not allow the exclusion or limitation of certain damages{","} so the above limitations may not apply to you.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">9. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of [Your State]{","} without regard to its conflict of law principles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Any disputes arising out of or related to these Terms and Conditions or the use of the services shall be resolved in the courts located in [Your County]{","} [Your State].
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-5">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms and Conditions{","} please contact us at:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Email: support@universaltickets.com</li>
                    <li>Phone: +1-877-671-6033</li>
                    <li>Address: 123 Ticket Lane{","} Suite 456{","} City{","} State{","} ZIP</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                    Our support team is available to assist you with any queries or issues you may have regarding your account or our services.
                </p>
            </section>

            <div className="text-center text-sm text-gray-600 mt-8">
                <p>
                    By registering for an account{","} you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
