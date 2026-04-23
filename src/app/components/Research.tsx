import FadeIn from './FadeIn'

type Paper = {
  year: string
  title: string
  authors: string
  venue: string
  citations?: number
  href?: string
}

const papers: Paper[] = [
  {
    year: '2026',
    title:
      'A Novel Multimodal Deep Image Analysis Model for Predicting Extraction/Non-Extraction Decision',
    authors:
      'S. I. Ahmad, J. Olczyk, A. S. Araújo, J. P. de Moura Medeiros, V. C. Teixeira, et al.',
    venue: 'Orthodontics & Craniofacial Research, 29(1), 101–111',
    href: 'https://scholar.google.com/citations?user=dxG803sAAAAJ&hl=pt-BR',
  },
]

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=dxG803sAAAAJ&hl=pt-BR'

export default function Research() {
  return (
    <section id="research" className="px-6 py-24 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-baseline mb-10">
            <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase">
              02 — Research
            </div>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#707070] font-mono hover:text-[#ededed] transition-colors"
            >
              google scholar ↗
            </a>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {papers.map((paper, i) => (
            <FadeIn key={paper.title} delay={0.2 + i * 0.08}>
              <a
                href={paper.href ?? SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[60px_1fr_auto] gap-5 items-start py-6 border-t border-[#262626] last:border-b last:border-[#262626] hover:bg-[#1a1a1a]/40 transition-colors px-3 -mx-3 rounded-md"
              >
                <span className="text-[13px] text-[#707070] pt-1 font-mono">
                  {paper.year}
                </span>

                <div className="min-w-0">
                  <h3 className="font-serif text-[19px] md:text-[21px] leading-[1.3] text-[#ededed] group-hover:text-white transition-colors mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-[13px] text-[#a8a8a8] mb-1 leading-relaxed">
                    {paper.authors}
                  </p>
                  <p className="text-[11px] text-[#707070] font-mono">
                    {paper.venue}
                    {paper.citations !== undefined && (
                      <>
                        {' · '}
                        {paper.citations === 0
                          ? 'new'
                          : `${paper.citations} ${paper.citations === 1 ? 'citation' : 'citations'}`}
                      </>
                    )}
                  </p>
                </div>

                <span className="text-[#4a4a4a] text-[12px] group-hover:text-[#a8a8a8] transition-colors pt-1 font-mono">
                  View ↗
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}