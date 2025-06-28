"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"

interface Technology {
  name: string
  category: string
  icon: string
  description: string
  color: string
  popularity: number
}

const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    description: "Modern UI library",
    color: "from-blue-400 to-cyan-400",
    popularity: 95,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "▲",
    description: "Full-stack React framework",
    color: "from-gray-700 to-gray-900",
    popularity: 90,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    icon: "💚",
    description: "Progressive framework",
    color: "from-green-400 to-emerald-400",
    popularity: 85,
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: "🅰️",
    description: "Enterprise framework",
    color: "from-red-500 to-pink-500",
    popularity: 80,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "📘",
    description: "Typed JavaScript",
    color: "from-blue-600 to-blue-800",
    popularity: 92,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "🎨",
    description: "Utility-first CSS",
    color: "from-cyan-400 to-blue-500",
    popularity: 88,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    description: "JavaScript runtime",
    color: "from-green-500 to-green-700",
    popularity: 90,
  },
  {
    name: "Python",
    category: "Backend",
    icon: "🐍",
    description: "Versatile programming",
    color: "from-yellow-400 to-blue-500",
    popularity: 88,
  },
  {
    name: "PHP",
    category: "Backend",
    icon: "🐘",
    description: "Web development",
    color: "from-purple-500 to-indigo-600",
    popularity: 75,
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: "🔥",
    description: "PHP framework",
    color: "from-red-500 to-orange-500",
    popularity: 82,
  },
  {
    name: "Django",
    category: "Backend",
    icon: "🎯",
    description: "Python framework",
    color: "from-green-600 to-teal-600",
    popularity: 80,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "⚡",
    description: "Node.js framework",
    color: "from-gray-600 to-gray-800",
    popularity: 85,
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    description: "NoSQL database",
    color: "from-green-500 to-green-700",
    popularity: 85,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    description: "Advanced SQL database",
    color: "from-blue-600 to-indigo-600",
    popularity: 88,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "🐬",
    description: "Popular SQL database",
    color: "from-orange-500 to-yellow-500",
    popularity: 82,
  },
  {
    name: "Redis",
    category: "Database",
    icon: "🔴",
    description: "In-memory store",
    color: "from-red-500 to-red-700",
    popularity: 78,
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "Cloud",
    icon: "☁️",
    description: "Cloud platform",
    color: "from-orange-400 to-yellow-500",
    popularity: 92,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "🐳",
    description: "Containerization",
    color: "from-blue-500 to-cyan-500",
    popularity: 90,
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: "⚙️",
    description: "Container orchestration",
    color: "from-blue-600 to-purple-600",
    popularity: 85,
  },
  {
    name: "GraphQL",
    category: "API",
    icon: "📊",
    description: "Query language",
    color: "from-pink-500 to-purple-500",
    popularity: 80,
  },
]

const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "API"]

export function TechnologyGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechnologies =
    activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <ScrollAnimation>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white/50 dark:bg-gray-800/50 text-muted-foreground hover:bg-white dark:hover:bg-gray-700 hover:text-foreground hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      {/* Technology Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTechnologies.map((tech, index) => (
          <ScrollAnimation key={tech.name} delay={index * 50}>
            <Card
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Popularity Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                <div
                  className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                  style={{ width: hoveredTech === tech.name ? `${tech.popularity}%` : "0%" }}
                />
              </div>

              <CardContent className="relative p-6 text-center">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>

                {/* Technology Name */}
                <h3 className="font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                  {tech.description}
                </p>

                {/* Category Badge */}
                <Badge
                  variant="secondary"
                  className="text-xs group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-300"
                >
                  {tech.category}
                </Badge>

                {/* Popularity Percentage (shown on hover) */}
                <div
                  className={`absolute bottom-2 right-2 text-xs font-medium transition-all duration-300 ${
                    hoveredTech === tech.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.popularity}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      {/* Technology Stats */}
      <ScrollAnimation delay={200}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <p className="text-sm text-muted-foreground">Categories</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Modern Stack</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Support</p>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  )
}
