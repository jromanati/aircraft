"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Award,
  Sparkles,
  Droplets,
  Wind,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

export default function AircraftCleaningLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Lavado Exterior Premium",
      description: "Limpieza profunda del fuselaje con productos especializados para aviación",
      slug: "lavado-exterior",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Detailing Interior",
      description: "Cuidado meticuloso de cabina, asientos y superficies interiores",
      slug: "detailing-interior",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sanitización Completa",
      description: "Desinfección profesional con estándares aeronáuticos",
      slug: "sanitizacion",
    },
    // {
    //   icon: <Wind className="h-8 w-8" />,
    //   title: "Tratamiento UV",
    //   description: "Protección contra rayos UV y elementos climáticos",
    //   slug: "tratamiento-uv",
    // },
    // {
    //   icon: <Star className="h-8 w-8" />,
    //   title: "Pulido de Superficies",
    //   description: "Restauración del brillo original de la aeronave",
    //   slug: "pulido-superficies",
    // },
    // {
    //   icon: <Award className="h-8 w-8" />,
    //   title: "Mantenimiento Preventivo",
    //   description: "Inspección y cuidado regular para máximo rendimiento",
    //   slug: "mantenimiento-preventivo",
    // },
  ]

  const benefits = [
    "Personal certificado y especializado",
    "Productos de calidad aeronáutica",
    "Puntualidad y confianza garantizada",
    "Cobertura en todo Chile",
    "Equipos de última tecnología",
    "Servicio 24/7 disponible",
  ]

  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "Aviación Ejecutiva",
      text: "Excelente servicio, mi Cessna nunca había lucido tan impecable. Profesionalismo de primer nivel.",
      rating: 5,
    },
    {
      name: "María González",
      company: "Charter Flights Chile",
      text: "H&N ha sido nuestro socio confiable por años. Calidad consistente y atención al detalle excepcional.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      company: "Propietario Privado",
      text: "Transformaron completamente mi aeronave. El servicio superó todas mis expectativas.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/3.jpeg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Limpieza y Detailing de Aeronaves de Alta Gama
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Confianza, precisión y resultados impecables en cada vuelo. Cuidamos tu inversión con el más alto estándar
            profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-lg px-8 py-4"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Servicio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 text-lg px-8 py-4 bg-transparent"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Nuestros Servicios</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios especializados para el cuidado de tu aeronave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-700 border-slate-600 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-yellow-400 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{service.title}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  <div className="flex gap-2">
                    <Link href={`/servicio/${service.slug}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent"
                      >
                        Ver Detalle
                      </Button>
                    </Link>
                    <Link href={`/cotizacion?servicio=${service.slug}`} className="flex-1">
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                        Cotizar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="nosotros" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">¿Por qué elegir H&N?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <p className="text-lg text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-slate-800 rounded-lg border border-blue-700">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Compromiso de Excelencia</h3>
                <p className="text-slate-300">
                  Con más de 10 años de experiencia en el sector aeronáutico, garantizamos resultados que superan las
                  expectativas más exigentes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full opacity-20 absolute -top-4 -right-4 w-32 h-32"></div>
              <Image
                src="/images/4.jpeg?height=500&width=500"
                alt="Equipo profesional de limpieza"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-slate-300">La confianza de nuestros clientes es nuestro mayor logro</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-slate-300 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-slate-400">{testimonials[currentTestimonial].company}</p>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Solicita tu Servicio</h2>
            <p className="text-xl text-slate-300">Contáctanos para una cotización personalizada</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Nombre Completo</label>
                        <Input className="bg-slate-700 border-slate-600 text-white" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Correo Electrónico</label>
                        <Input
                          type="email"
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Tipo de Aeronave</label>
                      <Input
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Ej: Cessna Citation, Boeing 737, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Mensaje</label>
                      <Textarea
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Describe el servicio que necesitas..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-lg py-3">
                      Enviar Solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg">+56 9 1234 5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg">contacto@hnaircraftcleaning.cl</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg">Santiago, Chile</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg">WhatsApp: +56 9 1234 5678</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Horarios de Atención</h3>
                <div className="space-y-2 text-slate-300">
                  <p>Lunes a Viernes: 8:00 - 18:00</p>
                  <p>Sábados: 9:00 - 15:00</p>
                  <p>Domingos: Servicio de emergencia</p>
                  <p className="text-yellow-400 font-semibold">Disponible 24/7 para servicios urgentes</p>
                </div>
              </div>
            </div>
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
                  width={160}
                  height={40}
                  className="h-32 w-auto"
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
                  <a href="#inicio" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-slate-400 hover:text-yellow-400 transition-colors">
                    Contacto
                  </a>
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
