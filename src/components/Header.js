import React, { useEffect, useState } from 'react'
import menu_logo from '../assests/menu_icon.png'
import youtube_logo from '../assests/youtube_logo.png'
import account from '../assests/account.png'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../utils/appSlice'
import { YOUTUBE_SUGGESTION_API } from '../utils/constantAPI'
import { chacheResults, deleteChache } from '../utils/SearchSlice'

const Header = () => {
  const [isSearch,setIsSearch] = useState(false);
  const [query,setQuery] = useState("");
  const [queryData,setQueryData] = useState([]);

  const searchChache = useSelector((store)=>store.search)

  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(setMenu());
  }

  const getSuggestionQueryData = async()=>{
    const data = await fetch(YOUTUBE_SUGGESTION_API + query);
    const json = await data.json();
    setQueryData(json[1]);
    // console.log(json[1])

    // storing data corresponding to query 
    dispatch(chacheResults({
      [query]:[json[1]]
    }));
    
  }

    // if the query length is 1 then chache will delete
    // else set the value means user searching something in search box
    const deleteChachesOrSetQuery = (e)=>{
      // console.log("type:  ",typeof(query.length))
      if(query.length === 1){
        // console.log("clear");
        dispatch(deleteChache());
      }

      setQuery(e.target.value);
     
    }
      


  useEffect(()=>{
    // after a time quantum it will trigger the function
    const timer = setTimeout(() => {
     // if data is already present return it directly
     if(searchChache[query]){
      
      // console.log(searchChache[query][0]);
      setQueryData(searchChache[query][0]);
     }
    // else make an API call
     else{
      // console.log("not present");
      getSuggestionQueryData()
     }
    }, 200);

      // when the component will unMount or destroyed the timer will be delete from browser
    return()=>{
      clearTimeout(timer);
    }
    // useEffect will be call after each changes in query
  },[query])
  
  return (
    <div className='h-16 flex flex-row items-center justify-between sticky top-0 z-10 bg-slate-50
    shadow-md shadow-blue-100'>
      {/* logo and menu */}
      <div className='flex h-6 cursor-pointer'>
        <img src={menu_logo} alt=""
        onClick={toggleMenuHandler}
        className='mx-2'/>
        <a href="/">
        <img src={youtube_logo} alt="" className='h-6'/>
        </a>
      </div>

      {/* search bar and button */}
      <div className='flex items-center mr-10'>
        <input type="text" name="" id="" placeholder='search' value={query}
        className='h-9 lg:w-[30rem] border border-gray-500 rounded-l-full text-start
        text-lg pl-3 text-black
        '
        onChange={(e)=>{deleteChachesOrSetQuery(e)}}
        onFocus={()=> setIsSearch(true)}
        onBlur={()=>setIsSearch(false)}
        />
        <button className='h-9 w-14 text-xl border border-gray-500 rounded-r-full
        bg-gray-200 
        '>
          🔍
          </button>
      </div>
      {
        isSearch && <div className='absolute min-h-0  top-[3rem] z-10 lg:ml-[32rem]  lg:w-[30rem]'>
        <ul className='bg-slate-100 rounded-lg py-4 shadow-md'>
            {
              queryData.map((data,index)=>{
                return <li className='m-2 hover:bg-slate-400 rounded-md
                cursor-pointer
                ' key={index}
                onMouseDown={()=> setQuery(data)}
                >🔍 {data}</li>
              })
            }
        </ul>
      </div>
      }


      {/* account logo */}
      <div className='flex'>
        <img src={account} alt=""  className='h-10 mr-8 cursor-pointer'/>
      </div>

    </div>
  )
}

export default Header