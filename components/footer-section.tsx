import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
]

const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "E-mail", href: "mailto:contato@deehzigner.com" },
]

export function FooterSection() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-border bg-background px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <img src="/deeh-logo.webp" alt="Deeh Zigner" className="h-11 w-auto" />
            <h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Design que dá forma às suas ideias.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
              Design gráfico, identidade visual e soluções criativas para marcas que querem ser lembradas.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">Navegação</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">Contato</p>
              <ul className="mt-5 space-y-3">
                {contactLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center border-t border-border pt-16 text-center md:mt-28 md:pt-20">
          <h3 className="max-w-3xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Vamos criar algo que mereça ser visto.
          </h3>
          <Button
            render={<a href="https://wa.me/" target="_blank" rel="noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-10 rounded-full px-6"
          >
            Vamos conversar <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Deeh Zigner. Todos os direitos reservados.</p>
          <p>Design gráfico e identidade visual</p>
        </div>
      </div>
    </footer>
  )
}
