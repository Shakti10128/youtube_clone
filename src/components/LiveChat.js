import React,{useEffect, useState} from 'react'
import logo from '../assests/account.png'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateName } from '../utils/helper';
import { makeRandomMessage } from '../utils/helper';



const LiveChat = () => {
  const [liveMessage,setLiveMessage] = useState("");
  const [showChat,setShowChat] = useState(true);
  const chatMessages = useSelector((store)=>store.chat.messages);
  const dispatch = useDispatch();

  useEffect(()=>{
    const chatInterval = setInterval(()=>{
        dispatch(addMessage({
            name:generateName(),
            message:makeRandomMessage(25) + "✌️"
        }))
    },1000)

    return()=>{
        clearInterval(chatInterval);
    }
  },[])
  return (
    <div className=" lg:w-[97%] h-min mx-2 mt-6 bg-white border border-black
    rounded-lg
    ">
      < div className="flex justify-between items-center h-10 border border-b-black">
        <p className="mx-2 font-bold">Live Chat</p>
        <button
        onClick={()=>setShowChat(!showChat)}
        className="border border-black w-24 mr-4 h-8 hover:bg-slate-200"
        >
          {
            showChat ? "Hide Chat" : "Show Chat"
          }
        </button>
      </div>
      
        {
          showChat ? <div>
            <div className='h-[30rem] overflow-y-scroll flex flex-col-reverse'>
                {
                    chatMessages.map((message,index)=>{
                        return <div className='flex mx-2 mt-1 border-opacity-10 items-center border border-black' key={index}>
                        <img src={logo} alt="" className='h-8 w-8 rounded-full'/>
                        <div className='my-1 flex items-center lg:h-8 lg:w-[25rem] mx-2'>
                            <p className='font-bold'>{message.name}</p>
                            <p className='mx-2 mt-[-3px]'>{message.message}</p>
                        </div>
                    </div>
                    })
                }
            </div>
            {/* for comment */}
            <div className="flex m-2 justify-evenly h-12 translate-x-[-8px] w-[29rem]
            items-center border border-t-slate-950
            ">
            <input type="text" className="w-80 h-8 border-black border text-lg
            px-2 "
            value={liveMessage}
            onChange={(e)=>setLiveMessage(e.target.value)}
            />
            <button className="w-20 h-8 border-black border hover:bg-slate-200"
            onClick={()=>{
                dispatch(addMessage({
                    name:"Shakti Kumar",
                    message:liveMessage
                }));
                setLiveMessage("")
            }}
            >
                Send
                </button>
            </div>
          </div>
          
          : null
        }
    </div>
  )
}

export default LiveChat