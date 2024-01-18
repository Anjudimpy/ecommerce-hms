

const Cards = ( {heading, items}) => {
      
  return (
    
    <div className=' card bg-white  text-gray-500 h-56 w-64 '>
      <h6 className=' text-white font-bold bg-yellow-500 pt-2  pl-2 mb-2 pb-2 '>{heading}</h6>
      <ol className='cursor-pointer text-xs md:text-sm'>
      {items && items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
    </div>

  )
}

export default Cards;