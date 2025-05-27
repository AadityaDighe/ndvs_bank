import digital_arrest from '@/assets/images/handcuffs.jpg';
import saving_account from '@/assets/images/saving_account.jpg';
import QR from '@assets/images/QrCode.png';
import DICGC from '@assets/images/DICGCLogo.jpg';

const Spotlight = () => {
    const offers = [
      { img: DICGC, alt: 'DICGC', title: 'NDVS Bank is Register with DICGC (http://www.dicgc.org.in)'},
      { img: QR, alt: 'QR' },
    ];
  
    const blogs = [
      {
        title: 'Digital Arrest: Understand Modus Operandi, Current Trends, and Safety Tips',
        link: '#',
        img: digital_arrest,
      },
      {
        title: 'Savings Accounts Help You Achieve Your Financial Goals',
        link: '#',
        img: saving_account,
      },
    ];
  
    const initialSpotlights = [
      'NDVS Bank of India Expands Presence in Coimbatore with New Zonal Office',
      'NDVS Bank of India Empowers Specially Abled Staff to Conquer Mt. Everest Expedition 2025',
      'NDVS Bank of India Donates to Kerala Chief Minister’s Disaster Relief Fund',
      'NDVS Bank of India’s MD & CEO A. Manimekhalai leads Banking Industry at Government of India’s International Women’s Day Celebration',
    ];
  
    const allSpotlights = [
      ...initialSpotlights,
      'NDVS Bank of India celebrated Hindi Diwas',
      'Financial Results for the Quarter ended September 30, 2024',
      'NDVS Bank of India to Host "The Human Potential Conclave - IGNITE 2025"',
      'NDVS Bank of India Successfully Rolls Out IDEA Hackathon - First in the PSBs Hackathon Series 2025',
      'NDVS Bank of India unveils UPI Interoperable Cash Deposit (UPI ICD) at Global Fintech Fest 2024',
      'NDVS Bank of India Unveils NRI Carnival 2025',
      'NDVS Bank of India Becomes First major Indian Bank to Join the Partnership for Carbon Accounting Financials (PCAF)',
      'Financial Results for the Quarter ended December 31, 2024',
      'NDVS Bank of India Launches Nationwide Mega MSME Outreach Campaign',
    ];
  
    return (
      <>  
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">MANAGE YOUR FINANCES BETTER</h2>
                </div>

                <div className="space-y-6">
                {blogs.map((blog, index) => (
                    <div
                    key={index}
                    className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100"
                    >
                    <img
                        src={blog.img}
                        alt="Blog"
                        className="w-full h-32 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between flex-1">
                        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                        {blog.title}
                        </h3>
                    </div>
                    </div>
                ))}
                </div>

              </div>
  
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Bank Spotlight</h2>
                  <p className="text-gray-600 font-medium">Know What's New</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {allSpotlights.map((news, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-200 last:border-0 pb-3 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed">{news}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto flex justify-center my-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {offers.map((offer, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center hover:-translate-y-1 h-full w-full max-w-[350px]"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img 
                      src={offer.img} 
                      alt={offer.alt} 
                      className="max-w-full max-h-[140px] object-contain"
                    />
                  </div>
                  {offer.title && (
                    <p className="text-lg font-medium text-gray-800 mt-4">
                      {offer.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Spotlight;