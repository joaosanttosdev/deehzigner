const tools = [
  { short: "Ps", name: "Photoshop" },
  { short: "Ai", name: "Illustrator" },
  { short: "Pr", name: "Premiere" },
  { short: "Cd", name: "CorelDRAW" },
]

const highlights = [
  { value: "12", label: "anos de experiência" },
  { value: "6+", label: "segmentos atendidos" },
  { value: "1:1", label: "atendimento direto com você" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-border bg-background px-5 py-24 md:px-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 bg-primary/5" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto-deeh-GV4TNXePCXJ7my5DpMi5y3pbXhF6N3.jpeg"
              alt="Anderson, designer da Deeh Zigner"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <p className="mb-5 text-base font-medium uppercase tracking-[0.28em] text-primary">Sobre</p>
          <h2 className="max-w-2xl text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            12 anos transformando ideias em marcas
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Anderson é o designer por trás da Deeh Zigner. Ele cuida de cada projeto do briefing à entrega final — sem intermediários, sem processos genéricos. Cada identidade nasce do negócio do cliente, não de um template pronto.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            O foco é sempre o mesmo: peças com propósito, pixel a pixel, que fazem uma marca pequena parecer exatamente tão séria quanto ela é.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 border-y border-border py-7 sm:grid-cols-3 sm:gap-6">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold text-primary">{item.value}</p>
                <p className="mt-2 text-base leading-6 text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-base font-medium uppercase tracking-[0.2em] text-foreground">Ferramentas de trabalho</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary">{tool.short}</span>
                  <span className="text-base font-medium text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
