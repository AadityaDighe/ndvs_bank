import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';

import activity_first from '@assets/images/g1.jpg';
import activities_two from '@assets/images/g2.jpg';
import activities_three from '@assets/images/g3.jpg';
import activities_twleve from '@assets/images/g4.jpg';
import activities_thirteen from '@assets/images/g5.jpg';
import activities_ten from '@assets/images/g6.jpg';
import activities_sixteen from '@assets/images/g7.jpg';
import activities_six from '@assets/images/g8.jpg';
import activities_seven from '@assets/images/g9.jpg';
import activities_nine from '@assets/images/g10.jpg';
import activities_fourteen from '@assets/images/g11.jpg';
import activities_four from '@assets/images/g12.jpg';
import activities_five from '@assets/images/g13.jpg';
import activities_fifteen from '@assets/images/g14.jpg';
import activities_eleven from '@assets/images/g15.jpg';
import activities_eight from '@assets/images/g16.jpg';

interface TeamMember {
  id: number;
  image: string;
}

const Activities = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Team members data
  const teamMembers: TeamMember[] = [
    { id: 1, image: activity_first },
    { id: 2, image: activities_two },
    { id: 3, image: activities_three },
    { id: 4, image: activities_four },
    { id: 5, image: activities_five },
    { id: 6, image: activities_six },
    { id: 7, image: activities_seven },
    { id: 8, image: activities_eight },
    { id: 9, image: activities_nine },
    { id: 10, image: activities_ten },
    { id: 11, image: activities_eleven },
    { id: 12, image: activities_twleve },
    { id: 13, image: activities_thirteen },
    { id: 14, image: activities_fourteen },
    { id: 15, image: activities_fifteen },
    { id: 16, image: activities_sixteen },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 text-center sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('activities_social')}
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(member.image)}
            >
              <div className="flex-shrink-0 relative pt-[75%] overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={member.image}
                  alt={`Activity ${member.id}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Full-size Image Modal */}
        {isModalOpen && selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10 bg-black bg-opacity-50 rounded-full p-2"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              <div className="max-w-full max-h-full flex items-center justify-center">
                <img
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                  src={selectedImage}
                  alt="Full size activity"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities