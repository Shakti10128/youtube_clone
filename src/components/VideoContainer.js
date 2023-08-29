import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constantAPI';
import VidoeCard from './VidoeCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [vidoes,setVidoes] = useState([]);
  useEffect(()=>{
    getVidoesData();
  },[])

  const getVidoesData = async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVidoes(json.items);
  }
  return (
    <div className='flex flex-wrap justify-evenly'>        
        {
          vidoes.map((video,index)=>
          <Link to={'/watch?v='+video?.id} key={index}>
            <VidoeCard info={video} />
          </Link>
          )
        }
    </div>
  )
}

export default VideoContainer