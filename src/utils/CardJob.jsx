
const CardJob = ({ logo, companyName, location, jobTitle, jobType, description, salary, onApply}) => {
  return (
    <div className='w-full md:w-[49%] lg:w-[24%] p-5 rounded-lg shadow-lg my-2'>
      {/* logo and name */}
      <div className='flex items-center'>
        <img src={logo}  alt={`${companyName} logo`}  className='w-[60px] h-[60px] bg-red-500 rounded-full object-cover' />
        <div className='ms-3'>
          <p className='font-medium text-xl lg:text-lg'>{companyName}</p>
          <p className='text-gray-400'>{location}</p>
        </div>
      </div>

      {/* job time and description */}
      <div className='mt-4'>
        <p className='text-2xl mb-1 font-medium lg:text-xl'>{jobTitle}</p>
        <p className='text-gray-400'>{jobType}</p>
        <article className='text-gray-400 pt-3 border-t mt-3 border-gray-300'>
          {description}
        </article>
      </div>

      {/* salary */}
      <div className='mt-3 flex justify-between items-center'>
        <p className='text-2xl font-medium'>
          ${salary}
          <span className='text-lg text-gray-400 font-normal'> month</span>
        </p>

        <button  onClick={onApply} className='px-10 lg:px-4 py-2 border text-blue-800 border-blue-800 rounded-3xl hover:bg-blue-800 hover:text-white transition' >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CardJob;
