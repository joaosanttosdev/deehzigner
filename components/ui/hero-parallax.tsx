"use client"

import * as React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Link from "next/link"

type Product = { title: string; link: string; thumbnail: string }

const stats = [
  { value: "+5.000", label: "Projetos" },
  { value: "+12", label: "Anos de experiência" },
  { value: "+400", label: "Clientes satisfeitos" },
  { value: "Qualidade", label: "Aprovada e elogiada por todos" },
]

export function HeroParallax({ products }: { products: Product[] }) {
  const rows = [products.slice(0, 5), products.slice(5, 10), products.slice(10, 15)]
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const spring = { stiffness: 300, damping: 30, bounce: 100 }
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), spring)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), spring)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), spring)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), spring)

  return (
    <section ref={ref} className="relative flex h-[300vh] flex-col overflow-hidden py-32 antialiased [perspective:1000px] [transform-style:preserve-3d]">
      <header className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 md:px-20 md:py-28">
        <p className="mb-5 text-base font-medium uppercase tracking-[0.28em] text-primary">— Branding · UI/UX · Web Design</p>
        <h1 className="max-w-5xl text-6xl font-bold leading-[1.05] tracking-tight text-foreground md:text-8xl">Design que faz sua marca <span className="text-primary">ser vista.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-2xl">Identidade visual, estampas e materiais gráficos para marcas que querem ser lembradas. Cada logotipo ao fundo é um trabalho real — a vitrine de 12 anos de experiência do Anderson.</p>
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-primary md:text-4xl">{item.value}</p>
              <p className="mt-1.5 text-base leading-6 text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </header>
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="hero-carousel group flex flex-col gap-12 md:gap-20"
      >
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex w-max gap-6 md:gap-20 ${index % 2 === 0 ? "hero-carousel-track" : "hero-carousel-track-reverse"}`}
            style={{ animationDuration: `${55 + index * 12}s` }}
          >
            {[...row, ...row].map((product, i) => (
              <ProductCard key={`${product.title}-${i}`} product={product} />
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article whileHover={{ y: -20 }} className="group/product relative h-72 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl md:h-96 md:w-[30rem]">
      <Link href={product.link} target="_blank" rel="noreferrer" className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <img src={product.thumbnail} alt={product.title} className="absolute inset-0 h-full w-full object-cover object-left-top" loading="lazy" />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover/product:bg-black/70" />
        <h2 className="absolute bottom-5 left-5 translate-y-2 text-xl font-medium text-white opacity-0 transition-all group-hover/product:translate-y-0 group-hover/product:opacity-100">{product.title}</h2>
      </Link>
    </motion.article>
  )
}

const heroImages = [
  "/portfolio/marcia-almeida.jpg",
  "/portfolio/aw-imoveis.jpg",
  "/portfolio/hanami.jpg",
  "/portfolio/paulo-henrique.jpg",
  "/portfolio/marcia-moura.jpg",
  "/portfolio/cel-store.webp",
  "/portfolio/sparta-solar.webp",
  "/portfolio/alfa-designer.webp",
  "/portfolio/rancho-frei-damiao.webp",
  "/portfolio/ministerio-tocps.webp",
  "/portfolio/marcela-oliveira.webp",
]

export const products: Product[] = [
  ["Moonbeam", "https://gomoonbeam.com", "moonbeam"], ["Cursor", "https://cursor.so", "cursor"], ["Rogue", "https://userogue.com", "rogue"], ["Editorially", "https://editorially.org", "editorially"], ["Editrix AI", "https://editrix.ai", "editrix"], ["Pixel Perfect", "https://app.pixelperfect.quest", "pixelperfect"], ["Algochurn", "https://algochurn.com", "algochurn"], ["Aceternity UI", "https://ui.aceternity.com", "aceternityui"], ["Tailwind Master Kit", "https://tailwindmasterkit.com", "tailwindmasterkit"], ["SmartBridge", "https://smartbridgetech.com", "smartbridge"], ["Renderwork Studio", "https://renderwork.studio", "renderwork"], ["Creme Digital", "https://cremedigital.com", "cremedigital"], ["Golden Bells Academy", "https://goldenbellsacademy.com", "goldenbellsacademy"], ["Invoker Labs", "https://invoker.lol", "invoker"], ["E Free Invoice", "https://efreeinvoice.com", "efreeinvoice"],
].map(([title, link], index) => ({ title, link, thumbnail: heroImages[index % heroImages.length] }))
