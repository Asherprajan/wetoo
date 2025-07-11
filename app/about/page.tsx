import Link from "next/link"
import { Shield, Wrench, Bolt, Pickaxe, Flame, Phone, Mail, Target, Heart, Leaf, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-primary via-secondary to-primary/90 text-white py-20 lg:py-32 flex items-center justify-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[40vh]">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About Wetoo Technical Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Lifting your operations to new heights with engineering excellence, safety, and innovation.
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

      {/* Company Overview */}
      <section className="relative py-24 bg-white text-primary">
        <span className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-16">
            {/* Left: Logo and Fact Box */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center mb-10 md:mb-0 gap-6">
              <div className="relative group">
                <img
                  src="/logo.svg"
                  alt="Wetoo Technical Services logo"
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
            {/* Right: Company Story */}
            <div className="md:w-1/2 w-full text-center md:text-left flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow-lg font-poppins">
                Company Overview
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

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To deliver reliable, safe, and sustainable lifting solutions through expert engineering, proactive
                  maintenance, and innovation. We are committed to enhancing our clients' operational efficiency while
                  maintaining the highest safety standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the most trusted partner in industrial lifting and maintenance solutions across the MENA region.
                  We envision a future where our innovative solutions drive industry transformation and sustainable
                  growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safety is our top priority in every project, ensuring zero accidents and complete compliance with
                  industry standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Engineering Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We deliver superior engineering solutions through continuous innovation and technical expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Client-Centric Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our clients' success is our success. We provide personalized solutions tailored to specific needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Environmental Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We are committed to sustainable practices and environmental stewardship in all our operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Rapid Response Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  24/7 emergency support ensures minimal downtime and maximum operational continuity for our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Stakeholder Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We create value for all stakeholders through transparency, integrity, and collaborative partnerships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              We aim to positively contribute to our clients and society through circular economy practices,
              digitalization, and a deeply embedded safety culture. Our commitment extends beyond business success to
              creating lasting value for communities and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Summary */}
      <section className="relative py-24 bg-gradient-to-br from-white to-blue-100 text-primary overflow-hidden">
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
