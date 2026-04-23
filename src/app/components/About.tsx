import FadeIn from './FadeIn'

const expertise = [
  {
    label: 'Computer Vision',
    detail: 'CNNs, Vision Transformers (ViTs), image segmentation, object detection',
  },
  {
    label: 'NLP & LLMs',
    detail: 'Prompt engineering, fine-tuning, RAG pipelines, embeddings, AI agents',
  },
  {
    label: 'Modern AI Stack',
    detail: 'MCP, Agent-to-Agent (A2A) protocols, vector databases, multimodal systems',
  },
  {
    label: 'Data',
    detail: 'Processing, analysis, and insights for both business and academic contexts',
  },
  {
    label: 'Deployment',
    detail: 'FastAPI, REST APIs, Docker, and scalable backend integration',
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase mb-8">
            01 — About
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-[clamp(32px,5vw,40px)] leading-[1.15] tracking-tight text-white mb-10 max-w-2xl">
            I like to create ML algorithms and play Arc Raiders
          </h2>
        </FadeIn>

        <div className="space-y-10 text-[16px] text-[#a8a8a8] leading-[1.8] max-w-2xl">
          <FadeIn delay={0.2}>
            <p>
              I&apos;m a Computer Science researcher focused on computer
              vision and applied machine learning, currently pursuing a
              Master&apos;s degree. I build end-to-end AI systems — from
              research to production.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <p className="mb-6">My core expertise includes:</p>
              <ul className="flex flex-col gap-4">
                {expertise.map((item) => (
                  <li
                    key={item.label}
                    className="grid grid-cols-[200px_1fr] gap-6 items-baseline"
                  >
                    <span className="text-[14px] text-[#ededed] font-mono">
                      {item.label}
                    </span>
                    <span className="text-[15px] text-[#8a8a8a] leading-[1.6]">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}