import React from 'react'

const Title = ({id, svg, title}) => {
  return (
    <div 
    id={id && id}
    className="flex flex-wrap my-10 gap-x-4 text-xl font-bold">
    {svg}
    <h2 className="text-lg md:text-xl font-bold">{title}</h2>
    </div>
  )
}

export default Title