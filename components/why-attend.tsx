"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function WhyAttend() {
  const reasons = [
    "Десятилетия опыта за один день",
    "Реальный взгляд на бизнес — без прикрас",
    "Конкретные идеи и план действий после форума",
  ]

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ПОЧЕМУ СТОИТ <span className="text-primary">ПРИЙТИ?</span>
          </h2>
          <p className="text-xl text-primary font-semibold mb-8">Ош Бизнес Форум 2025</p>

          {/* Перечисление выровнено слева */}
          <div className="grid gap-4 mb-8 text-left">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-4 justify-start">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">{reason}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg bg-primary/10 border border-primary/20 mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-primary" />
              <Star className="w-5 h-5 text-primary" />
              <Star className="w-5 h-5 text-primary" />
              <Star className="w-5 h-5 text-primary" />
              <Star className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xl font-bold text-foreground">
              Не упустите шанс. <br />
              Места ограничены!
            </p>
          </div>

          <Button
            size="lg"
            className="gradient-neon text-primary-foreground font-bold px-12 py-4 text-lg hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://wa.me/message/SKA4ZCSJ3CYVH1" target="_blank" rel="noopener noreferrer">
              ЗАПИСАТЬСЯ
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
