import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Building2,
  Brain,
  Blocks,
  Cpu,
  ExternalLink,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "Riven LMS",
    tagline: "The Future of Learning Management",
    description:
      "Empower educational institutions with our comprehensive SaaS LMS platform. Streamline teaching, enhance student engagement, and drive academic success with powerful tools designed for modern education.",
    icon: GraduationCap,
    link: "https://riven.ainrion.com",
    features: [
      "Interactive course management",
      "Real-time student analytics",
      "Integrated assessment tools",
      "Mobile-friendly interface",
      "Collaborative learning spaces",
      "Automated grading system",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    name: "Yuzen",
    tagline: "Smart Company Management",
    description:
      "Company management platform focusing on catering needs of Startups and SMEs. Streamline operations, boost productivity, and scale with confidence using our all-in-one business solution.",
    icon: Building2,
    link: "https://yuzen.ainrion.com",
    features: [
      "Project & task management",
      "Team collaboration tools",
      "Financial tracking",
      "Client relationship management",
      "Resource allocation",
      "Performance analytics",
    ],
    gradient: "from-secondary to-accent",
  },
]

const comingSoon = [
  {
    name: "AI Solutions",
    description: "Next-generation artificial intelligence products for enterprise automation and insights",
    icon: Brain,
    status: "In Development",
  },
  {
    name: "Blockchain Platform",
    description: "Decentralized solutions for secure transactions and smart contract management",
    icon: Blocks,
    status: "Research Phase",
  },
  {
    name: "IoT Systems",
    description: "Connected device management and smart automation for industrial applications",
    icon: Cpu,
    status: "Planning",
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Innovative solutions designed to transform industries and empower organizations to achieve more
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={product.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Product Info */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h2>
                    <p className="text-primary text-lg font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2 group">
                        Visit Product
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                      </Button>
                    </a>
                  </div>

                  {/* Product Visual */}
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div
                      className={`relative aspect-square rounded-2xl bg-gradient-to-br ${product.gradient} p-1 group`}
                    >
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <Icon className="w-32 h-32 text-primary/20 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">Exciting new products in development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoon.map((product) => {
              const Icon = product.icon
              return (
                <div
                  key={product.name}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      <Clock className="w-3 h-3" />
                      {product.status}
                    </span>
                  </div>

                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Our Products?</h2>
            <p className="text-muted-foreground mb-8">
              Get in touch with our team to learn more about how our solutions can benefit your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 group">
                  Request Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
