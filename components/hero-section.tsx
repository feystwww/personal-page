"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
  className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://i.postimg.cc/FFDFsbTs/Whats-App-Image-2025-09-16-at-5-46-59-PM.jpg')",
  }}
>


      {/* Overlay для затемнения фона */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight sm:text-6xl">
            <span
              className="text-primary drop-shadow-[0_0_1px_rgba(206,255,0,0.6)]"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              ОШ БИЗНЕС ФОРУМ 2025
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-semibold">
            100 уроков бизнеса за один день
          </p>

          {/* Новый блок со статистикой */}
          {/* Новый блок со статистикой */}
<div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-10 text-center">
  <div>
    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">10</p>
    <p className="text-sm sm:text-base md:text-lg text-white font-medium">отраслей</p>
  </div>
  <div>
    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">10</p>
    <p className="text-sm sm:text-base md:text-lg text-white font-medium">предпринимателей</p>
  </div>
  <div>
    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">10+</p>
    <p className="text-sm sm:text-base md:text-lg text-white font-medium">лет опыта</p>
  </div>
</div>


          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-neon text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-transform"
              asChild
            >
              <a
                href="https://wa.me/message/SKA4ZCSJ3CYVH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                КУПИТЬ БИЛЕТ
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-bold bg-transparent rounded-lg"
              asChild
            >
              <a
                href="https://wa.me/message/SKA4ZCSJ3CYVH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                ПОДРОБНЕЕ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
