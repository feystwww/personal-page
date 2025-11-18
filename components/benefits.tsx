"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Benefits() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            ЧТО ВЫ <span className="text-primary">ПОЛУЧИТЕ?</span>
          </h2>

          <Card className="p-8 bg-card border-primary/20 mb-12">
            <ul className="list-none text-left space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Один день вместо месяцев проб и ошибок
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  100 уроков из реального бизнеса
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  10+ летний опыт предпринимателей в разных отраслях
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Живые кейсы и ответы на ваши вопросы
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Полезный нетворкинг и сообщество предпринимателей
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                <span className="text-card-foreground font-medium">
                  Заряд мотивации, который превратится в конкретные действия
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
              ХОЧУ ЗАПИСАТЬСЯ
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
