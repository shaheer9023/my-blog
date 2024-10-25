"use client";
import PostCards from '@/components/TopNav/PostCards/PostCards';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  const [postData, setPostData] = useState<Post[]>([]); // Specifying the type of state to be an array of Post objects

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPostData(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className='flex flex-wrap justify-center box-border border-2 border-gray-500'>
      {postData.map((eachPost) => (
       
          <PostCards postdata={eachPost} key={eachPost.id} />
        
      ))}
    </div>
  );
}
