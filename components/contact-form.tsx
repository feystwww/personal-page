"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "+996", business: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("phone", formData.phone)
      data.append("business", formData.business)
      data.append("_timestamp", Date.now().toString()) // уникальный параметр для каждой отправки

      const response = await fetch("https://formspree.io/f/mqadjpkk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "+996", business: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ОСТАЛИСЬ <span className="text-primary">ВОПРОСЫ?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Оставьте заявку, с вами свяжется наш менеджер и ответит на ваши вопросы
          </p>

          <Card className="p-8 bg-card border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+996 XXX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Сфера бизнеса</Label>
                <Input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="IT, торговля, услуги и т. д."
                  value={formData.business}
                  onChange={handleChange}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-neon text-primary-foreground font-bold py-4 text-lg hover:scale-105 transition-transform"
              >
                {isSubmitting ? "Отправка..." : "Оставить заявку"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-primary font-medium mt-2">Заявка успешно отправлена!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 font-medium mt-2">Ошибка отправки. Попробуйте еще раз.</p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
