"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Sparkles,
  Droplets,
  Wind,
  Star,
  Award,
  User,
  Mail,
  Phone,
  MapPin,
  Plane,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
} from "lucide-react"
import { Header } from "@/components/header"
import Image from "next/image"

const services = [
  {
    id: "lavado-exterior",
    title: "Lavado Exterior Premium",
    icon: <Droplets className="h-8 w-8" />,
    description: "Limpieza profunda del fuselaje con productos especializados",
    duration: "2-4 horas",
    pricing: {
      small: { name: "Aeronave Pequeña", price: 150000, description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: 280000, description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: 450000, description: "Más de 8 asientos" },
    },
  },
  {
    id: "detailing-interior",
    title: "Detailing Interior",
    icon: <Sparkles className="h-8 w-8" />,
    description: "Cuidado meticuloso de cabina y superficies interiores",
    duration: "3-5 horas",
    pricing: {
      small: { name: "Aeronave Pequeña", price: 120000, description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: 220000, description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: 380000, description: "Más de 8 asientos" },
    },
  },
  {
    id: "sanitizacion",
    title: "Sanitización Completa",
    icon: <Shield className="h-8 w-8" />,
    description: "Desinfección profesional con estándares aeronáuticos",
    duration: "1-2 horas",
    pricing: {
      small: { name: "Aeronave Pequeña", price: 80000, description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: 140000, description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: 240000, description: "Más de 8 asientos" },
    },
  },
  {
    id: "tratamiento-uv",
    title: "Tratamiento UV",
    icon: <Wind className="h-8 w-8" />,
    description: "Protección contra rayos UV y elementos climáticos",
    duration: "2-3 horas",
    pricing: {
      small: { name: "Aeronave Pequeña", price: 100000, description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: 180000, description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: 300000, description: "Más de 8 asientos" },
    },
  },
  {
    id: "pulido-superficies",
    title: "Pulido de Superficies",
    icon: <Star className="h-8 w-8" />,
    description: "Restauración del brillo original de la aeronave",
    duration: "4-6 horas",
    pricing: {
      small: { name: "Aeronave Pequeña", price: 200000, description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: 350000, description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: 550000, description: "Más de 8 asientos" },
    },
  },
  {
    id: "mantenimiento-preventivo",
    title: "Mantenimiento Preventivo",
    icon: <Award className="h-8 w-8" />,
    description: "Inspección y cuidado regular para máximo rendimiento",
    duration: "3-4 horas",
    pricing: {
      small: { name: "Aeronave Pequeña", price: 180000, description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: 320000, description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: 500000, description: "Más de 8 asientos" },
    },
  },
]

const steps = [
  { id: 1, title: "Información Personal", icon: <User className="h-5 w-5" /> },
  { id: 2, title: "Seleccionar Servicio", icon: <Plane className="h-5 w-5" /> },
  { id: 3, title: "Tipo de Aeronave", icon: <Star className="h-5 w-5" /> },
  { id: 4, title: "Detalles y Confirmación", icon: <CheckCircle className="h-5 w-5" /> },
]

