import FadeIn from './FadeIn'

const nowItems = [
  {
    label: 'Studying at',
    value: 'PUCRS',
  },
  {
    label: 'Focused on',
    value: 'Data Science and AI',
  },
  {
    label: 'Diving into',
    value: 'Computer Vision and Reinforcement Learning',
  },
  {
    label: 'Side projects',
    value: 'A few in progress, not ready to share yet',
  },
]

// last updated this section — update manually when things change
const lastUpdated = 'April 2026'

export default function Now() {
  return (
    <section id="now" className="px-6 py-24 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-baseline mb-10">
            <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase">
              04 — Now
            </div>
            <div className="text-[11px] text-[#707070] font-mono">
              updated {lastUpdated}
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {nowItems.map((item, i) => (
            <FadeIn key={item.label} delay={0.2 + i * 0.05}>
              <div className="grid grid-cols-[140px_1fr] gap-5 py-4 border-t border-[#262626] last:border-b last:border-[#262626]">
                <span className="text-[13px] text-[#707070] font-mono pt-0.5">
                  {item.label}
                </span>
                <span className="text-[15px] text-[#ededed]">
                  {item.value}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}