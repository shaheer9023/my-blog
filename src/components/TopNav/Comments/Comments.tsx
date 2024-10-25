import React from 'react';

interface CommentData {
  name: string;
  email: string;
  body: string;
}

interface CommentsProps {
  commentData: CommentData;
}

export default function Comments({ commentData }: CommentsProps) {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg my-2 p-4">
        {/* Commenter Information */}
        <div className="flex items-center mb-2">
          <div className="mr-3">
            <img
              className="w-8 h-8 rounded-full border-2 border-purple-500"
              src={`https://ui-avatars.com/api/?name=${commentData.name}&background=random`}
              alt={commentData.name}
            />
          </div>
          <div>
            <p className="text-md font-semibold text-purple-800">{commentData.email}</p>
          </div>
        </div>
        {/* Comment Body */}
        <p className="text-gray-700 text-sm leading-relaxed">{commentData.body}</p>
      </div>
    </div>
  );
}
