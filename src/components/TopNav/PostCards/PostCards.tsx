import React from 'react';
import Link from 'next/link';

// Ensure that you have this interface defined somewhere in your project
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ postdata }: { postdata: Post }) {
  return (
    <div className="flex justify-center items-center max-w-xs rounded shadow-lg bg-black m-5 border-8 border-sky-500">

      <div className="flex flex-col items-center p-6">
        {/* Post Image */}
        <img className='w-full h-40' src="https://via.placeholder.com/400x200" alt="Post Image" />

        {/* Post Content */}
        <div className="p-1">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-white mb-2">{postdata.title}</h2>

          {/* Description */}
          <p className="text-white text-base mb-4">{postdata.body}</p>

          {/* Read More Button */}
          <Link href={`/blog/${postdata.id}`}>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-white hover:text-black transition-colors">
              Open Me
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
