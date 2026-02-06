import React from 'react'

const SingleInfo = ({ label, text, Image, href }) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
        <div className='w-12 h-12 rounded-xl bg-deepBlue/60 flex items-center justify-center'>
          <Image className='text-2xl text-cyan' />
        </div>
        <div className='flex flex-col leading-tight'>
          {label && <p className='text-sm text-lightGrey'>{label}</p>}
          {href ? (
            <a className='text-white hover:underline hover:text-cyan' href={href} target='_blank' rel='noreferrer'>
              {text}
            </a>
          ) : (
            <p className='text-white'>{text}</p>
          )}
        </div>
    </div>
  )
}

export default SingleInfo
