"use client"

import Link from "next/link"
import type React from "react"

interface SmoothScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothScrollLink({ href, children, className, onClick }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerOffset = 80 // Account for sticky header
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    onClick?.()
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
