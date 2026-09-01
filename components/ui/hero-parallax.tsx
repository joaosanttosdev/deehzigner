"use client"

import * as React from "react"
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import Link from "next/link"

type Product = { title: string; link: string; thumbnail: string }

export function HeroParallax({ products }: { products: Product[] }) {
  const rows = [products.slice(0, 5), products.slice(5, 10), products.slice(10, 15)]
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const spring = { stiffness: 300, damping: 30, bounce: 100 }
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), spring)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), spring)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), spring)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), spring)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), spring)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), spring)

  return (
    <section ref={ref} className="relative flex h-[300vh] flex-col overflow-hidden py-32 antialiased [perspective:1000px] [transform-style:preserve-3d]">
      <header className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:py-28">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-primary">Estúdio digital</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-7xl">Ideias que ganham<br />movimento.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-xl">Criamos produtos digitais memoráveis com tecnologia, estratégia e um olhar atento para cada detalhe.</p>
      </header>
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="flex flex-col gap-12 md:gap-20">
        {rows.map((row, index) => (
          <motion.div key={index} className={`flex gap-6 md:gap-20 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
            {row.map((product) => <ProductCard key={product.title} product={product} translate={index % 2 === 0 ? translateX : translateXReverse} />)}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function ProductCard({ product, translate }: { product: Product; translate: MotionValue<number> }) {
  return (
    <motion.article style={{ x: translate }} whileHover={{ y: -20 }} className="group/product relative h-72 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl md:h-96 md:w-[30rem]">
      <Link href={product.link} target="_blank" rel="noreferrer" className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <img src={product.thumbnail} alt={product.title} className="absolute inset-0 h-full w-full object-cover object-left-top" loading="lazy" />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover/product:bg-black/70" />
        <h2 className="absolute bottom-5 left-5 translate-y-2 text-lg font-medium text-white opacity-0 transition-all group-hover/product:translate-y-0 group-hover/product:opacity-100">{product.title}</h2>
      </Link>
    </motion.article>
  )
}

export const products: Product[] = [
  ["Moonbeam", "https://gomoonbeam.com", "moonbeam"], ["Cursor", "https://cursor.so", "cursor"], ["Rogue", "https://userogue.com", "rogue"], ["Editorially", "https://editorially.org", "editorially"], ["Editrix AI", "https://editrix.ai", "editrix"], ["Pixel Perfect", "https://app.pixelperfect.quest", "pixelperfect"], ["Algochurn", "https://algochurn.com", "algochurn"], ["Aceternity UI", "https://ui.aceternity.com", "aceternityui"], ["Tailwind Master Kit", "https://tailwindmasterkit.com", "tailwindmasterkit"], ["SmartBridge", "https://smartbridgetech.com", "smartbridge"], ["Renderwork Studio", "https://renderwork.studio", "renderwork"], ["Creme Digital", "https://cremedigital.com", "cremedigital"], ["Golden Bells Academy", "https://goldenbellsacademy.com", "goldenbellsacademy"], ["Invoker Labs", "https://invoker.lol", "invoker"], ["E Free Invoice", "https://efreeinvoice.com", "efreeinvoice"],
].map(([title, link, name]) => ({ title, link, thumbnail: `https://aceternity.com/images/products/thumbnails/new/${name}.png` }))
