import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import human from '@assets/images/tender.png';

const TenderPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: human,
    }
  ];

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 text-center sm:text-5xl sm:tracking-tight lg:text-6xl bg-gray-300 py-4">
            Tender
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openImageModal(member.image)}
            >
              <div className="flex-shrink-0 relative pt-[75%] overflow-hidden">
                <img 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={member.image} 
                  alt={`${member.name} profile`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
              aria-label="Close image"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <img 
              className="w-full h-full object-contain max-h-[80vh]"
              src={selectedImage} 
              alt="Full size view"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderPage;