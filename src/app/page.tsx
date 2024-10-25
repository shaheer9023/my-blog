import React from 'react'

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-20"> {/* Adjust height to account for navbar */}
      <h1 className="text-5xl font-bold text-center">Welcome to my Blog</h1>
      <p className="text-xl text-center">This is my personal blog where I will post about my experiences, thoughts, and learnings.</p>
      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
        <p className="text-lg text-center">Hi, my name is Shaheer Ahmad and I am a frontend developer.</p>
      </div>
    </div>
  )
}
