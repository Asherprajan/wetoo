import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ConeIcon as Crane,
  Factory,
  Ship,
  Building2,
  Wrench,
  Shield,
  Clock,
  AlertTriangle,
  RotateCcw,
  Calculator,
  Phone,
  Mail,
  Droplet,
  Flame,
  Bolt,
  Pickaxe,
} from "lucide-react"
import Link from "next/link"
import { IndustriesGrid } from "@/components/industries-grid" 
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-primary via-secondary to-primary/90 text-white py-20 lg:py-32 flex items-center justify-center"
        style={{ minHeight: "80vh" }}
      >
        {/* Banner image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/wetoobanner.jpg')",
            zIndex: 0
          }}
        />
        {/* change overlay to only 10 % black */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reliable Lifting Solutions for Every Industry.
            </h1>
            <p className="text-xl md:text-l mb-8 text-slate-100">
              LIFTING YOUR OPERATIONS TO NEW HEIGHTS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Wetoo Short */}
      <section
        className="relative py-24 bg-white text-primary"
        id="about"
      >
        {/* Decorative subtle blur accents */}
        <span className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-16">
            {/* Left: Image with accent border and a short company fact box */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center mb-10 md:mb-0 gap-6">
              <div className="relative group">
                <img
                  src="/logo.svg"
                  alt="Wetoo Technical Services team at work"
                  className="rounded-xl shadow-2xl w-full max-w-md object-cover border-4 border-primary group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary/60 rounded-full blur-lg"></span>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-xl px-6 py-4 mt-2 flex flex-col items-center shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-1 font-poppins">20+ Years of Excellence</h3>
                <p className="text-base text-slate-700 font-poppins mb-2 text-center">
                  Serving UAE industries with innovative lifting solutions since 2003.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">500+</span>
                    <span className="text-xs text-slate-600">Projects Delivered</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">24/7</span>
                    <span className="text-xs text-slate-600">Emergency Support</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">100%</span>
                    <span className="text-xs text-slate-600">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Text and expanded company story */}
            <div className="md:w-1/2 w-full text-center md:text-left flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow-lg font-poppins">
                About Wetoo
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-2 font-poppins">
                <span className="font-semibold text-yellow-300">Wetoo Technical Services</span> is a trusted partner for advanced, reliable lifting solutions across the UAE and the Middle East. With a legacy of engineering excellence, we empower manufacturing, shipyards, ports, and terminals to reach new heights of productivity and safety.
              </p>
              
              <ul className="mb-6 space-y-3 text-left md:text-left">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-800 font-medium">
                    <span className="text-yellow-300 font-semibold">Safety-first</span> design, installation, and maintenance of cranes and lifting equipment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-800 font-medium">
                    <span className="text-yellow-300 font-semibold">Comprehensive maintenance</span> programs tailored to your operations, minimizing downtime and maximizing efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Bolt className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-800 font-medium">
                    <span className="text-yellow-300 font-semibold">Genuine spare parts</span> and rapid support for maximum uptime and peace of mind.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Pickaxe className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-800 font-medium">
                    <span className="text-yellow-300 font-semibold">Custom engineering</span> for unique lifting challenges and specialized industry needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Flame className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-800 font-medium">
                    <span className="text-yellow-300 font-semibold">ATEX & Explosion-proof solutions</span> for hazardous environments.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
                >
                  Get in Touch  
                </Link>
                <Link
                  href="/products"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-lg shadow transition-colors duration-200"
                >
                  View Products
                </Link>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section className="py-20 bg-gradient-to-b from-white via-white to-primary/5 font-poppins relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-lg font-poppins text-center">
            Our Product Catalogue
          </h2>
          <p className="text-lg md:text-xl text-slate-700 mb-4 font-poppins text-center">
            <span className="font-semibold text-primary">20+ years of expertise</span> in lifting your business to new heights.
          </p>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-12 font-poppins text-center">
            Explore our range of advanced cranes and genuine spare parts, engineered for safety, reliability, and performance across every industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* EOT Cranes */}
            <Link href="/cranes/eot" className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary flex flex-col">
              <div className="relative h-56">
                <img
                  src="/eotcranes.webp"
                  alt="EOT Cranes"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">EOT Cranes</h3>
                <p className="text-slate-700 text-sm font-poppins">
                  Space-saving, high-performance cranes for efficient material handling.
                </p>
              </div>
            </Link>

            {/* Gantry Cranes */}
            <Link href="/cranes/gantry" className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary flex flex-col">
              <div className="relative h-56">
                <img
                  src="/gantrycranes.webp"
                  alt="Gantry Cranes"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">Gantry Cranes</h3>
                <p className="text-slate-700 text-sm font-poppins">
                  Versatile outdoor and indoor lifting for heavy-duty applications.
                </p>
              </div>
            </Link>

            {/* JIB Cranes */}
            <Link href="/cranes/jib" className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary flex flex-col">
              <div className="relative h-56">
                <img
                  src="/jibcranes.webp"
                  alt="JIB Cranes"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">JIB Cranes</h3>
                <p className="text-slate-700 text-sm font-poppins">
                  Flexible, compact solutions for localized lifting and assembly.
                </p>
              </div>
            </Link>

            {/* Spare Parts & Specialized Cranes */}
            <div className="flex flex-col gap-8">
              <Link href="/spare-parts" className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary flex-1 flex flex-col">
                <div className="relative h-24">
                  <img
                    src="/spareparts.webp"
                    alt="Spare Parts"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-primary mb-1 font-poppins">Spare Parts</h3>
                  <p className="text-slate-700 text-xs font-poppins">
                    Genuine, high-quality parts for all major crane brands.
                  </p>
                </div>
              </Link>
              <Link href="/cranes/specialized" className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary flex-1 flex flex-col">
                <div className="relative h-24">
                  <img
                    src="/specializedcranes.webp"
                    alt="Specialized Cranes"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-primary mb-1 font-poppins">Specialized Cranes</h3>
                  <p className="text-slate-700 text-xs font-poppins">
                    Custom-engineered solutions for unique lifting challenges.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative yellow blur */}
        <span className="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-20 z-0"></span>
        <span className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-10 z-0"></span>
      </section>

      {/* Our Services Overview */}
      <section className="relative py-20 bg-gradient-to-b from-white via-white to-primary/5 overflow-hidden">
        {/* Decorative blur accents */}
        <span className="absolute -top-16 -left-16 w-56 h-56 bg-primary/20 rounded-full blur-3xl opacity-20 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-10 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-14 font-poppins tracking-tight drop-shadow-lg">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Installation Services */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Wrench className="h-8 w-8 text-primary" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Installation Services</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins">
                  Expert installation of cranes and industrial equipment, prioritizing precision and safety.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Preventive Maintenance */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Shield className="h-8 w-8 text-green-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Preventive Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins">
                  Scheduled maintenance to ensure minimal downtime and maximum operational safety.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Annual Maintenance */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Clock className="h-8 w-8 text-purple-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Annual Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins">
                  Comprehensive AMC packages to maximize equipment performance and minimize costs.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Emergency Breakdown */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Emergency Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins">
                  24/7 emergency response with immediate dispatch for critical failures.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Refurbishment */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <RotateCcw className="h-8 w-8 text-orange-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Refurbishment</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins">
                  Restore machinery to optimal condition, extending usability and ROI.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Lifespan Calculations */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Calculator className="h-8 w-8 text-teal-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Lifespan Calculations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins">
                  Data-driven analysis to evaluate equipment lifespan and operational capacity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Industries We Serve</h2>
          <IndustriesGrid />
        </div>
      </section>

      {/* Contact Summary */}
        <section className="relative py-24 bg-gradient-to-br from-white to-blue-100 text-primary overflow-hidden">
          {/* Decorative blurred accent */}
          <span className="absolute -top-16 -left-16 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl opacity-40 z-0"></span>
          <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-20 z-0"></span>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-2 font-poppins drop-shadow-lg text-primary">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg md:text-xl text-blue-900 mb-6 font-poppins">
                Whether you need a custom crane solution, urgent repairs, or expert advice, our team is ready to help you move forward. Reach out for a free consultation or to discuss your project needs.
              </p>
              <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-6">
                <div className="flex-1 bg-primary/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:bg-primary/20 transition">
                  <Phone className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-lg font-semibold">Call Us</span>
                  <a href="tel:+971567585319" className="text-xl font-bold text-blue-900 hover:underline mt-1">
                    +971 567585319
                  </a>
                  <span className="text-xs text-blue-900 mt-2">24/7 Emergency Support</span>
                </div>
                <div className="flex-1 bg-primary/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:bg-primary/20 transition">
                  <Mail className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-lg font-semibold">Email</span>
                  <a href="mailto:info@wetootech.com" className="text-xl font-bold text-blue-900 hover:underline mt-1">
                    info@wetootech.com
                  </a>
                  <span className="text-xs text-blue-900 mt-2">Response within 1 business day</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-blue-900 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-colors duration-200">
                <Link href="/contact">
                  Request a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  )
}