export default function CotizacionPage() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [initialized, setInitialized] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    // Personal info
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    ubicacion: "",
    // Service selection
    servicio: "",
    // Aircraft type
    tipoAeronave: "",
    // Additional details
    fechaPreferida: "",
    horaPreferida: "",
    comentarios: "",
    serviciosAdicionales: [] as string[],
  })

  // Initialize from URL params only once
  useEffect(() => {
    if (!initialized) {
      const servicio = searchParams.get("servicio")
      const tipo = searchParams.get("tipo")

      const updates: Partial<typeof formData> = {}

      if (servicio) {
        updates.servicio = servicio
      }
      if (tipo) {
        updates.tipoAeronave = tipo
      }

      if (Object.keys(updates).length > 0) {
        setFormData((prev) => ({ ...prev, ...updates }))
      }

      setInitialized(true)
    }
  }, [searchParams, initialized])

  const selectedService = services.find((s) => s.id === formData.servicio)
  const selectedPrice = selectedService?.pricing[formData.tipoAeronave as keyof typeof selectedService.pricing]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    alert("¡Cotización enviada exitosamente! Te contactaremos pronto.")
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.nombre && formData.email && formData.telefono
      case 2:
        return formData.servicio
      case 3:
        return formData.tipoAeronave
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Solicita tu Cotización
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Obtén una cotización personalizada para el cuidado de tu aeronave en solo unos minutos
            </p>
          </div>

          {/* Steps Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                      currentStep >= step.id
                        ? "bg-yellow-500 border-yellow-500 text-slate-900"
                        : "border-slate-600 text-slate-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p
                      className={`text-sm font-medium ${currentStep >= step.id ? "text-yellow-400" : "text-slate-400"}`}
                    >
                      Paso {step.id}
                    </p>
                    <p className={`text-xs ${currentStep >= step.id ? "text-slate-300" : "text-slate-500"}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`hidden md:block w-16 h-0.5 ml-6 ${
                        currentStep > step.id ? "bg-yellow-500" : "bg-slate-600"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-blue-400 mb-2">Información Personal</h2>
                      <p className="text-slate-300">Cuéntanos sobre ti y tu empresa</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">
                          <User className="h-4 w-4 inline mr-2" />
                          Nombre Completo *
                        </label>
                        <Input
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="bg-slate-600 border-slate-500 text-white"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Correo Electrónico *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-600 border-slate-500 text-white"
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Teléfono *
                        </label>
                        <Input
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="bg-slate-600 border-slate-500 text-white"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Empresa (Opcional)</label>
                        <Input
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="bg-slate-600 border-slate-500 text-white"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">
                        <MapPin className="h-4 w-4 inline mr-2" />
                        Ubicación
                      </label>
                      <Input
                        value={formData.ubicacion}
                        onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                        className="bg-slate-600 border-slate-500 text-white"
                        placeholder="Ciudad, aeropuerto o hangar"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Service Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-blue-400 mb-2">Selecciona tu Servicio</h2>
                      <p className="text-slate-300">Elige el servicio que necesitas para tu aeronave</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service) => (
                        <Card
                          key={service.id}
                          className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                            formData.servicio === service.id
                              ? "bg-blue-600 border-yellow-400"
                              : "bg-slate-600 border-slate-500 hover:border-yellow-400"
                          }`}
                          onClick={() => setFormData({ ...formData, servicio: service.id })}
                        >
                          <CardContent className="p-6 text-center">
                            <div className="text-yellow-400 mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                            <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                            <div className="flex items-center justify-center text-slate-400 text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </div>
                            {formData.servicio === service.id && (
                              <Badge className="mt-3 bg-yellow-500 text-slate-900">Seleccionado</Badge>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Aircraft Type */}
                {currentStep === 3 && selectedService && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-blue-400 mb-2">Tipo de Aeronave</h2>
                      <p className="text-slate-300">Selecciona el tamaño de tu aeronave para ver el precio</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(selectedService.pricing).map(([key, pricing]) => (
                        <Card
                          key={key}
                          className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                            formData.tipoAeronave === key
                              ? "bg-blue-600 border-yellow-400"
                              : "bg-slate-600 border-slate-500 hover:border-yellow-400"
                          }`}
                          onClick={() => setFormData({ ...formData, tipoAeronave: key })}
                        >
                          <CardContent className="p-6 text-center">
                            <h3 className="text-xl font-bold mb-2 text-white">{pricing.name}</h3>
                            <div className="text-3xl font-bold text-yellow-400 mb-2">{formatPrice(pricing.price)}</div>
                            <p className="text-slate-300 text-sm">{pricing.description}</p>
                            {formData.tipoAeronave === key && (
                              <Badge className="mt-3 bg-yellow-500 text-slate-900">Seleccionado</Badge>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-blue-400 mb-2">Detalles Adicionales</h2>
                      <p className="text-slate-300">Información adicional para tu cotización</p>
                    </div>

                    {/* Summary */}
                    <Card className="bg-slate-600 border-slate-500">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Resumen de tu Cotización</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-300">Cliente:</span>
                            <span className="text-white">{formData.nombre}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-300">Servicio:</span>
                            <span className="text-white">{selectedService?.title}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-300">Tipo de Aeronave:</span>
                            <span className="text-white">{selectedPrice?.name}</span>
                          </div>
                          <div className="flex justify-between text-lg font-semibold border-t border-slate-500 pt-3">
                            <span className="text-yellow-400">Precio Estimado:</span>
                            <span className="text-yellow-400">{selectedPrice && formatPrice(selectedPrice.price)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">
                          <Calendar className="h-4 w-4 inline mr-2" />
                          Fecha Preferida
                        </label>
                        <Input
                          type="date"
                          value={formData.fechaPreferida}
                          onChange={(e) => setFormData({ ...formData, fechaPreferida: e.target.value })}
                          className="bg-slate-600 border-slate-500 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">
                          <Clock className="h-4 w-4 inline mr-2" />
                          Hora Preferida
                        </label>
                        <Input
                          type="time"
                          value={formData.horaPreferida}
                          onChange={(e) => setFormData({ ...formData, horaPreferida: e.target.value })}
                          className="bg-slate-600 border-slate-500 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Comentarios Adicionales</label>
                      <Textarea
                        value={formData.comentarios}
                        onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                        className="bg-slate-600 border-slate-500 text-white"
                        placeholder="Cualquier información adicional que consideres importante..."
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-600">
                  <Button
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    variant="outline"
                    className="border-slate-500 text-slate-300 hover:bg-slate-600 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
                    >
                      Siguiente
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
                    >
                      {isLoading ? "Enviando..." : "Enviar Cotización"}
                      <CheckCircle className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
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
