import management1 from '@assets/images/management1.png';
import management2 from '@assets/images/management2.png';
import management3 from '@assets/images/management3.png';
import management4 from '@assets/images/management4.png';
import management5 from '@assets/images/management5.png';
import management6 from '@assets/images/management6.png';
import management7 from '@assets/images/management7.png';
import management8 from '@assets/images/management8.png';
import management9 from '@assets/images/management9.png';
import management10 from '@assets/images/management10.png';
import management11 from '@assets/images/management11.png';
import management12 from '@assets/images/management12.png';
import management13 from '@assets/images/management13.png';
import management14 from '@assets/images/management14.png';
import management15 from '@assets/images/management15.png';
import management16 from '@assets/images/management16.png';
import management18 from '@assets/images/management18.png';
import management19 from '@assets/images/management19.png';
import management20 from '@assets/images/management20.png';
import management21 from '@assets/images/management21.png';
import management22 from '@assets/images/management22.png';
import management23 from '@assets/images/management23.png';
import management24 from '@assets/images/management24.png';
import management25 from '@assets/images/management25.png';
import management26 from '@assets/images/management26.png';
import management27 from '@assets/images/management27.png';
import management28 from '@assets/images/management28.png';

const Management = () => {
  const teamMembers = [
    { id: 1, image: management1 },
    { id: 2, image: management2 },
    { id: 3, image: management3 },
    { id: 4, image: management4 },
    { id: 5, image: management5 },
    { id: 6, image: management6 },
    { id: 7, image: management7 },
    { id: 8, image: management8 },
    { id: 9, image: management9 },
    { id: 10, image: management10 },
    { id: 11, image: management11 },
    { id: 12, image: management12 },
    { id: 13, image: management13 },
    { id: 14, image: management14 },
    { id: 15, image: management15 },
    { id: 16, image: management16 },
    { id: 18, image: management18 },
    { id: 19, image: management19 },
    { id: 20, image: management20 },
    { id: 21, image: management21 },
    { id: 22, image: management22 },
    { id: 23, image: management23 },
    { id: 24, image: management24 },
    { id: 25, image: management25 },
    { id: 26, image: management26 },
    { id: 27, image: management27 },
    { id: 28, image: management28 }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-700 sm:text-5xl lg:text-6xl">
            Management Team
          </h1>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image with gradient overlay */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={member.image} 
                  alt={`Team member ${member.id}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Hover effect content */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <div className="h-0.5 w-8 bg-blue-400 mb-2 transition-all duration-500 group-hover:w-16"></div>
                  <span className="text-sm font-medium">Management Member</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;