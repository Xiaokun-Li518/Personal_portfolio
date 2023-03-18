import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';


const PortfolioItem = ({title, imgUrl, stack, link}) => {
  return (
    <Card sx={{width: {xs:'320px', sm:'320px', md: '358px'}}}>
      <a href={link} target="_blank">
        <div className="border-2 border-stone-900 dark:bg-stone-900 dark:text-white dark:border-stone-100 dark:hover:border-gray-600 hover:border-stone-300 rounded-xl overflow-hidden">
          <CardMedia image={imgUrl}
            alt="portfolio"
            className="object-cover cursor-pointer"
            sx={{width:'358px', height:180}}
          />
          <CardContent sx={{height:'auto'}}>
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
              {title}
            </h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
              {stack.map((item) => (
                <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900  dark:border-white rounded-xl hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black">
                  {item}
                </span>
              ))}
            </p>
          </CardContent>
        </div>
      </a>
    </Card>
  );
}

export default PortfolioItem