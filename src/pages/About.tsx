import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Waves, Layers, Leaf, Fingerprint, RefreshCw, Factory, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY, PRODUCTS, VALUES } from '@/data/company'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const PRODUCT_ICONS = {
  innerspring: Waves,
  'pillow-top': Layers,
  latex: Leaf,
  'memory-foam': Fingerprint,
} as const

const VALUE_ICONS = {
  'double-sided': RefreshCw,
  local: Factory,
  quality: ShieldCheck,
} as const

const stats = [
  { Icon: Layers, value: '4', label: 'Mattress Collections' },
  { Icon: RefreshCw, value: '2×', label: 'Double-Sided Lifespan' },
  { Icon: Factory, value: 'Ontario, CA', label: 'Locally Manufactured' },
] as const

export default function About() {
  return (
    <main className="py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Hero */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-foreground)] mb-3">
              About {COMPANY.shortName}
            </h1>
            <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              {COMPANY.description}
            </p>
          </motion.div>
        </section>

        {/* Our Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">Our Story</h2>
            <div className="space-y-4 text-[var(--color-muted-foreground)] leading-relaxed">
              <p>
                Esco Mattress Manufacturing Inc. was founded on a simple belief: a mattress should last,
                and it should work for you from every angle. That's why we specialize in double-sided
                construction — a commitment most manufacturers have abandoned in favor of cheaper,
                one-sided alternatives.
              </p>
              <p>
                From our facility in Ontario, California, we craft every mattress by hand using
                carefully selected materials — from tempered steel coils to high-density latex and
                memory foam. Our team takes pride in producing mattresses that hold up for years,
                not just months.
              </p>
              <p>
                Whether you're a retailer looking for a reliable manufacturing partner or a customer
                seeking a quality sleep surface, Esco delivers the craftsmanship and consistency
                you can feel on both sides.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-muted)] rounded-2xl p-8"
          >
            <div className="space-y-5">
              {stats.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)] leading-none mb-0.5">{value}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Products */}
        <section>
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-3">Our Collections</h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              Every model is built double-sided so you can flip it and extend its comfort life.
            </p>
          </div>
          <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
            {PRODUCTS.map((product, i) => {
              const Icon = PRODUCT_ICONS[product.id as keyof typeof PRODUCT_ICONS]
              return (
                <motion.div
                  key={product.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  className="flex items-start gap-5 py-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-foreground)] mb-1">{product.name}</h3>
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Values */}
        <section className="bg-[var(--color-muted)] rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-3">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[value.id as keyof typeof VALUE_ICONS]
              return (
                <motion.div
                  key={value.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-foreground)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-2">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)] mb-3">
            Have Questions? We'd Love to Help.
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
            Visit our showroom or give us a call — we're happy to walk you through our full collection.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold">
              Contact Us <ArrowRight size={16} />
            </Button>
          </Link>
        </section>

      </div>
    </main>
  )
}
