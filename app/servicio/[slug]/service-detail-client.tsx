"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Sparkles,
  Droplets,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

interface ServiceData {
  id: string
  title: string
  icon: string
  description: string
  longDescription: string
  features: string[]
  pricing: {
    small: { name: string; price: string; description: string }
    medium: { name: string; price: string; description: string }
    large: { name: string; price: string; description: string }
  }
  duration: string
  images: string[]
}

interface FAQ {
  question: string
  answer: string
}

interface ServiceDetailClientProps {
  service: ServiceData
  faqs: FAQ[]
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "droplets":
      return <Droplets className="h-12 w-12" />
    case "sparkles":
      return <Sparkles className="h-12 w-12" />
    case "shield":
      return <Shield className="h-12 w-12" />
    default:
      return <Droplets className="h-12 w-12" />
  }
}

export function ServiceDetailClient({ service, faqs }: ServiceDetailClientProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % service.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + service.images.length) % service.images.length)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a servicios
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-yellow-400 mb-4">{getIcon(service.icon)}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">{service.title}</h1>
              <p className="text-xl text-slate-300 mb-6">{service.longDescription}</p>
              <div className="flex items-center space-x-6 text-slate-300">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                  <span>Duración: {service.duration}</span>
                </div>
                <Badge className="bg-yellow-500 text-slate-900">Servicio Premium</Badge>
              </div>
            </div>

            <div className="relative">
              <Image
                src={service.images[0] || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">¿Qué incluye este servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-slate-700 rounded-lg">
                <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Galería de Trabajos</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image
                src={service.images[currentImage] || "/placeholder.svg"}
                alt={`Galería ${currentImage + 1}`}
                fill
                className="object-cover"
              />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 p-3 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 p-3 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {service.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-yellow-400" : "bg-slate-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Precios</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(service.pricing).map(([key, pricing]) => (
              <Card key={key} className="bg-slate-700 border-slate-600 hover:border-yellow-400 transition-all">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{pricing.name}</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-4">{pricing.price}</div>
                  <p className="text-slate-300 mb-6">{pricing.description}</p>
                  <Link href={`/cotizacion?servicio=${service.id}&tipo=${key}`}>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400">* Precios pueden variar según condiciones específicas de la aeronave</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Preguntas Frecuentes</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-blue-400">{faq.question}</h3>
                      <span className="text-yellow-400 text-xl">{openFaq === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-300">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">¿Listo para solicitar este servicio?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contáctanos para una cotización personalizada y programa tu servicio con nuestros expertos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/cotizacion?servicio=${service.id}`}>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Cotización
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/hn-logo.png"
                  alt="H&N Aircraft Cleaning Spa"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Especialistas en limpieza y mantenimiento de aeronaves con los más altos estándares de calidad y
                profesionalismo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#inicio" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#nosotros" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/#contacto" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Lavado Exterior</li>
                <li>Detailing Interior</li>
                <li>Sanitización</li>
                <li>Tratamiento UV</li>
                <li>Pulido</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">© 2024 H&N Aircraft Cleaning Spa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
