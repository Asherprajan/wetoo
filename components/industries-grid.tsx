import { Droplet, Flame, Factory, Bolt, Pickaxe } from "lucide-react"

interface Industry {
  title: string
  items: string[]
  icon: JSX.Element
}

const INDUSTRIES: Industry[] = [
  {
    title: "Water",
    items: [
      "Water Treatment Plants",
      "Desalination Plants",
      "Tank Storage Facilities",
      "Water Pumping Station",
    ],
    icon: <Droplet className="h-16 w-16 text-primary mx-auto mb-4" />,
  },
  {
    title: "Oil & Gas",
    items: ["Oil Refinery", "Oil Pumping Station", "Tank Storage", "Workshops"],
    icon: <Flame className="h-16 w-16 text-primary mx-auto mb-4" />,
  },
  {
    title: "General Manufacturing",
    items: ["Aluminium", "Cement", "Glass", "Steel"],
    icon: <Factory className="h-16 w-16 text-primary mx-auto mb-4" />,
  },
  {
    title: "Energy",
    items: [
      "Power Stations",
      "Renewable Energy",
      "Energy Storage",
      "Transmission & Distribution",
    ],
    icon: <Bolt className="h-16 w-16 text-primary mx-auto mb-4" />,
  },
  {
    title: "Mining",
    items: [
      "Raw Material Handling",
      "Processing Plants",
      "Workshops",
      "Fabrication",
    ],
    icon: <Pickaxe className="h-16 w-16 text-primary mx-auto mb-4" />,
  },
]

export function IndustriesGrid() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
    >
      {INDUSTRIES.map(({ title, items, icon }) => (
        <li
          key={title}
          className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 flex flex-col items-center text-center"
        >
          {icon}
          <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
            {title}
          </h3>
          <ul className="text-slate-300 space-y-1 text-sm">
            {items.map((itm) => (
              <li key={itm}>{itm}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
} 