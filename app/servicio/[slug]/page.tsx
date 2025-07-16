import { ServiceDetailClient } from "./service-detail-client"

// Datos de servicios simulados
const servicesData = {
  "lavado-exterior": {
    title: "Lavado Exterior Premium",
    icon: "droplets",
    description: "Limpieza profunda y especializada del fuselaje de tu aeronave con productos de grado aeronáutico",
    longDescription:
      "Nuestro servicio de lavado exterior premium utiliza técnicas especializadas y productos certificados para la industria aeronáutica. Cada proceso está diseñado para mantener la integridad de los materiales mientras proporciona una limpieza profunda y duradera.",
    features: [
      "Productos certificados para aviación",
      "Técnicas de lavado sin contacto",
      "Protección de superficies sensibles",
      "Secado especializado sin rayones",
      "Inspección visual completa",
      "Certificado de limpieza",
    ],
    pricing: {
      small: {
        name: "Aeronave Pequeña",
        price: "$150.000",
        description: "Hasta 4 asientos (Cessna 172, Piper Cherokee)",
      },
      medium: { name: "Aeronave Mediana", price: "$280.000", description: "5-8 asientos (King Air, Citation)" },
      large: { name: "Aeronave Grande", price: "$450.000", description: "Más de 8 asientos (Jets ejecutivos)" },
    },
    duration: "2-4 horas",
    images: [
      "/images/1.jpeg?height=400&width=600&text=Antes+del+lavado",
      "/images/2.jpeg?height=400&width=600&text=Durante+el+proceso",
      "/images/3.jpeg?height=400&width=600&text=Resultado+final",
      "/images/4.jpeg?height=400&width=600&text=Detalle+del+trabajo",
    ],
  },
  "detailing-interior": {
    title: "Detailing Interior",
    icon: "sparkles",
    description: "Cuidado meticuloso de cabina, asientos y superficies interiores",
    longDescription:
      "Transformamos el interior de tu aeronave con un detailing completo que incluye limpieza profunda de tapicería, cuero, plásticos y superficies metálicas, utilizando productos específicos para cada material.",
    features: [
      "Limpieza profunda de tapicería",
      "Tratamiento especializado de cuero",
      "Desinfección de superficies",
      "Limpieza de sistemas de ventilación",
      "Pulido de superficies metálicas",
      "Aromatización profesional",
    ],
    pricing: {
      small: { name: "Aeronave Pequeña", price: "$120.000", description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: "$220.000", description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: "$380.000", description: "Más de 8 asientos" },
    },
    duration: "3-5 horas",
    images: [
      "/images/5.jpeg?height=400&width=600&text=Antes+del+lavado",
      "/images/6.jpeg?height=400&width=600&text=Durante+el+proceso",
      "/images/7.jpeg?height=400&width=600&text=Resultado+final",
      "/images/8.jpeg?height=400&width=600&text=Detalle+del+trabajo",
    ],
  },
  "sanitizacion": {
    title: "Sanitización Completa",
    icon: "shield",
    description: "Desinfección profesional con estándares aeronáuticos",
    longDescription:
      "Proceso de sanitización completa utilizando productos aprobados por la industria aeronáutica, eliminando virus, bacterias y otros patógenos para garantizar un ambiente seguro y saludable.",
    features: [
      "Desinfección con productos certificados",
      "Nebulización de cabina completa",
      "Tratamiento de sistemas de aire",
      "Limpieza de superficies de contacto",
      "Certificado de sanitización",
      "Protocolo COVID-19 completo",
    ],
    pricing: {
      small: { name: "Aeronave Pequeña", price: "$80.000", description: "Hasta 4 asientos" },
      medium: { name: "Aeronave Mediana", price: "$140.000", description: "5-8 asientos" },
      large: { name: "Aeronave Grande", price: "$240.000", description: "Más de 8 asientos" },
    },
    duration: "1-2 horas",
    images: [
      "/images/9.jpeg?height=400&width=600&text=Antes+del+lavado",
      "/images/10.jpeg?height=400&width=600&text=Durante+el+proceso",
      "/images/11.jpeg?height=400&width=600&text=Resultado+final",
      "/images/12.jpeg?height=400&width=600&text=Detalle+del+trabajo",
    ],
  },
}

const faqs = [
  {
    question: "¿Qué productos utilizan para la limpieza?",
    answer:
      "Utilizamos exclusivamente productos certificados para la industria aeronáutica, que son seguros para todos los materiales de la aeronave y no causan corrosión ni daños.",
  },
  {
    question: "¿Cuánto tiempo toma el servicio?",
    answer:
      "El tiempo varía según el tipo de aeronave y servicio. Generalmente entre 1-5 horas. Te proporcionamos un tiempo estimado al momento de la cotización.",
  },
  {
    question: "¿Ofrecen servicio a domicilio?",
    answer:
      "Sí, nos desplazamos a tu hangar o aeropuerto. Cubrimos toda la región metropolitana y tenemos cobertura nacional para servicios programados.",
  },
  {
    question: "¿Qué garantía ofrecen?",
    answer:
      "Garantizamos la calidad de nuestro trabajo por 30 días. Si no estás satisfecho, regresamos sin costo adicional para corregir cualquier detalle.",
  },
  {
    question: "¿Pueden trabajar con mi aeronave mientras está en mantenimiento?",
    answer:
      "Sí, coordinamos con tu equipo de mantenimiento para realizar la limpieza en el momento más conveniente del proceso.",
  },
]

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">Servicio no encontrado</h1>
          <p className="text-slate-300 mb-8">El servicio que buscas no existe o ha sido movido.</p>
        </div>
      </div>
    )
  }

  return <ServiceDetailClient service={service} faqs={faqs} />
}
