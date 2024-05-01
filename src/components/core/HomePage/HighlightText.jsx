import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-t from-blue-200 rounded-full p-1'>
        {text}
    </span>
  )
}

export default HighlightText