import React from "react";
import userLogo from '../assests/account.png'

const commentData = [
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [
          {
            name: "shakti",
            text: "hii how are you bro what are you doing rihgt now",
            replies: [
              {
                name: "shakti",
                text: "hii how are you bro what are you doing rihgt now",
                replies: [
                  {
                    name: "shakti",
                    text: "hii how are you bro what are you doing rihgt now",
                    replies: [
                      
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [
          {
            name: "shakti",
            text: "hii how are you bro what are you doing rihgt now",
            replies: [
              {
                name: "shakti",
                text: "hii how are you bro what are you doing rihgt now",
                replies: [
                  
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [],
      },
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [
          {
            name: "shakti",
            text: "hii how are you bro what are you doing rihgt now",
            replies: [
              {
                name: "shakti",
                text: "hii how are you bro what are you doing rihgt now",
                replies: [
                  {
                    name: "shakti",
                    text: "hii how are you bro what are you doing rihgt now",
                    replies: [
                      
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [],
      },
    ],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [
          {
            name: "shakti",
            text: "hii how are you bro what are you doing rihgt now",
            replies: [
              {
                name: "shakti",
                text: "hii how are you bro what are you doing rihgt now",
                replies: [
                  {
                    name: "shakti",
                    text: "hii how are you bro what are you doing rihgt now",
                    replies: [
                      {
                        name: "shakti",
                        text: "hii how are you bro what are you doing rihgt now",
                        replies: [
                          
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [],
      },
    ],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [
          {
            name: "shakti",
            text: "hii how are you bro what are you doing rihgt now",
            replies: [
              {
                name: "shakti",
                text: "hii how are you bro what are you doing rihgt now",
                replies: [
                  
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [],
      },
    ],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [],
  },
  {
    name: "shakti",
    text: "hii how are you bro what are you doing rihgt now",
    replies: [
      {
        name: "shakti",
        text: "hii how are you bro what are you doing rihgt now",
        replies: [
          {
            name: "shakti",
            text: "hii how are you bro what are you doing rihgt now",
            replies: [
              {
                name: "shakti",
                text: "hii how are you bro what are you doing rihgt now",
                replies: [
                  
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];


const Comment = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="flex items-center bg-slate-200 p-2 my-2 h-14 rounded-md">
        <img src={userLogo} alt="" className="h-10 w-10 rounded-full" />
        <div className="mx-2 min-h-fit">
          <p>{name}</p>
          <p className="font-semibold text-sm text-black">{text}</p>
          {/* <Comment data={replies}/> */}
        </div>
      </div>
    );
};

const CommentList = ({comments})=>{
  return comments.map((comment,index)=>(
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-4 w-full border border-l-black">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ))
}

const textContainer = () => {
  return (
    <div>
      <CommentList comments={commentData}/>
    </div>
  );
};

export default textContainer;
