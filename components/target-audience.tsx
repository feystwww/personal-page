"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TargetAudience() {
  return (
    <section className="pt-2 pb-4 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">
            ДЛЯ КОГО <span className="text-primary">ФОРУМ?</span>
          </h2>

          <Card className="p-8 bg-card border-primary/20 mb-12">
            <ul className="list-none text-left space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Предприниматели, которые хотят масштабироваться быстро
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Руководители команд и менеджеры, отвечающие за результат
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Будущие предприниматели
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Эксперты, фрилансеры и блогеры
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Все, кто ищет новые идеи, связи и проверенные практики
                </span>
              </li>
            </ul>
          </Card>

          <Button
            size="lg"
            className="gradient-neon text-primary-foreground font-bold px-12 py-4 text-lg hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://wa.me/message/SKA4ZCSJ3CYVH1" target="_blank" rel="noopener noreferrer">
              ЗАБРОНИРОВАТЬ МЕСТО
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
