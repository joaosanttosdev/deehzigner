"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type Testimonial = {
  text: ReactNode
  image: string
  name: string
  role: string
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].flatMap((_, index) =>
          testimonials.map(({ text, image, name, role }, testimonialIndex) => (
            <article
              className="w-full max-w-xs rounded-3xl border border-border bg-card p-7 shadow-lg shadow-primary/10 md:p-10"
              key={`${index}-${testimonialIndex}`}
            >
              <p className="text-sm leading-7 text-foreground md:text-base">{text}</p>
              <div className="mt-5 flex items-center gap-3">
                <img width={40} height={40} src={image} alt={name} className="size-10 rounded-full object-cover" loading="lazy" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium leading-5 tracking-tight text-foreground">{name}</p>
                  <p className="text-sm leading-5 tracking-tight text-muted-foreground">{role}</p>
                </div>
              </div>
            </article>
          )),
        )}
      </motion.div>
    </div>
  )
}
