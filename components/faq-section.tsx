"use client"

import { ArrowUpRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  ["Quais serviços vocês oferecem?", "Trabalhamos com identidade visual, criação de logotipos, estampas, materiais gráficos, artes para redes sociais, cartões de visita, banners e outros projetos de comunicação visual. Também desenvolvemos projetos de web design."],
  ["Como funciona o processo de criação?", "Começamos entendendo a necessidade do projeto, referências e objetivo. A partir disso, desenvolvemos a proposta visual, apresentamos o resultado e realizamos os ajustes necessários até chegar à solução ideal."],
  ["Quanto custa um projeto de design?", "Cada projeto é único, então o valor depende do tipo de serviço, complexidade e quantidade de peças. Entre em contato para explicar o que você precisa e receber um orçamento personalizado."],
  ["Vocês fazem artes para empresas e marcas?", "Sim. Desenvolvemos materiais para empresas, profissionais autônomos, lojas, eventos e projetos pessoais, sempre adaptando o design à identidade e ao público de cada cliente."],
  ["Vocês criam estampas para camisetas?", "Sim. Criamos estampas personalizadas para camisetas, uniformes, eventos, marcas, equipes e projetos especiais."],
  ["Posso enviar referências para o projeto?", "Sim. Referências são muito bem-vindas. Elas ajudam a entender o estilo, a direção visual e as expectativas para o projeto."],
  ["Quantas alterações posso solicitar?", "Isso depende do projeto contratado. O processo é alinhado previamente para que as etapas, entregas e possíveis ajustes fiquem claras desde o início."],
  ["Quanto tempo leva para ficar pronto?", "O prazo varia de acordo com a complexidade e quantidade de materiais. Depois de entender o projeto, informamos uma estimativa de prazo antes de iniciar o trabalho."],
  ["Como recebo os arquivos finais?", "Os arquivos são entregues nos formatos adequados para sua finalidade, seja impressão, redes sociais ou uso digital. Os formatos finais são definidos de acordo com o projeto contratado."],
  ["Quero fazer um projeto. Como entro em contato?", "É simples. Clique em “Vamos conversar” e envie uma mensagem pelo WhatsApp contando um pouco sobre o que você precisa. A partir daí, conversamos sobre a ideia e os próximos passos."],
]

export function FAQSection() {
  return (
    <section id="duvidas" className="relative overflow-hidden border-t border-border bg-secondary px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">FAQ / respostas rápidas</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">Ainda tem dúvidas?</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Tudo o que você precisa saber antes de começar a transformar sua ideia em uma marca.</p>
          </div>
          <Button asChild className="w-fit rounded-full bg-primary px-6 text-primary-foreground hover:bg-accent">
            <a href="https://wa.me/" target="_blank" rel="noreferrer">Vamos conversar <ArrowUpRight data-icon="inline-end" /></a>
          </Button>
        </div>
        <div className="grid gap-x-12 md:grid-cols-2">
          {[faqs.slice(0, 5), faqs.slice(5)].map((column, columnIndex) => (
            <Accordion key={columnIndex} type="single" collapsible>
              {column.map(([question, answer], index) => (
                <AccordionItem key={question} value={`${columnIndex}-${index}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
