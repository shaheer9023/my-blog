"use client";
import Comments from '@/components/TopNav/Comments/Comments';
import React, { useState, useEffect } from 'react';

export default function Page({ params }: any) {


    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
      



    const [eachPost, seteachPost] = useState<Post | null>(null);
const [comments, setcomments] = useState([]);
    useEffect(() => {
        getSpecificPost();
    }, []);

    const getSpecificPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogID}`);
        const specificDate = await response.json();
        seteachPost(specificDate);
        const responseComment= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.blogID}`);
        const commentsData = await responseComment.json();
        setcomments(commentsData);
    }
    return (
      <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-900 to-gray-300 h-[89vh] overflow-hidden">
        {/* Post Container */}
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 h-full overflow-auto">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text mb-4">
            {(eachPost || {}).title}
          </h2>
    
          {/* Description */}
          <p className="text-gray-700 font-bold text-lg leading-relaxed mb-6">
            {(eachPost || {}).body}
          </p>
    
          {/* Comments Section */}
          <h2 className="text-3xl font-extrabold text-center text-gray-800 bg-gradient-to-r from-purple-500 to-indigo-500  bg-clip-text mb-4">
            Comments
          </h2>
          <div className="p-1 m-3">
            {comments.map(com => (
              <Comments  commentData={com} />
            ))}
          </div>
        </div>
      </div>
    );
  }    