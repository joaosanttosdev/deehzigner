"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  [
    "Quanto tempo demora para ficar pronto?",
    "Depende do projeto: logotipos levam em média de 5 a 7 dias úteis, artes para redes sociais de 2 a 3 dias e identidades visuais completas de 10 a 15 dias, sempre com prazos combinados no início.",
  ],
  [
    "Como funciona o pagamento via PIX em duas etapas?",
    "50% do valor é pago no início, para reservar a agenda e começar a criação, e os 50% restantes na aprovação final, antes da entrega dos arquivos definitivos.",
  ],
  [
    "Posso parcelar no cartão?",
    "Sim! Projetos podem ser parcelados no cartão de crédito. As condições de parcelamento são combinadas no fechamento do orçamento.",
  ],
  [
    "Você trabalha com qualquer segmento?",
    "Sim, atendo negócios de todos os segmentos — do comércio local a startups. Cada projeto começa com um briefing para entender a fundo o seu mercado e o seu público.",
  ],
  [
    "Os arquivos são meus após a entrega?",
    "Sim. Após a aprovação e o pagamento final, todos os arquivos e direitos de uso da arte são seus, incluindo os formatos editáveis quando contratados.",
  ],
  [
    "Como envio minhas referências e materiais?",
    "Pelo WhatsApp ou e-mail: você pode mandar logotipos existentes, fotos, textos e exemplos de estilos que gosta. Tudo é organizado no briefing do projeto.",
  ],
  [
    "E se eu não gostar do resultado?",
    "Cada projeto inclui rodadas de ajustes para chegar ao resultado ideal. Trabalho com revisões até que a proposta esteja alinhada ao briefing aprovado.",
  ],
  [
    "Qual o prazo de feedback para manter o projeto fluindo?",
    "O ideal é retornar em até 2 dias úteis a cada apresentação. Assim o cronograma combinado é mantido e o projeto não perde o ritmo.",
  ],
  [
    "O que acontece se eu mudar o briefing durante o projeto?",
    "Pequenos ajustes fazem parte do processo. Mudanças significativas de direção são tratadas como novo escopo, com prazo e valores reavaliados em conjunto.",
  ],
  [
    "Quais arquivos recebo na entrega?",
    "Você recebe os arquivos finais em alta resolução (PNG, JPG e PDF) e, conforme o pacote, os editáveis (AI, PSD ou CDR), além do manual de aplicação da marca.",
  ],
];

export function FAQSection() {
  return (
    <section
      id="duvidas"
      className="relative overflow-hidden border-t border-border bg-secondary px-5 py-24 md:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              FAQ / respostas rápidas
            </p>
            <h2 className="text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
              Ainda tem dúvidas?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Tudo o que você precisa saber antes de começar a transformar sua
              ideia em uma marca.
            </p>
          </div>
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
  );
}
