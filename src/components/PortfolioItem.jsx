import React from 'react'


const PortfolioItem = ({title, imgUrl, stack, link}) => {
  return (
    <a href={link} target="_blank">
      <div className="border-2 border-stone-900 dark:border-white hover:border-stone-300 rounded-xl overflow-hidden">
        <img src={imgUrl} 
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map(item => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900  dark:border-white rounded-xl hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  )
}

export default PortfolioItem