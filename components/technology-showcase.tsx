"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

const featuredTechs = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
  { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
  { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
]

export function TechnologyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredTechs.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 p-8 mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Featured Technologies
        </h3>

        <div className="flex justify-center items-center space-x-4 mb-6">
          {featuredTechs.map((tech, index) => (
            <div
              key={tech.name}
              className={`transition-all duration-500 ${
                index === currentIndex ? "scale-125 opacity-100" : "scale-75 opacity-50"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl shadow-lg`}
              >
                {tech.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Badge
            variant="outline"
            className={`text-lg px-6 py-2 bg-gradient-to-r ${featuredTechs[currentIndex].color} text-white border-0`}
          >
            {featuredTechs[currentIndex].name}
          </Badge>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {featuredTechs.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
