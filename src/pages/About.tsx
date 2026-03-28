import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
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

export default function About() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Hero */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🏭</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-foreground)] mb-4">
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
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4">Our Story</h2>
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
            className="bg-[var(--color-muted)] rounded-2xl p-8 text-center"
          >
            <div className="text-7xl mb-4">🛏️</div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-[var(--color-primary)]">4</div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Mattress Collections</div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">2×</div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Double-Sided Lifespan</div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">Ontario, CA</div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Locally Manufactured</div>
            </div>
          </motion.div>
        </section>

        {/* Products */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-3">Our Collections</h2>
            <p className="text-[var(--color-muted-foreground)]">
              Every model is built double-sided so you can flip it and extend its comfort life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-[var(--color-muted)] rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-3">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-4">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">
            Have Questions? We'd Love to Help.
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            Visit our showroom or give us a call — we're happy to walk you through our full collection.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Us <ArrowRight size={18} />
            </Button>
          </Link>
        </section>

      </div>
    </main>
  )
}
