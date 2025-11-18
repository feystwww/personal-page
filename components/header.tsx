"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Instagram } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Osh Business School" width={50} height={50} className="rounded-lg" />
            <div>
              <h1 className="text-lg font-bold text-foreground">Ош Бизнес Форум</h1>
              <p className="text-sm text-primary">2025</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/message/SKA4ZCSJ3CYVH1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/oshbschool?igsh=eGpldmZrZTl3NHcz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
