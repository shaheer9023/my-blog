"use client";
import Comments from '@/components/TopNav/Comments/Comments';
import React, { useState, useEffect } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export default function Page({ params }: { params: { blogID: string } }) {
    const [eachPost, setEachPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getSpecificPost();
    }, []);

    const getSpecificPost = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogID}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const specificData = await response.json();
            setEachPost(specificData);

            const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.blogID}`);
            if (!responseComment.ok) throw new Error('Network response was not ok');
            const commentsData = await responseComment.json();
            setComments(commentsData);
        } catch (error) {
            console.error("Error fetching post or comments:", error);
        }
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
                <h2 className="text-3xl font-extrabold text-center text-gray-800 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text mb-4">
                    Comments
                </h2>
                <div className="p-1 m-3">
                    {comments.map(com => (
                        <Comments key={com.id} commentData={com} />
                    ))}
                </div>
            </div>
        </div>
    );
}
