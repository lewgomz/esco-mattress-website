import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { COMPANY } from '@/data/company'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const initialForm: FormState = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static form — no backend yet
    setSubmitted(true)
    setForm(initialForm)
  }

  const inputClass =
    'w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] transition'

  return (
    <main className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-foreground)] mb-3">
            Contact Us
          </h1>
          <p className="text-[var(--color-muted-foreground)] max-w-xl mx-auto">
            Have a question or want to visit our showroom? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Phone</h3>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-[var(--color-primary)] hover:underline font-medium text-lg"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)] mb-1">Location</h3>
                    <a
                      href={COMPANY.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)] mb-2">Hours</h3>
                    <table className="text-sm text-[var(--color-muted-foreground)] w-full">
                      <tbody>
                        {COMPANY.hours.map(({ day, time }) => (
                          <tr key={day}>
                            <td className="pr-4 py-0.5 font-medium text-[var(--color-foreground)]">{day}</td>
                            <td className="py-0.5">{time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-56">
              <iframe
                title="Esco Mattress Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.address.full)}&output=embed`}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <CheckCircle size={48} className="text-[var(--color-primary)]" />
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                      Message Sent!
                    </h3>
                    <p className="text-[var(--color-muted-foreground)]">
                      Thanks for reaching out. We'll get back to you shortly.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-4">
                      Send Us a Message
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-[var(--color-foreground)]">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-sm font-medium text-[var(--color-foreground)]">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(555) 555-5555"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-[var(--color-foreground)]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-[var(--color-foreground)]">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking for..."
                        className={inputClass + ' resize-none'}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send size={16} />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </main>
  )
}
