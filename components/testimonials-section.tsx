"use client"

import { motion } from "framer-motion"

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"

const testimonials = [
  {
    text: "A identidade visual traduziu exatamente a essência do meu negócio. O resultado ficou profissional, estratégico e muito acima do que eu imaginava.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Empreendedora",
  },
  {
    text: "O processo foi leve, claro e muito rápido. Cada detalhe foi pensado para fazer a marca se comunicar melhor com o público.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Gestor de negócios",
  },
  {
    text: "Atendimento próximo e um cuidado incrível em cada etapa. Hoje minha marca passa a confiança que eu sempre quis transmitir.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Profissional autônoma",
  },
  {
    text: "A nova identidade deixou nossa comunicação muito mais consistente. Recebemos elogios desde o primeiro dia de lançamento.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Mais do que um designer, encontrei alguém que entendeu o momento e os objetivos da empresa. Recomendo de olhos fechados.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Gerente de projetos",
  },
  {
    text: "A entrega foi organizada, cuidadosa e superou nossas expectativas. Nossa marca finalmente tem uma presença à altura do negócio.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Analista de negócios",
  },
  {
    text: "O trabalho trouxe mais clareza para nossa comunicação e fortaleceu a percepção da empresa em todos os pontos de contato.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Diretor de marketing",
  },
  {
    text: "Ele ouviu nossas necessidades e transformou tudo em uma solução visual marcante, funcional e fácil de aplicar no dia a dia.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Gerente comercial",
  },
  {
    text: "Nossa presença online ganhou força e personalidade. O projeto ajudou a marca a ser percebida com muito mais profissionalismo.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Gestor de e-commerce",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section id="testemunhas" className="relative my-20 overflow-hidden bg-background py-16 md:my-28 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <span className="rounded-lg border border-border px-4 py-1 text-base text-primary">Testemunhas</span>
          <h2 className="mt-5 text-5xl font-bold tracking-tight text-foreground md:text-7xl">Marcas que confiaram</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">
            Cada projeto é uma parceria. Veja o que clientes dizem sobre transformar ideias em marcas com propósito.
          </p>
        </motion.div>

        <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] md:mt-16">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
