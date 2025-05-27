import human from '@assets/images/tender.png'

const Tender = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: human,
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 text-center sm:text-5xl sm:tracking-tight lg:text-6xl">
            Tender / Notice
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex-shrink-0 relative pt-[75%] overflow-hidden">
                <img 
                  className="absolute top-0 left-0 w-full h-full"
                  src={member.image} 
                  alt={`${member.name} profile`}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tender;