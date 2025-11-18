"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Будет ли на форуме практика или только теория?",
      answer:
        "Форум будет полностью практическим в формате историй: спикеры поделятся личным опытом - что сработало, а что нет, без лишней теории.",
    },
    {
      question: "Как быстро я получу результаты от форума?",
      answer:
        "Результат Вы можете получить сразу в день форума и как только начнете применять полученные знания.",
    },
    {
      question: "Разбираются ли спикеры в моей сфере бизнеса?",
      answer:
        "Наши спикеры представляют разные отрасли и сферы бизнеса, поэтому каждый участник найдет свои уроки, инсайты и практические решения, которые будут полезны именно для его направления.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            ОТВЕТЫ <span className="text-primary">НА СОМНЕНИЯ</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <h3 className="font-semibold text-card-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
