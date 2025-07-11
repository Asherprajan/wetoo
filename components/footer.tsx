import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-xl">Wetoo Technical</span>
            </div>
            <p className="text-slate-300 text-sm">
              Reliable lifting solutions for every industry. From installation to spare parts, we lift your operations
              to the next level.
            </p>
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <span className="text-slate-300">Installation Services</span>
              <span className="text-slate-300">Preventive Maintenance</span>
              <span className="text-slate-300">Annual Maintenance</span>
              <span className="text-slate-300">Emergency Support</span>
              <span className="text-slate-300">Refurbishment</span>
              <span className="text-slate-300">Lifespan Calculations</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-slate-300">+971 567585319</p>
                  <p className="text-slate-300">+971 42977076</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-yellow-500 mt-0.5" />
                <p className="text-slate-300">info@wetootech.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-yellow-500 mt-0.5" />
                <p className="text-slate-300">
                  Belrasheed Building, AL Baraha
                  <br />
                  Deira, Dubai - U.A.E
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-yellow-500 mt-0.5" />
                <p className="text-slate-300">
                  Sun-Thu: 8AM-6PM
                  <br />
                  Emergency: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Wetoo Technical Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
