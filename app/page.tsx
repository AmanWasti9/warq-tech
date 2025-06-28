"use client"

import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Laptop,
  Monitor,
  Smartphone,
  Users,
  Zap,
  Shield,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollAnimation } from "@/components/scroll-animation"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCounter } from "@/components/animated-counter"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { PageLoader } from "@/components/page-loader"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { TestimonialStats } from "@/components/testimonial-stats"
import { TechnologyShowcase } from "@/components/technology-showcase"
import { TechnologyGrid } from "@/components/technology-grid"
import emailjs from 'emailjs-com';

export default function HomePage() {
  // const form = useRef();
  const form = useRef<HTMLFormElement>(null);

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
            'service_eaw5y7r',
            'template_jntsevk',
            form.current!, // <-- non-null assertion
            "x2Rj-TukOxeJQEB38" // Use the PUBLIC key from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
      features: ["Enterprise Applications", "API Development", "System Integration", "Legacy Modernization"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Design & Development",
      description:
        "Stunning, responsive websites that convert visitors into customers using modern frameworks and best practices.",
      features: ["React & Next.js", "Vue & Angular", "Node.js & Python", "Full-Stack Solutions"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store development with Shopify, WooCommerce, and custom e-commerce platforms.",
      features: ["Shopify Development", "WordPress/WooCommerce", "Custom E-commerce", "Payment Integration"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Progressive Web Apps"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions, APIs, and database architecture for scalable applications.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Cloud Architecture"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive business growth.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const stats = [
    { number: 150, label: "Projects Completed", suffix: "+" },
    { number: 50, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 24, label: "Support Available", suffix: "/7" },
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security standards",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled developers and designers",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
  ]

  return (
    <>
      <PageLoader />
      <div
        className={`flex flex-col min-h-screen bg-background transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
          <div className="container flex h-16 items-center justify-between py-10">
            {/* <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WARQ TECHNOLOGY
              </span>
            </Link> */}
            <Link href="/" className="flex items-center space-x-2 group">
              <img src="/logo.png" className="h-20 w-50" />
            </Link>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {["Services", "About", "Portfolio", "Contact"].map((item) => (
                <SmoothScrollLink
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative transition-colors hover:text-primary group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </SmoothScrollLink>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <SmoothScrollLink href="#contact">Get Started</SmoothScrollLink>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <FloatingElements />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <ScrollAnimation className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit animate-pulse">
                    🚀 Leading Software Development Company
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl font-poppins">
                    Transform Your Ideas Into
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                      {" "}
                      Digital Reality
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                    We deliver cutting-edge software solutions, stunning web
                    designs, powerful mobile apps, and comprehensive digital
                    services to help your business thrive in the digital age.
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <SmoothScrollLink href="#contact">
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </SmoothScrollLink>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="hover:bg-muted/50 transform hover:scale-105 transition-all duration-200 bg-transparent"
                  >
                    <SmoothScrollLink href="#portfolio">
                      View Our Work
                    </SmoothScrollLink>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <ScrollAnimation
                      key={index}
                      delay={index * 100}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        <AnimatedCounter
                          end={stat.number}
                          suffix={stat.suffix}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                delay={200}
                className="flex items-center justify-center"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="WARQ Technology - Software Development Services"
                      width={500}
                      height={400}
                      className="rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <ScrollAnimation>
              <div className="text-center space-y-4 mb-16">
                <Badge variant="outline">Why Choose Us</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-poppins">
                  Built for Excellence
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                    <CardContent className="pt-6">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge variant="outline">Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-poppins">
                  Comprehensive Digital Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  From concept to deployment, we provide end-to-end software
                  development services using the latest technologies and
                  industry best practices.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <CardHeader className="relative">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${service.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-poppins">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <ul className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge variant="outline">Technologies We Use</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-poppins">
                  Cutting-Edge Technology Stack
                </h2>
                <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
                  We work with the latest and most reliable technologies to
                  ensure your project is built for success.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <TechnologyShowcase />
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <TechnologyGrid />
            </ScrollAnimation>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollAnimation>
              <div className="text-center space-y-4 mb-16">
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50"
                >
                  ⭐ Client Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-poppins bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <p className="max-w-[600px] mx-auto text-muted-foreground text-lg leading-relaxed">
                  Don't just take our word for it. Here's what our satisfied
                  clients have to say about working with WARQ Technology.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <TestimonialStats />
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <TestimonialSlider />
            </ScrollAnimation>

            {/* Trust Indicators */}
            <ScrollAnimation delay={600}>
              <div className="mt-16 text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Trusted by companies worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {[
                    "TechStart Inc.",
                    "InnovateLab",
                    "EcoCommerce",
                    "FinTech Solutions",
                    "Digital Agency Pro",
                    "LogiFlow Corp",
                  ].map((company, index) => (
                    <div
                      key={index}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollAnimation>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge variant="outline">About WARQ Technology</Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-poppins">
                      Your Trusted Technology Partner
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      At WARQ Technology, we're passionate about transforming
                      businesses through innovative software solutions. Our team
                      of expert developers, designers, and strategists work
                      together to deliver exceptional digital experiences that
                      drive growth and success.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Expert team with 5+ years of experience",
                      "150+ successful projects delivered",
                      "24/7 support and maintenance",
                      "Agile development methodology",
                      "100% client satisfaction rate",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <SmoothScrollLink href="#contact">
                      Let's Work Together{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </SmoothScrollLink>
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="WARQ Technology Team"
                    width={600}
                    height={500}
                    className="relative rounded-3xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container px-4 md:px-6">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <Badge variant="outline">Our Portfolio</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-poppins">
                  Recent Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
                  Take a look at some of our recent work and see how we've
                  helped businesses achieve their digital goals.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce Platform",
                  desc: "Modern e-commerce solution with advanced features",
                  tags: ["React", "Node.js", "MongoDB"],
                },
                {
                  title: "Mobile Banking App",
                  desc: "Secure mobile banking application with biometric auth",
                  tags: ["React Native", "Firebase", "AWS"],
                },
                {
                  title: "SaaS Dashboard",
                  desc: "Analytics dashboard for business intelligence",
                  tags: ["Vue.js", "Python", "PostgreSQL"],
                },
              ].map((project, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                    <div className="relative overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=250&width=400`}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-poppins">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {project.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="outline">Get In Touch</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-poppins">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
              Let's discuss your project requirements and how we can help bring your vision to life.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="mx-auto max-w-2xl">
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-poppins">Contact WARQ Technology</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 mt-4">
                      <label className="text-sm font-medium">First Name</label>
                      <input
                        name="first_name"
                        required
                        className="flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2 mt-4">
                      <label className="text-sm font-medium">Last Name</label>
                      <input
                        name="last_name"
                        required
                        className="flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <label className="text-sm font-medium">Service Needed</label>
                    <select
                      name="service"
                      required
                      className="flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm"
                    >
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>E-commerce Development</option>
                      <option>Custom Software</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
                  <div className="space-y-2 mt-4">
                    <label className="text-sm font-medium">Project Details</label>
                    <textarea
                      name="message"
                      required
                      className="flex min-h-[100px] w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 mt-4"
                    size="lg"
                  >
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>


        {/* Footer */}
        <footer className="border-t bg-background/80 backdrop-blur-sm">
          <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
            <div className="flex items-center space-x-2 group">
              <img src="/logo.png" className="h-20 w-50" />
            </div>
            <p className="text-xs text-muted-foreground sm:ml-auto">
              © 2024 WARQ Technology. All rights reserved. Crafted with ❤️ for
              innovation.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
