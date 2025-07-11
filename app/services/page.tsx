import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Shield, Clock, AlertTriangle, Calculator, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-white via-white to-blue-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-primary via-secondary to-primary/90 text-white py-20 lg:py-32 flex items-center justify-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[40vh]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Comprehensive lifting solutions for every industry—installation, maintenance, emergency support, and more.
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
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white text-primary relative">
        <span className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-primary drop-shadow-lg text-center font-poppins">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Installation Services */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-8">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Installation Services</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins mb-2">
                  Safe, precise, and fast installations for all types of cranes and industrial equipment. From site preparation to final commissioning.
                </CardDescription>
                <ul className="text-slate-600 text-sm space-y-1 text-left list-disc list-inside">
                  <li>Overhead crane installation</li>
                  <li>Gantry crane setup</li>
                  <li>Jib crane mounting</li>
                  <li>Specialized equipment installation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Preventive Maintenance */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-8">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Shield className="h-8 w-8 text-green-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Preventive Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins mb-2">
                  Regular, scheduled maintenance to ensure minimal downtime and improved safety. Custom schedules based on your needs.
                </CardDescription>
                <ul className="text-slate-600 text-sm space-y-1 text-left list-disc list-inside">
                  <li>Scheduled inspections</li>
                  <li>Lubrication services</li>
                  <li>Component replacement</li>
                  <li>Performance optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Annual Maintenance Contracts */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-8">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Clock className="h-8 w-8 text-purple-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Annual Maintenance Contracts</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins mb-2">
                  Tailored AMC packages to maximize asset performance and minimize costs. Predictable budgeting and priority support.
                </CardDescription>
                <ul className="text-slate-600 text-sm space-y-1 text-left list-disc list-inside">
                  <li>Customized maintenance plans</li>
                  <li>Priority service response</li>
                  <li>Cost-effective solutions</li>
                  <li>Performance reporting</li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Breakdown Support */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-8">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Emergency Breakdown Support</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins mb-2">
                  24/7 emergency response with immediate dispatch for critical failures. Minimize downtime with our rapid response team.
                </CardDescription>
                <ul className="text-slate-600 text-sm space-y-1 text-left list-disc list-inside">
                  <li>24/7 emergency hotline</li>
                  <li>Rapid response team</li>
                  <li>Mobile service units</li>
                  <li>Critical spare parts inventory</li>
                </ul>
              </CardContent>
            </Card>

            {/* Design & Lifespan Calculations */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-8">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Calculator className="h-8 w-8 text-teal-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Design & Lifespan Calculations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins mb-2">
                  Data-driven analysis to evaluate equipment lifespan and operational capacity. Make informed decisions about upgrades or replacements.
                </CardDescription>
                <ul className="text-slate-600 text-sm space-y-1 text-left list-disc list-inside">
                  <li>Structural analysis</li>
                  <li>Fatigue life assessment</li>
                  <li>Load capacity evaluation</li>
                  <li>Upgrade recommendations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Refurbishment Services */}
            <Card className="group bg-white border-2 border-primary/10 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-8">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <RotateCcw className="h-8 w-8 text-orange-600" />
                </span>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-slate-900 font-poppins">Refurbishment</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-slate-700 text-sm font-poppins mb-2">
                  Restore machinery to optimal condition, extending usability and ROI. Complete overhaul services for like-new performance.
                </CardDescription>
                <ul className="text-slate-600 text-sm space-y-1 text-left list-disc list-inside">
                  <li>Complete equipment overhaul</li>
                  <li>Component replacement</li>
                  <li>Performance upgrades</li>
                  <li>Warranty coverage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-white to-blue-100 text-primary overflow-hidden">
        <span className="absolute -top-16 -left-16 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-20 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 font-poppins drop-shadow-lg text-primary">
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-lg md:text-xl text-blue-900 mb-6 font-poppins">
              Whether you need a custom solution, urgent repairs, or expert advice, our team is ready to help. Reach out for a free consultation or to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-blue-900 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-colors duration-200">
                <Link href="/contact">
                  Request a Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-10 py-4 rounded-xl shadow transition-colors duration-200"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
