import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-xl text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-slate-700">404</h1>
        <p className="mt-3 text-xl font-semibold text-slate-600">Page not found</p>
        <p className="mt-2 text-gray-500">
          We couldn’t find the page you’re looking for. Check the URL or head back to home.
        </p>
        <Link to="/" className="mt-6 inline-block btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </main>
  )
}

export default NotFound
