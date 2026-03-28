import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { COMPANY, PRODUCTS, VALUES } from '@/data/company'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function Home() {
  const productsRef = useRef<HTMLElement>(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-6"
          >
            🛏️
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            {COMPANY.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-90"
          >
            {COMPANY.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              size="lg"
              variant="accent"
              onClick={scrollToProducts}
              className="cursor-pointer"
            >
              View Our Products <ChevronDown size={18} />
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Contact Us <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className="py-20 bg-[var(--color-background)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-3">
              Our Mattress Collection
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-xl mx-auto">
              Every mattress is double-sided — flip it to extend its life and keep the comfort consistent for years.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">{product.icon}</div>
                    <CardTitle className="text-[var(--color-primary)]">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--color-muted-foreground)]">{product.summary}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-3">
              Why Choose Esco?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-accent-foreground)] mb-2">
            Ready to Sleep Better?
          </h2>
          <p className="text-[var(--color-accent-foreground)]/80 mb-6">
            Call us today or visit our showroom in Ontario, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${COMPANY.phone}`}>
              <Button
                size="lg"
                className="bg-[var(--color-primary)] text-white hover:opacity-90 w-full sm:w-auto"
              >
                <Phone size={18} />
                Call {COMPANY.phone}
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--color-accent-foreground)]/30 text-[var(--color-accent-foreground)] hover:bg-black/10 w-full sm:w-auto"
              >
                Send Us a Message <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-[var(--color-accent-foreground)]/70">
            Mon–Fri 10am–6pm · Sat 11am–4pm · Sun Closed
          </p>
        </div>
      </section>
    </main>
  )
}
