import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function HeaderSection() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-20">
        <a href="#inicio" className="flex items-center">
          <img src="/deeh-logo.webp" alt="Deeh Zigner" className="h-10 w-auto md:h-12" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href="https://wa.me/5511991064072" target="_blank" rel="noreferrer" />}
          nativeButton={false}
          size="lg"
          className="rounded-full px-5"
        >
          Iniciar Projeto <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </header>
  )
}
