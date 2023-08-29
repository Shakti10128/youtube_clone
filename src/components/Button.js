import React from 'react'
// static data for button
const buttonList = [
    "Music",
    "live",
    "Songs",
    "Trading",
    "Punjabi",
    "Hollywood",
    "Gaming",
    "Gadegets",
    "Movies",
    "Cricket",
    "Video",
    "News",
    "Hip Hop",
    "Kapil Sharma",
    "Aksay Saini"
  ]

const Button = () => {
  return (
    <div className='flex m-2'>
        {
            buttonList.map((data,index)=>(
                <button className='p-2 mx-2 w-fit bg-gray-200 rounded-md' key={index}>
                    {data}
                </button>
            ))
        }
    </div>
  )
}

export default Button