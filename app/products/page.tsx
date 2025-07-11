import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ConeIcon as Crane, Cog, Snowflake, Building, Gamepad2, Shield, Cable } from "lucide-react"
import Link from "next/link"

const PRODUCTS = [
  {
    icon: <Crane className="h-12 w-12 text-blue-600" />,
    border: "border-l-blue-600",
    title: "Electric Overhead & Gantry Cranes",
    desc: (
      <>
        Complete crane systems for every industrial application. Our range includes Electric Overhead Cranes,
        Gantry Cranes, JIB Cranes, and Specialized Cranes designed for specific industry requirements.
      </>
    ),
    items: [
      "Single & Double Girder Overhead Cranes",
      "Rubber Tired & Rail Mounted Gantry Cranes",
      "Wall Mounted & Free Standing JIB Cranes",
      "Explosion Proof & Clean Room Cranes",
    ],
  },
  {
    icon: <Cog className="h-12 w-12 text-green-600" />,
    border: "border-l-green-600",
    title: "Spare Parts Inventory",
    desc: (
      <>
        Fast-access parts via our warehouses in Dubai and Turkey – reducing your downtime. Comprehensive
        inventory of genuine and compatible parts for all major crane brands.
      </>
    ),
    items: [
      "Motors & Gearboxes",
      "Wire Ropes & Chains",
      "Electrical Components",
      "Brake Systems & Controls",
    ],
  },
  {
    icon: <Snowflake className="h-12 w-12 text-cyan-600" />,
    border: "border-l-cyan-600",
    title: "Crane Cooling Units",
    desc: (
      <>
        Rugged air conditioning units for crane cabins, electrical rooms, and harsh environments. Operates
        from -50°C to +90°C, ensuring optimal performance in extreme conditions.
      </>
    ),
    items: [
      "Cabin Air Conditioning Units",
      "Electrical Room Cooling Systems",
      "Explosion Proof Cooling Units",
      "Marine Grade Cooling Solutions",
    ],
  },
  {
    icon: <Building className="h-12 w-12 text-purple-600" />,
    border: "border-l-purple-600",
    title: "Electrical Equipment Rooms",
    desc: (
      <>
        Dust-proof, air-conditioned modular rooms designed for safety and performance. Custom-built electrical
        enclosures that protect sensitive equipment from environmental hazards.
      </>
    ),
    items: [
      "Modular Control Rooms",
      "Weatherproof Enclosures",
      "Climate Controlled Cabinets",
      "Fire Suppression Systems",
    ],
  },
  {
    icon: <Gamepad2 className="h-12 w-12 text-orange-600" />,
    border: "border-l-orange-600",
    title: "Operator Control Panels",
    desc: (
      <>
        Ergonomic chairs and custom control systems for safe and efficient crane operation. Designed with
        operator comfort and safety in mind for extended operation periods.
      </>
    ),
    items: [
      "Ergonomic Operator Chairs",
      "Radio Remote Controls",
      "Pendant Control Stations",
      "Cabin Control Panels",
    ],
  },
  {
    icon: <Shield className="h-12 w-12 text-red-600" />,
    border: "border-l-red-600",
    title: "Crane Buffers",
    desc: (
      <>
        Available in spring, hydraulic, and polyurethane types – built to absorb high-impact crashes.
        Essential safety components that protect equipment and structures from collision damage.
      </>
    ),
    items: [
      "Spring Type Buffers",
      "Hydraulic Shock Absorbers",
      "Polyurethane Buffers",
      "Custom Buffer Solutions",
    ],
  },
  {
    icon: <Cable className="h-12 w-12 text-teal-600" />,
    border: "border-l-teal-600",
    title: "Cable Trolleys",
    desc: (
      <>
        Reliable cable movement solutions for tough environments, engineered for longevity and ease of
        installation. Protect and guide power and control cables in mobile crane applications.
      </>
    ),
    items: [
      "Festoon Cable Systems",
      "Cable Reels & Drums",
      "Conductor Bar Systems",
      "Slip Ring Assemblies",
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary via-secondary to-primary/90">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 lg:py-32 flex items-center justify-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[40vh]">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Products & Spare Parts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Comprehensive range of cranes, equipment, and spare parts to keep your operations running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-24 bg-white text-primary">
        {/* Decorative subtle blur accents */}
        <span className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PRODUCTS.map(({ icon, border, title, desc, items }) => (
              <Card
                key={title}
                className={`group bg-white border-2 ${border} hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col`}
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {icon}
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900 font-poppins">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base font-poppins mb-4">{desc}</CardDescription>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 pl-2">
                    {items.map((itm) => (
                      <li key={itm}>{itm}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-white to-blue-100 text-primary overflow-hidden">
        {/* Decorative blurred accent */}
        <span className="absolute -top-16 -left-16 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl opacity-40 z-0"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-20 z-0"></span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 font-poppins drop-shadow-lg text-primary">
              Need Specific Products or Parts?
            </h2>
            <p className="text-lg md:text-xl text-blue-900 mb-6 font-poppins">
              Contact our technical team to discuss your requirements and get expert recommendations for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-xl shadow-xl transition-colors duration-200">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
