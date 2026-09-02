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
  { label: "WhatsApp", href: "https://wa.me/5511991064072" },
  { label: "Instagram", href: "https://www.instagram.com/deehzigner" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anderson-nogueira-6b375b15a" },
  { label: "E-mail", href: "mailto:contato@deehzigner.com" },
]

export function FooterSection() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-border bg-background px-5 py-20 md:px-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <h3 className="max-w-4xl text-5xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-8xl">
            Vamos criar algo que mereça ser visto.
          </h3>
          <Button
            render={<a href="https://wa.me/5511991064072" target="_blank" rel="noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-10 rounded-full px-6"
          >
            Vamos conversar <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <footer id="contato" className="relative overflow-hidden border-t border-border bg-background px-5 py-20 md:px-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <img src="/deeh-logo.webp" alt="Deeh Zigner" className="h-11 w-auto" />
            <h2 className="mt-5 max-w-md text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Design que dá forma às suas ideias.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
              Design gráfico, identidade visual e soluções criativas para marcas que querem ser lembradas.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-base font-medium uppercase tracking-[0.2em] text-foreground">Navegação</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-base text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-base font-medium uppercase tracking-[0.2em] text-foreground">Contato</p>
              <ul className="mt-5 space-y-3">
                {contactLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Deeh Zigner. Todos os direitos reservados.</p>
          <p>Design gráfico e identidade visual</p>
        </div>
      </div>
      </footer>
    </>
  )
}
