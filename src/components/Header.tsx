import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun, Menu, X, Phone, BedDouble } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/data/company'
import { cn } from '@/lib/utils'

interface HeaderProps {
  themeMode: 'light' | 'dark'
  onToggleTheme: () => void
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header({ themeMode, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center shrink-0">
              <BedDouble size={16} className="text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[var(--color-primary)] text-sm sm:text-base">
                {COMPANY.shortName}
              </span>
              <span className="text-[10px] sm:text-xs text-[var(--color-muted-foreground)] hidden sm:block">
                Manufacturing Inc.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-muted)]'
                      : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
            <Button variant="ghost" size="icon" onClick={onToggleTheme} aria-label="Toggle theme">
              {themeMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--color-border)] py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-muted)]'
                      : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-muted)]'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--color-primary)]"
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
