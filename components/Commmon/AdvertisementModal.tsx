import { Dialog } from '@headlessui/react';
import { FaWhatsapp, FaPhoneAlt, FaTimes } from 'react-icons/fa'; // Added FaTimes for close button
import { Button } from '@/components/ui/button';

interface AdvertisementModalProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const AdvertisementModal: React.FC<AdvertisementModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />

      {/* Modal Panel */}
      <Dialog.Panel className="mx-auto w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"> {/* Increased width */}

        {/* Title Section with Blue Background and Close Button */}
        <div className="relative bg-blue-600 text-white text-center py-5 mb-6">
          <Dialog.Title className="text-3xl font-extrabold tracking-wider">
            Fly Smart, Pay Less!
          </Dialog.Title>
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-8">
          <Dialog.Description className="text-center text-gray-800 mb-6 text-3xl px-4">
            Connect with Our Experts for Exclusive <span className="font-bold text-blue-600">50% Off</span> on Online Flight Deals!
          </Dialog.Description>

          {/* Tagline for Discounts */}
          <p className="text-center text-xl text-green-600 font-extrabold mb-5">
            🌟 Your Ticket to Big Savings! 🌟
          </p>

          {/* Buttons with Uniform Size */}
          <div className="flex justify-around space-x-4">
            <Button
              onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg w-56 h-14 text-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              WhatsApp Us
            </Button>
            <Button
              onClick={() => window.location.href = 'tel:+1234567890'} // Replace with your phone number
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-56 h-14 text-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              <FaPhoneAlt className="mr-3 text-2xl" />
              Call Us
            </Button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
