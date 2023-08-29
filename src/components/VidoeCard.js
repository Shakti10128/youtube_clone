import React from 'react'

const VidoeCard = ({info}) => {
    // just for confirmation to check the data
    // console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 my-4 w-80 max-h-96 bg-gray-50 rounded-lg shadow-lg shadow-slate-400 cursor-pointer'>
        <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-2xl'/>
        <ul>
            <li className='font-semibold text-base overflow-x-hidden'>{title}</li>
            <li className='text-sm font-semibold text-gray-400'>{channelTitle}</li>
            <li className='text-sm font-semibold text-gray-400'>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VidoeCard