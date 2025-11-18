"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Speakers() {
  const speakers = [
    { image: "/images/aibek-dzhangaziev.png" },
    { image: "/images/evgeniy-kotov.png" },
    { image: "/images/mametzhanov-askar.png" },
    { image: "/images/aseliya-kupueva.png" },
    { image: "/images/islambek-ibragimov.jpeg" },
    { image: "/images/nurmuhammed-abdykadyrov.png" },
    { image: "/images/esen-sagynov.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length)
  }

  // YouTube Shorts вертикальные
  const shorts = [
    "https://www.youtube.com/embed/EBfkMHI67pQ",
    "https://www.youtube.com/embed/AOpQn4Dd3J8",
  ]
  const [currentShort, setCurrentShort] = useState(0)

  const nextShort = () => {
    setCurrentShort((prev) => (prev + 1) % shorts.length)
  }

  const prevShort = () => {
    setCurrentShort((prev) => (prev - 1 + shorts.length) % shorts.length)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            <span className="text-primary">СПИКЕРЫ</span>
          </h2>

          <div className="relative">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={`Speaker ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>

                <div className="aspect-[4/5] w-[90vw] overflow-hidden rounded-xl shadow-md">
                  <img
                    src={speakers[currentIndex].image || "/placeholder.svg"}
                    alt={`Speaker ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {speakers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Вертикальные YouTube Shorts */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Приглашение от спикеров
            </h3>

            <div className="relative flex items-center justify-center">
              {/* Prev button */}
              <button
                onClick={prevShort}
                className="absolute left-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              {/* Видео вертикальное */}
              <div className="w-full max-w-[360px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg mx-auto">
                <iframe
                  key={currentShort}
                  src={shorts[currentShort]}
                  title={`YouTube Short ${currentShort + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Next button */}
              <button
                onClick={nextShort}
                className="absolute right-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 z-10"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {shorts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentShort(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentShort ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
