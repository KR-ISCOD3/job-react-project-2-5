import React from 'react'
import CardJob from '../utils/CardJob'

function Job() {
  return (
    <div className='w-full py-10 bg-white px-3'>
        <h1 className='text-center text-3xl md:text-4xl font-medium'>
            <span className='text-blue-800'>Featured </span>
            Job Circulars
        </h1>

        <div className='md:w-[93%] lg:w-[85%] mx-auto flex flex-wrap mt-10 gap-4'>

            <CardJob  
              logo={'logo.png'} 
              companyName={'Jing Hub Company'} 
              location={'Wat Phnome, Cambodia'} 
              jobTitle={'Pherk Developer'} 
              jobType={'Part-Time'} 
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`} 
              salary={150}
            />

            <CardJob  
              logo={'logo.png'} 
              companyName={'Jing Hub Company'} 
              location={'Wat Phnome, Cambodia'} 
              jobTitle={'Pherk Developer'} 
              jobType={'Part-Time'} 
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`} 
              salary={150}
            />

            <CardJob  
              logo={'logo.png'} 
              companyName={'Jing Hub Company'} 
              location={'Wat Phnome, Cambodia'} 
              jobTitle={'Pherk Developer'} 
              jobType={'Part-Time'} 
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`} 
              salary={150}
            />

            <CardJob  
              logo={'logo.png'} 
              companyName={'Jing Hub Company'} 
              location={'Wat Phnome, Cambodia'} 
              jobTitle={'Pherk Developer'} 
              jobType={'Part-Time'} 
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`} 
              salary={150}
            />
            
        </div>
    </div>
  )
}

export default Job
