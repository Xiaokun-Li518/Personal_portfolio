import { Stack } from '@mui/material';
import React from 'react';
import portfolio from '../data/portfolio';
import {PortfolioItem, Title} from './';


const svg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>


const Portfolio = () => {
return (
    <div className="flex flex-col items-center md:items-start">
        <Title svg={svg} title={'Projects'} />
        <div className="flex flex-col md:flex-row items-left">
         <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </Stack>
      </div>
    </div>
  )
}

export default Portfolio