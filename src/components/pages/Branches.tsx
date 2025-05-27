import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaMoneyBillAlt  } from 'react-icons/fa';

const Branches = () => {
  const branches = [
    {
      name: 'Head Office',
      address: '“Kalpvrukasha”, Aashanagar, Nashik Road, Nashik',
      phone: '2465345, 2464640, 2465728, 2464637',
      timing: '10AM to 6PM',
      email: 'info@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Nashik Road Branch',
      address: '“Kalpvruksha”, Aashanagar, Nashik Road, Nashik',
      phone: '2460929',
      timing: '10AM to 6PM',
      email: 'nashikroad@ndvsbank.com',
      atm: true,
      cashRecycler: true,
    },
    {
      name: 'Bhagur Branch',
      address: '“Indira Gandhi Vyapari Sankul”, Bhagur, Nashik',
      phone: '2491482, 2494302',
      timing: '10AM to 6PM',
      email: 'bhagur@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Deolali Camp Branch',
      address: 'Hausan Road, Deolali Camp, Nashik',
      phone: '2491323, 2494298',
      timing: '10AM to 6PM',
      email: 'deolalicamp@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Ingale Nagar Branch',
      address: 'Sanklecha Sankul, Manjula Mangal Karyalaya, Nashik',
      phone: '2410488, 2415870',
      timing: '10AM to 6PM',
      email: 'ingalenagar@ndvsbank.com',
      atm: true,
      cashRecycler: true,
    },
    {
      name: 'Upnagar Branch',
      address: 'Akshardhara Co-Op. Hos. Soc, Behind Ichhamani Lawns, Upnagar, Nashik',
      phone: '2413654, 2416521',
      timing: '10AM to 6PM',
      email: 'upnagar@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Pawan Nagar Branch',
      address: 'Plot No. 5 & 6, Aashad Sector, Near M.V.P. College, Cidco, Nashik',
      phone: '2391770, 2391880',
      timing: '10AM to 6PM',
      email: 'pawannagar@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Old Gangapur Naka Branch',
      address: '“Shraddha Sankul”, Gangapur Road, Nashik',
      phone: '2311222, 2319432',
      timing: '10AM to 6PM',
      email: 'ognaka@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Subhash Road Branch',
      address: 'NMC Building, Javahar Market, Subhash Road, Nashik Road, Nashik',
      phone: '2450311, 2461553, 2400312',
      timing: '10AM to 6PM',
      email: 'subhashroad@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Sinnar Phata Branch',
      address: 'Shetkari Sankul, Sinnar Phata, Nashik Road, Nashik',
      phone: '2461510, 2451876',
      timing: '10AM to 6PM',
      email: 'sinnarphata@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Saubhagynagar Branch',
      address: '“Ambika Darshan”, Swatantryavir Savarkar Road, Nashik Road, Nashik',
      phone: '2473196',
      timing: '10AM to 6PM',
      email: 'saubhagyanagar@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Satpur Branch',
      address: 'Plot No. 69, SSI, Flatted Estate, Satpur, Nashik',
      phone: '2360888, 2350295',
      timing: '10AM to 6PM',
      email: 'satpur@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Sinnar Branch',
      address: '“Suryoday Complex”, Near S.T. Stand, Sinnar, Nashik',
      phone: '02551-221934',
      timing: '10AM to 6PM',
      email: 'sinnar@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Ambad Branch',
      address: 'Shop No. 04, Samruddhi Appt, Pathardi Phata, Nashik',
      phone: '2380266, 2383044',
      timing: '10AM to 6PM',
      email: 'ambad@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Nashik Puna Road Branch',
      address: '“Sakhala Arcade”, Near Fame Theater, Nashik Puna Road, Nashik',
      phone: '2412115, 2416844',
      timing: '10AM to 6PM',
      email: 'nashikpoonaroad@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Panchavati Branch',
      address: '“Sarvadnya Complex”, Near Market Yard, Panchavati, Nashik',
      phone: '2518662',
      timing: '10AM to 6PM',
      email: 'panchavati@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Mahatma Nagar Branch',
      address: '“Dattashri” Apartment, Trambak Road, Mahatma Nagar, Nashik',
      phone: '2365661, 2350294',
      timing: '10AM to 6PM',
      email: 'mahatmanagar@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Jay Bhavani Road Branch',
      address: '“Harimantra Apt”, Jay Bhavani Road, Nashik Road, Nashik',
      phone: '2466780',
      timing: '9AM to 1PM and 4PM to 8PM',
      email: 'dwarka@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Indira Nagar Branch',
      address: '“Santosh Sankul”, Opp. Rajsarthi Society, Indira Nagar, Nashik',
      phone: '2325050, 2320146',
      timing: '10AM to 6PM',
      email: 'indiranagar@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
    {
      name: 'Tapovan Road Branch',
      address: '“Shri Ganesh Vandan Apartment”, Shri Samrth Nagar, Tapovan Road, Nashik',
      phone: '2233754, 2233767',
      timing: '10AM to 6PM',
      email: 'tapovan@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Pimpalgaon Baswant Branch',
      address: 'Opposite Dulaji Nana Patil Sankul, Shivajinagar, Pimpalgaon (B), Niphad, Nashik',
      phone: '02550-251129',
      timing: '10AM to 6PM',
      email: 'pimpalgaon@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Old Saikheda Road Branch',
      address: 'Gajanan Galaxy, Aadhav Nagar, Narayanbapu Chouk, Near Indira Nagar Statue, Old Saikheda Road, Jel Road, Nashik',
      phone: '2415323',
      timing: '9AM to 1PM and 4PM to 8PM',
      email: 'osr@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Jatra Hotel Road Branch',
      address: 'Vinayak Laxmi Apartment, Jatra Hotel-Nadur Road, Opposite Estate Garden, Vrundavan Nagar, Nashik',
      phone: '2303960',
      timing: '10AM to 6PM',
      email: 'jhr@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Makhamalabad Branch',
      address: 'Gangadhar Apartment, Near Bus Stand, Makhamalabad, Nashik',
      phone: '2531300',
      timing: '10AM to 6PM',
      email: 'makhmalabad@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Ghoti Branch',
      address: 'Shetkari Sankul, Mulchandbhai Goti Nagar, Old Agra Road, Ghoti, Igatpuri, Nashik',
      phone: '02553-220633',
      timing: '10AM to 6PM',
      email: 'ghoti@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Dindori Branch',
      address: 'Shri Sankul, Old Kalvan Road, Behind Bus Stand, Dindori, Nashik',
      phone: '02557-221977',
      timing: '10AM to 6PM',
      email: 'dindori@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Govindnagar Branch',
      address: 'Murlidhar Avenue, Chowk No. 4, Behind Prakash Petrol Pump, Opposite BSNL Office, Govindnagar, Nashik',
      phone: '2470111',
      timing: '10AM to 6PM',
      email: 'govindnagar@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Malegaon Branch',
      address: 'Savitri Bungalow, Opposite LIC Office, Mahatma Gandhi Road, Malegaon, Nashik',
      phone: '02554-256755',
      timing: '10AM to 6PM',
      email: 'malegaon@ndvsbank.com',
      atm: true,
      cashRecycler: false,
    },
    {
      name: 'Girnare Branch',
      address: 'Damodar Lila Bldg, Near HDFC Bank, Datta Mandir Stop, Girnare, Nashik',
      phone: '0253-2335422',
      timing: '10AM to 6PM',
      email: 'girnare@ndvsbank.com',
      atm: false,
      cashRecycler: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Branches
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find your nearest NDVS Bank branch
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-gray-900">{branch.name}</h3>
                  <div className="flex space-x-2">
                    {branch.atm && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <FaMoneyBillAlt  className="mr-1" /> ATM
                      </span>
                    )}
                    {branch.cashRecycler && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Cash Recycler
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start mb-4">
                  <FaMapMarkerAlt className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-base text-gray-700">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <FaPhone className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-base text-gray-700">{branch.phone}</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <FaClock className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-base text-gray-700">{branch.timing}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-base text-gray-700">{branch.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;