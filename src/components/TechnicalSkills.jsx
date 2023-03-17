import React from 'react'
import skill from '../data/skill';
import {Title} from './';

const svg =    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>;

const TechnicalSkills = () => {
  return (
    <div className="flex flex-col items-right">
          <Title svg={svg} title={'Technical Skills'} />
          <p className="flex gap-2 flex-wrap flex-row items-left text-xs md:text-sm">
            {skill.map(item => (
              <span className="inline-block text-center font-semibold ">
                <div className="border-2 border-stone-900 dark:border-white rounded-xl px-2 py-1 my-1 w-auto hover:bg-slate-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black">{item}</div>
              </span>
            ))}
          </p>
    </div>
  );
}

export default TechnicalSkills;