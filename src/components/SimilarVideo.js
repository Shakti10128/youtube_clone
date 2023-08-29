import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constantAPI';
import SimilarVidoeCard from './SimilarVidoeCard';
import { Link } from 'react-router-dom';

const SimilarVideo = () => {
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
    <div className='flex flex-col flex-wrap justify-evenly ml-2'>        
        {
          vidoes.map((video,index)=>
          <Link to={'/watch?v='+video?.id} key={index}>
            <SimilarVidoeCard info={video} />
          </Link>
          )
        }
    </div>
  )
}

export default SimilarVideo