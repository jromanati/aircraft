"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/hn-logo.png"
            alt="H&N Aircraft Cleaning Spa"
            width={180}   // Ancho natural
            height={40}   // Alto natural
            className="max-h-[90px] w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/#inicio" className="hover:text-yellow-400 transition-colors">
            Inicio
          </Link>
          <Link href="/#servicios" className="hover:text-yellow-400 transition-colors">
            Servicios
          </Link>
          <Link href="/#nosotros" className="hover:text-yellow-400 transition-colors">
            Nosotros
          </Link>
          <Link href="/#contacto" className="hover:text-yellow-400 transition-colors">
            Contacto
          </Link>
        </nav>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
          <Phone className="h-4 w-4 mr-2" />
          Llamar Ahora
        </Button>
      </div>
    </header>

  )
}
