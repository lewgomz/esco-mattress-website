import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, BedDouble } from 'lucide-react'
import { COMPANY } from '@/data/company'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)] mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                <BedDouble size={14} className="text-white" />
              </div>
              <span className="font-bold text-[var(--color-primary)]">{COMPANY.shortName}</span>
            </div>
            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
              {COMPANY.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[var(--color-muted-foreground)] mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone size={14} className="text-[var(--color-accent)]" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <MapPin size={14} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                  {COMPANY.address.full}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-[var(--color-muted-foreground)] mb-3">
              Hours
            </h3>
            <ul className="space-y-1.5 text-sm">
              {COMPANY.hours.map(({ day, time }) => (
                <li key={day} className="flex items-start gap-2">
                  <Clock size={14} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>
                    <span className="text-[var(--color-foreground)]">{day}</span>
                    <br />
                    <span className="text-[var(--color-muted-foreground)]">{time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-muted-foreground)]">
          <span>© {year} {COMPANY.name}. All rights reserved.</span>
          <nav className="flex gap-4">
            <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
