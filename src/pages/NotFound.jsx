import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bTct1_SQD2l9fxpPCJ1Ss2jw8QDhJCuvgubrY8bqgTzwaKyr')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/85 rounded-3xl shadow-2xl py-14 md:py-20 px-6 md:px-12" style={{ border: '1px solid #d2d8de' }}>
          <div className="w-full md:w-1/2">
            <h1 className="text-8xl md:text-[140px] font-black text-slate-700 leading-none">404</h1>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Page not found</h2>
            <p className="mt-4 text-lg md:text-xl text-slate-500">The page you are looking for doesn’t exist or has been moved.</p>
            <Link to="/" className="mt-8 inline-block btn btn-primary px-8 py-3 text-base md:text-lg">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
