import management1 from '@assets/images/newImage.jpeg';
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
import { useTranslation } from 'react-i18next';

const Management = () => {

  const { t } = useTranslation();

  const teamMembers = [
      { id: 1, image: management1, nameKey: "datta_namdeo_gaikwad", positionKey: "president" },
      { id: 16, image: management16, nameKey: "prashant_suresh_bhutada", positionKey: "vicePresident" },
      { id: 3, image: management3, nameKey: "arun_vamanrao_jadhav", positionKey: "public_relation" },
      { id: 4, image: management4, nameKey: "nivrutti_vithoba_aringale", positionKey: "director" },
      { id: 7, image: management7, nameKey: "sunil_khanderao_adake", positionKey: "director" },
      { id: 6, image: management6, nameKey: "jagganath_kashinath_agale", positionKey: "director" },
    { id: 2, image: management2, nameKey: "manohar_kashinath_korde", positionKey: "director" },
    { id: 10, image: management10, nameKey: "shriram_triambakrao_gaikwad", positionKey: "director" },
    { id: 12, image: management12, nameKey: "ashok_uttamchand_chordiya", positionKey: "director" },
    { id: 11, image: management11, nameKey: "sunil_mohanlal_chopda", positionKey: "director" },
    { id: 5, image: management5, nameKey: "vasant_shivaji_aringale", positionKey: "director" },
    { id: 13, image: management13, nameKey: "ramesh_shankar_dhongade", positionKey: "director" },
    { id: 9, image: management9, nameKey: "nitin_uttamrao_khole", positionKey: "director" },
    { id: 15, image: management15, nameKey: "vilas_martandrao_pekhle", positionKey: "director" },
    { id: 8, image: management8, nameKey: "ganesh_popatrao_kharjul", positionKey: "director" },
    { id: 14, image: management14, nameKey: "yogesh_laxman_nagare", positionKey: "director" },
    { id: 18, image: management18, nameKey: "sudhakar_nivruti_jadhav", positionKey: "director" },
    { id: 19, image: management19, nameKey: "prakash_dattu_ghuge", positionKey: "director" },
    { id: 20, image: management20, nameKey: "ramdas_dayaram_sadaphule", positionKey: "director" },
    { id: 21, image: management21, nameKey: "rajana_prakash_borade", positionKey: "director" },
    { id: 22, image: management22, nameKey: "kamal_dinkar_adhav", positionKey: "director" },
    { id: 23, image: management23, nameKey: "suddam_pundlik_gaikwad", positionKey: "expertDirector" },
    { id: 24, image: management24, nameKey: "rahul_kisan_hagawne", positionKey: "expertDirector" },
    { id: 25, image: management25, nameKey: "yashwant_lalji_pagere", positionKey: "employeeRepresentative" },
    { id: 26, image: management26, nameKey: "mangesh_madhukar_phadol", positionKey: "clusterHead" },
    { id: 27, image: management27, nameKey: "rajendra_jagganth_sonar", positionKey: "ceo" },
    // { id: 28, image: management28, nameKey: "eknath_vitthalrao_kadam", positionKey: "deputyCeo" }
  ];
  
return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-500 sm:text-5xl mb-4">
            {t('management_team.title')}
          </h1>
          <div className="mt-6 h-1.5 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl"
            >
              <div className="relative aspect-square bg-gray-100">
                <img 
                  className="w-full h-full object-cover"
                  src={member.image} 
                  alt={t(`management_team.names.${member.nameKey}`)}
                  loading="lazy"
                />
              </div>
              
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 text-lg mb-1.5 line-clamp-2">{t(`management_team.names.${member.nameKey}`)}</h3>
                <p className="text-blue-600 font-medium text-sm">
                  {t(`management_team.${member.positionKey}`)}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl"
            >
              <div className="relative aspect-square bg-gray-100">
                <img 
                  className="w-full h-full object-cover"
                  src={member.image} 
                  alt={t(`management_team.names.${member.nameKey}`)}
                  loading="lazy"
                />
              </div>
              
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 text-lg mb-1.5 line-clamp-2">
                  {t(`management_team.names.${member.nameKey}`)}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                  {t(`management_team.${member.positionKey}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;