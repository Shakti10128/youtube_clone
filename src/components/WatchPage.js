import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { closeMenu, showMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import SimilarVideo from "./SimilarVideo";


const WatchPage = () => {

  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      dispatch(showMenu());
    };
  });
  return (
    <div className="flex flex-row overflow-x-hidden">
      <div className="flex flex-col w-[65rem]">
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/"+ searchParam.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="h-[34rem] w-[60rem] ml-20 my-6"
        ></iframe>

        {/* channel logo and subscriber */}
        <div className="ml-20 font-bold text-lg mb-4">
          Channel logo and Subscriber
        </div>
        {/* comments for video */}
        <div className="ml-20 font-bold text-lg">
          Comments:
          <div>
            <CommentContainer/>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[30rem]">
        {/* live chat */}
          <LiveChat/>
        
        {/* related videos */}
        <SimilarVideo/>
      </div>
    </div>
  );
};

export default WatchPage;
