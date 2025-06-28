"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "WARQ Technology transformed our vision into reality. Their expertise in modern web development is unmatched. The team delivered a scalable solution that exceeded our expectations and helped us grow our business by 200%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    content:
      "Outstanding mobile app development. The team delivered beyond our expectations with excellent communication throughout the project. Their technical expertise and attention to detail is remarkable.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "EcoCommerce",
    content:
      "Their e-commerce solution boosted our sales by 300%. Professional, reliable, and innovative team that truly understands business needs. The platform they built is fast, secure, and user-friendly.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Austin, TX",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    company: "FinTech Solutions",
    content:
      "Working with WARQ Technology was a game-changer for our fintech startup. They delivered a secure, compliant platform that our users love. Their expertise in financial technology is impressive.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Seattle, WA",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Digital Agency Pro",
    content:
      "The custom CRM system they built for us streamlined our entire workflow. Response time improved by 60% and client satisfaction reached an all-time high. Highly recommend their services!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Miami, FL",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogiFlow Corp",
    content:
      "WARQ Technology delivered a comprehensive logistics management system that revolutionized our operations. The real-time tracking and analytics features are exactly what we needed.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    location: "Chicago, IL",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial Card */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4">
            <Quote className="h-24 w-24 text-blue-500 transform rotate-12" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Quote className="h-16 w-16 text-purple-500 transform -rotate-12 scale-x-[-1]" />
          </div>
        </div>

        <CardContent className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar and Info */}
            <div className="flex-shrink-0 text-center md:text-left">
              <Avatar className="h-20 w-20 mx-auto md:mx-0 mb-4 ring-4 ring-blue-500/20">
                <AvatarImage src={currentTestimonial.avatar || "/placeholder.svg"} alt={currentTestimonial.name} />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold">
                  {currentTestimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{currentTestimonial.role}</p>
                <p className="text-sm text-muted-foreground">{currentTestimonial.company}</p>
                <p className="text-xs text-muted-foreground">{currentTestimonial.location}</p>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 space-y-4">
              {/* Rating */}
              <div className="flex justify-center md:justify-start">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-center md:text-left italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Company Badge */}
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Verified Client
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:scale-110 transition-all duration-200 shadow-lg"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:scale-110 transition-all duration-200 shadow-lg"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
          {isAutoPlaying ? "Auto-playing" : "Paused"}
        </button>
      </div>
    </div>
  )
}
