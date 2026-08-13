import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Mail, Globe } from "lucide-react";

export function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer className="relative z-10 mt-10">
      {/* CTA bar */}
      <div
        className="mx-4 rounded-3xl px-6 py-10 text-center sm:mx-5 sm:px-12 lg:mx-14"
        style={{
          background: "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(153,27,27,0.1))",
          border: "1px solid rgba(220,38,38,0.25)",
          backdropFilter: "blur(18px)",
        }}
      >
        <h2 className="text-2xl font-semibold sm:text-3xl text-white">
          Ready to transform your <span className="text-gradient">business?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/50">
          Book a 30-minute session with our architects and leave with a concrete roadmap tailored to your business goals.
        </p>
        <button
          onClick={onContact}
          className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-sm font-semibold text-white transition-all hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, #dc2626, #991b1b)",
            boxShadow: "0 0 0 1px rgba(220,38,38,0.35), 0 16px 40px rgba(220,38,38,0.3)",
          }}
        >
          Schedule a Consultation
          <ArrowRight className="size-4" />
        </button>
      </div>

      {/* Main footer grid */}
      <div
        className="px-4 pt-14 sm:px-8 lg:px-14"
        style={{ background: "rgba(8,8,8,0.97)", borderTop: "1px solid rgba(220,38,38,0.12)" }}
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link to="/" className="inline-flex items-center mb-4 transition-transform hover:scale-[1.02]">
              <img
                src="/lateralworx_logo.png"
                alt="LateralWorx Logo"
                className="h-10 w-auto object-contain"
                style={{
                  mixBlendMode: "screen",
                  filter: "drop-shadow(0 0 6px rgba(220,38,38,0.5)) brightness(1.1) contrast(1.1)",
                }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/45 max-w-[240px]">
              Transforming Businesses Through Innovative IT Solutions
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-white/40 justify-center sm:justify-start">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-red-500/70" />
              <span className="leading-relaxed">
                Suite 405 Beaumont Plaza,<br />
                Beaumont Road,<br />
                Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/", contact: false },
                { label: "Services", href: "/#cloud", contact: false },
                { label: "About", href: "/about", contact: false },
                { label: "Contact", href: "/contact", contact: false },
              ].map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") && !l.href.includes("#") ? (
                    <Link
                      to={l.href}
                      className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
                    >
                      <span className="h-px w-3 bg-red-600/50 transition-all group-hover:w-5 group-hover:bg-red-500" />
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
                      onClick={l.contact ? (e) => { e.preventDefault(); onContact(); } : undefined}
                    >
                      <span className="h-px w-3 bg-red-600/50 transition-all group-hover:w-5 group-hover:bg-red-500" />
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Services</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
                { label: "Business Applications", href: "/services/business-applications" },
                { label: "Security & Data", href: "/services/security-data" },
                { label: "Managed IT Services", href: "/services/managed-it" },
                { label: "Consulting & Digital", href: "/services/consulting" },
              ].map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/services") ? (
                    <Link to={l.href} className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white">
                      <span className="h-px w-3 bg-red-600/50 transition-all group-hover:w-5 group-hover:bg-red-500" />
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white">
                      <span className="h-px w-3 bg-red-600/50 transition-all group-hover:w-5 group-hover:bg-red-500" />
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@lateralworx.com" className="group flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-white">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}>
                    <Mail className="size-3.5 text-red-500" />
                  </span>
                  <span>info@lateralworx.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-white">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}>
                    <Globe className="size-3.5 text-red-500" />
                  </span>
                  <span>Webmail</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-12 max-w-6xl flex flex-col items-center justify-between gap-2 border-t border-white/5 py-6 text-xs text-white/25 sm:flex-row">
          <span className="text-center sm:text-left">© {new Date().getFullYear()} LateralWorx · All rights reserved</span>
          <span className="text-center sm:text-right">Cloud · Security · Managed IT · Consulting</span>
        </div>
      </div>
    </footer>
  );
}
