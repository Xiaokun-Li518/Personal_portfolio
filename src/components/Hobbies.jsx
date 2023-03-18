import React from 'react';
import hobby from '../data/hobby';
import {Title} from './';

const svg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
</svg>


const Hobbies = () => {
  return (
    <div className="flex flex-col items-center md:items-start mt-10">
        <Title svg={svg} title={'Hobbies'} />
        <p className="flex gap-2 flex-wrap flex-row text-xs md:text-sm">
            {hobby.map(item => (
            <span className="inline-block text-center font-semibold ">
                <div className="border-2 border-stone-900 dark:border-white rounded-xl px-2 py-1 my-1 w-auto  hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black">{item}</div>
            </span>
            ))}
        </p>
    </div>
  )
}

export default Hobbies