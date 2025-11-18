import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  const standardFeatures = ["участие на форуме", "нетворкинг", "право на участие в аукционе", "кофе-брейк"]

  const businessFeatures = [
    "участие на форуме",
    "нетворкинг",
    "право на участие в аукционе",
    "кофе-брейк",
    "запись форума на 3 месяца",
    "электронный сертификат",
    "доступ на платный телеграм канал Ишкер Стори",
  ]

  const specialOffers = [
    "2 и более участников - скидка 20%",
    "сферы образования, спорта и здоровья - скидка 20%",
    "государственных учреждений - 30%",
    "студентов - 30%",
  ]

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ТАРИФЫ <span className="text-primary">УЧАСТИЯ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Package */}
            <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">СТАНДАРТ</h3>

              <div className="space-y-3 mb-6">
                <p className="font-semibold text-card-foreground">Включает:</p>
                {standardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <p className="font-semibold text-card-foreground">Стоимость при оплате:</p>
                <div className="flex justify-between items-center p-3 border border-primary/30 rounded-lg">
                  <span>01-15 сентября</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">10000</div>
                    <div className="text-xl font-bold text-primary">5000 сом</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border border-primary/30 rounded-lg">
                  <span>16-30 сентября</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">10000</div>
                    <div className="text-xl font-bold text-primary">5500 сом</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border border-primary/30 rounded-lg">
                  <span>01-05 октября</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">10000</div>
                    <div className="text-xl font-bold text-primary">6000 сом</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-8 text-left">
  <p className="font-semibold text-card-foreground">Спец предложение для:</p>
  {specialOffers.map((offer, index) => (
    <div key={index} className="text-sm text-card-foreground">
      - {offer}
    </div>
  ))}
</div>



              <Button
                size="lg"
                className="w-full gradient-neon font-bold py-4 text-lg hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://wa.me/message/SKA4ZCSJ3CYVH1" target="_blank" rel="noopener noreferrer">
                  Забронировать место
                </a>
              </Button>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">БИЗНЕС</h3>

              <div className="space-y-3 mb-6">
  <p className="font-semibold text-card-foreground">Включает:</p>
  {businessFeatures.map((feature, index) => (
    <div key={index} className="flex gap-3">
  <Check className="flex-shrink-0 w-4 h-4 mt-1 text-primary" />
  <span className="text-card-foreground">{feature}</span>
</div>

  ))}
</div>


              <div className="space-y-3 mb-6">
                <p className="font-semibold text-card-foreground">Стоимость при оплате:</p>
                <div className="flex justify-between items-center p-3 border border-primary/30 rounded-lg">
                  <span>01-15 сентября</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">10000</div>
                    <div className="text-xl font-bold text-primary">7000 сом</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border border-primary/30 rounded-lg">
                  <span>16-30 сентября</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">10000</div>
                    <div className="text-xl font-bold text-primary">8000 сом</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border border-primary/30 rounded-lg">
                  <span>01-05 октября</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">10000</div>
                    <div className="text-xl font-bold text-primary">10000 сом</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-8 text-left">
                <p className="font-semibold text-card-foreground">Спец предложение для:</p>
                {specialOffers.map((offer, index) => (
                  <div key={index} className="text-sm text-card-foreground">
                    - {offer}
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full gradient-neon font-bold py-4 text-lg hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://wa.me/message/SKA4ZCSJ3CYVH1" target="_blank" rel="noopener noreferrer">
                  Забронировать место
                </a>
              </Button>
            </Card>

            {/* Corporate Package */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
