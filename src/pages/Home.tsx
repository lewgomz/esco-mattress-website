import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone, ArrowRight, ChevronDown, MapPin, Check,
  Waves, Layers, Leaf, Fingerprint,
  RefreshCw, Factory, ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY, PRODUCTS, VALUES } from '@/data/company'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' as const },
  }),
}

const PRODUCT_ICONS = {
  innerspring: Waves,
  'pillow-top': Layers,
  latex: Leaf,
  'memory-foam': Fingerprint,
} as const

const PRODUCT_DETAILS = {
  innerspring: {
    badge: 'Classic',
    features: ['Tempered steel coil system', 'Superior airflow & breathability', 'Firm, responsive support'],
  },
  'pillow-top': {
    badge: 'Most Popular',
    features: ['Comfort layers sewn on both sides', 'Flip to extend mattress life', 'Plush pressure-relieving feel'],
  },
  latex: {
    badge: 'Natural',
    features: ['Naturally hypoallergenic material', 'Buoyant, cooling support', 'Resists dust mites & mold'],
  },
  'memory-foam': {
    badge: 'Comfort',
    features: ['High-density viscoelastic foam', 'Reduces motion transfer', 'Ideal for couples & side sleepers'],
  },
} as const

const VALUE_ICONS = {
  'double-sided': RefreshCw,
  local: Factory,
  quality: ShieldCheck,
} as const

export default function Home() {
  const productsRef = useRef<HTMLElement>(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.15) 40px, rgba(255,255,255,0.15) 41px)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 mb-5"
          >
            <MapPin size={13} />
            Manufactured in Ontario, CA
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          >
            Quality You Can Feel<br />
            <span className="text-[var(--color-accent)]">On Both Sides</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-white/75 leading-relaxed"
          >
            {COMPANY.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button size="lg" variant="accent" onClick={scrollToProducts} className="cursor-pointer font-semibold">
              View Our Products <ChevronDown size={16} />
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto font-semibold">
                Contact Us <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-2">
          <div className="text-center mb-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-foreground)] mb-2">
              Our Mattress Collection
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-xl mx-auto leading-relaxed text-sm">
              Every mattress is double-sided — flip it to extend its life and keep the comfort consistent for years.
            </p>
          </div>
        </div>

        {PRODUCTS.map((product, i) => {
          const Icon = PRODUCT_ICONS[product.id as keyof typeof PRODUCT_ICONS]
          const details = PRODUCT_DETAILS[product.id as keyof typeof PRODUCT_DETAILS]
          const isEven = i % 2 === 0

          return (
            <div key={product.id} className="border-t border-[var(--color-border)]">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className={`mx-auto max-w-6xl flex flex-col md:flex-row items-stretch ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Visual panel */}
                <div className="md:w-2/5 flex items-center justify-center bg-[var(--color-muted)] px-8 py-12 md:py-14">
                  <div className="w-24 h-24 rounded-3xl bg-[var(--color-primary)]/12 flex items-center justify-center">
                    <Icon size={44} className="text-[var(--color-primary)]" />
                  </div>
                </div>

                {/* Text content */}
                <div className={`md:w-3/5 py-10 px-6 md:py-12 flex flex-col justify-center ${isEven ? 'md:pl-12 md:pr-8' : 'md:pr-12 md:pl-8'}`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                    {details.badge}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-5 text-sm">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {details.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-muted-foreground)]">
                        <Check size={14} className="text-[var(--color-primary)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          )
        })}

        <div className="border-t border-[var(--color-border)]" />
      </section>

      {/* Why Choose Us */}
      <section className="py-10 bg-[var(--color-muted)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-foreground)] mb-3">
              Why Choose Esco?
            </h2>
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
                  viewport={{ once: true, margin: '-50px' }}
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
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 bg-[var(--color-primary)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
            Ready to Sleep Better?
          </h2>
          <p className="text-white/70 mb-6">
            Call us today or visit our showroom in Ontario, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${COMPANY.phone}`}>
              <Button size="lg" variant="accent" className="w-full sm:w-auto font-semibold">
                <Phone size={16} />
                Call {COMPANY.phone}
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto font-semibold">
                Send Us a Message <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/50">
            Mon–Fri 10am–6pm · Sat 11am–4pm · Sun Closed
          </p>
        </div>
      </section>
    </main>
  )
}
