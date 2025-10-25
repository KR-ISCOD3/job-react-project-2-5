import { FaRegFileCode } from 'react-icons/fa'
// import { MdOutlineStorefront } from 'react-icons/md'
import CardSolution from '../utils/CardSolution'

function Solution() {
  const arr = [
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
    {title:"Programming",date:'19, Oct 2025',icon:FaRegFileCode,iconColor:'text-red-400'},
  ]

  return (
    <div className='w-full py-15 bg-gray-100 p-3'>
        <h1 className='text-center text-3xl md:text-4xl font-medium'>Our Platform</h1>
        <h1 className='text-center text-3xl md:text-4xl font-medium'>Many <span className='text-blue-800'>Solution</span></h1>

        <div className='mt-10 md:w-[93%] lg:w-[85%] flex justify-between flex-wrap mx-auto'>
            {/*  ----------------------- Solution 3 with arr ----------------------- */}
            {
                arr.map((v,i)=>{
                    return(
                        <CardSolution 
                            key={i} 
                            title={v.title} 
                            date={v.date} 
                            icon={v.icon} 
                            iconColor='text-red-400'
                        />
                    )
                })
            }

            {/*  ----------------------- Solution 2 ----------------------- */}
            {/* <CardSolution title='Programing' date='19, Oct 2025' icon={FaRegFileCode} iconColor='text-red-400'/> */}
            {/* <CardSolution title='Programing' date='19, Oct 2025' icon={FaRegFileCode} iconColor='text-red-400'/> */}
            {/* <CardSolution title='Programing' date='19, Oct 2025' icon={FaRegFileCode} iconColor='text-red-400'/> */}
            {/* <CardSolution title='Programing' date='19, Oct 2025' icon={FaRegFileCode} iconColor='text-red-400'/> */}
            {/* <CardSolution title='Programing' date='19, Oct 2025' icon={FaRegFileCode} iconColor='text-red-400'/> */}


            {/*  ----------------------- Solution 1 ----------------------- */}
            {/* <div className='w-[49%] bg-white rounded-lg overflow-hidden my-1'>
                <div className='flex items-center p-4 shadow-sm'>
                    <FaRegFileCode className='text-3xl me-2 text-red-400'/>
                    <div>
                        <p className='font-bold'>Programming</p>
                        <p>19, Oct 2025</p>
                    </div>
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default Solution
