import { useTranslation } from 'react-i18next';
import activity_first from '@assets/images/activities_first.jpg'
import activities_two from '@assets/images/activities_two.jpg'
import activities_three from '@assets/images/activities_three.jpg'
import activities_twleve from '@assets/images/activities_twleve.jpg'
import activities_thirteen from '@assets/images/activities_thirteen.jpg'
import activities_ten from '@assets/images/activities_ten.jpg'
import activities_sixteen from '@assets/images/activities_sixteen.jpg'
import activities_six from '@assets/images/activities_six.jpg'
import activities_seven from '@assets/images/activities_seven.jpg'
import activities_nine from '@assets/images/activities_nine.jpg'
import activities_fourteen from '@assets/images/activities_fourteen.jpg'
import activities_four from '@assets/images/activities_four.jpg'
import activities_five from '@assets/images/activities_five.jpg'
import activities_fifteen from '@assets/images/activities_fifteen.jpg'
import activities_eleven from '@assets/images/activities_eleven.jpg'
import activities_eight from '@assets/images/activities_eight.jpg'

const Activities = () => {

   const { t } = useTranslation();
  // Sample data for Activities team members
  const teamMembers = [
    {
      id: 1,
      image: activity_first,
    },
    {
      id: 2,
      image: activities_two,
    },
    {
      id: 3,
      image: activities_three,
    },
    {
      id: 4,
      image: activities_four,
    },
    {
      id: 5,
      image: activities_five,
    },
    {
      id: 6,
      image: activities_six,
    },
    {
      id: 7,
      image: activities_seven,
    },
    {
      id: 8,
      image: activities_eight,
    },
    {
      id: 9,
      image: activities_nine,
    },
    {
      id: 10,
      image: activities_ten,
    },
    {
      id: 11,
      image: activities_eleven,
    },
    {
      id: 12,
      image: activities_twleve,
    },
    {
      id: 13,
      image: activities_thirteen,
    },
    {
      id: 14,
      image: activities_fourteen,
    },
    {
      id: 15,
      image: activities_fifteen,
    },
    {
      id: 16,
      image: activities_sixteen,
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 text-center sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('activities_social')}
          </h1>
        </div>

        {/* Cards Grid - Updated to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Improved Image Container */}
              <div className="flex-shrink-0 relative pt-[75%] overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={member.image}
                  alt="Activity image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;