"use client"

import { Star, Users, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/animated-counter"

export function TestimonialStats() {
  const stats = [
    {
      icon: <Star className="h-6 w-6" />,
      value: 4.9,
      suffix: "/5",
      label: "Average Rating",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: 150,
      suffix: "+",
      label: "Projects Delivered",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: 300,
      suffix: "%",
      label: "Average ROI",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="text-center border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <CardContent className="p-6">
            <div
              className={`mx-auto w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white mb-3`}
            >
              {stat.icon}
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
