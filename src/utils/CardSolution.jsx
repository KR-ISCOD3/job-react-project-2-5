function CardSolution({ title, date, icon: Icon, iconColor}) {
  return (
    <div className='w-[49%] bg-white rounded-lg overflow-hidden my-1'>
        <div className='flex items-center p-4 shadow-sm'>
            <Icon className={`text-3xl me-2 ${iconColor}`}/>
            <div>
                <p className='font-bold'>{title}</p>
                <p>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default CardSolution
