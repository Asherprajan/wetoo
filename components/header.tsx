"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" tabIndex={0} aria-label="Wetoo Technical Home">
      <img
        src="/logo.svg"
        alt="Wetoo Technical Services logo"
        className="h-32 w-32 rounded" 
      />
    </Link>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
      {NAVIGATION.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

function ContactInfo() {
  return (
    <div className="flex items-center space-x-2 text-slate-600">
      <Phone className="h-4 w-4" />
      <span className="text-sm">+971 567585319</span>
    </div>
  )
}

function DesktopCTA() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ContactInfo />
      <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
        <Link href="/contact">Get Quote</Link>
      </Button>
    </div>
  )
}

function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col space-y-6 mt-6">
          <Logo />
          <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t">
            <div className="flex items-center space-x-2 text-slate-600 mb-4">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+971 567585319</span>
            </div>
            <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav />
          <DesktopCTA />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  )
}
