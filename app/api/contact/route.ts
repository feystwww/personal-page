import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, business } = await request.json()

    const emailContent = `
      Новая заявка с сайта Osh Business Forum 2025:
      
      Имя: ${name}
      Телефон: ${phone}
      Сфера бизнеса: ${business}
      
      Дата: ${new Date().toLocaleString("ru-RU")}
    `

    // Here you would integrate with an email service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate success
    console.log("Email would be sent to bekibaevamadina00@gmail.com:", emailContent)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
