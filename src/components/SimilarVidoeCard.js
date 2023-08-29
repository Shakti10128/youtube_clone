import React from 'react'

const SimilarVidoeCard = ({info}) => {
    // just for confirmation to check the data
    // console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='flex p-2 m-2 my-1 w-[28rem] max-h-96 rounded-lg shadow-md shadow-slate-400 cursor-pointer'>
        <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-2xl h-32 w-48'/>
        <ul>
            <li className='font-semibold overflow-x-hidden h-fit ml-1 text-sm overflow-hidden'>{title}</li>
            <li className='text-sm font-semibold text-gray-400 ml-1'>{channelTitle}</li>
            <li className='text-sm font-semibold text-gray-400 ml-1'>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default SimilarVidoeCard