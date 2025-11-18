import Image from "next/image"
import { MessageCircle, Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            СВЯЗАТЬСЯ С <span className="text-primary">НАМИ</span>
          </h2>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image src="/images/logo.png" alt="Osh Business School" width={80} height={80} className="rounded-lg" />
          </div>

          {/* Contact Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/message/SKA4ZCSJ3CYVH1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
            >
              <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/oshbschool?igsh=eGpldmZrZTl3NHcz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
            >
              <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+9960777111022"
              className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
            >
              <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-muted-foreground">© 2025 Ош Бизнес Форум. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
