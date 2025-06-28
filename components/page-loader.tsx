"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500) // Small delay before hiding loader
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment between 5-20
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gray-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              WARQ TECHNOLOGY
            </h1>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl text-white font-medium animate-fade-in">Welcome to WARQ Technology</h2>
          <p className="text-gray-400 text-sm md:text-base animate-fade-in-delay">
            Transforming Ideas Into Digital Reality
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-80 md:w-96 space-y-3">
          {/* Progress Bar */}
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Loading...</span>
            <span className="text-white font-medium">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}
