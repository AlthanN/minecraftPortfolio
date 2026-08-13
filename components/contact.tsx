import { Gem, Pickaxe, ExternalLink } from 'lucide-react'
import { contacts } from '@/lib/portfolio-data'

const oreColor: Record<string, string> = {
  diamond: 'var(--ore-diamond)',
  emerald: 'var(--ore-emerald)',
  amethyst: 'var(--ore-amethyst)',
  gold: 'var(--ore-gold)',
}

function Torch({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`absolute flex flex-col items-center ${className ?? ''}`}>
      <span
        className="h-6 w-6 bg-torch"
        style={{ animation: 'torch-flicker 1.2s ease-in-out infinite' }}
      />
      <span className="h-8 w-2 bg-wood-dark" />
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-cave-deep">
      {/* deeper transition into bedrock darkness */}
      <div
        aria-hidden="true"
        className="h-16 w-full"
        style={{ backgroundImage: 'linear-gradient(var(--cave-deep), var(--bedrock))' }}
      />

      <div className="relative bg-bedrock">
        <Torch className="left-6 top-24 hidden sm:flex" />
        <Torch className="right-6 top-24 hidden sm:flex" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:py-24">
          <p className="font-pixel text-[10px] text-torch text-shadow-pixel-sm">
            ── The Treasure Chamber ──
          </p>
          <h2 className="mt-6 font-pixel text-2xl text-cloud text-shadow-pixel sm:text-3xl">
            Contact
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-white/80">
            You&apos;ve dug all the way to bedrock. Mine one of these ore blocks
            to reach me &mdash; each one links out to a different world.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block-3d flex flex-col items-center border-4 border-stone-dark bg-stone/20 p-6 transition-transform hover:-translate-y-1.5"
              >
                {/* Ore block */}
                <div className="relative grid h-20 w-20 grid-cols-3 grid-rows-3 gap-1 border-4 border-stone-dark bg-stone-dark p-1.5">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((cell) => {
                    const isOre = [1, 3, 4, 5, 7].includes(cell)
                    return (
                      <span
                        key={cell}
                        className={isOre ? '' : 'bg-stone'}
                        style={
                          isOre
                            ? {
                                backgroundColor: oreColor[c.ore],
                                animation: 'ore-glow 2s ease-in-out infinite',
                              }
                            : undefined
                        }
                      />
                    )
                  })}
                  <Pickaxe
                    aria-hidden="true"
                    className="absolute -right-3 -top-3 h-7 w-7 rotate-12 text-cloud opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={2.5}
                  />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Gem
                    aria-hidden="true"
                    className="h-4 w-4"
                    style={{ color: oreColor[c.ore] }}
                    strokeWidth={2.5}
                  />
                  <span className="font-pixel text-xs text-cloud text-shadow-pixel-sm">
                    {c.label}
                  </span>
                </div>
                <span className="mt-2 text-sm font-semibold text-white/90">
                  {c.handle}
                </span>
                <span className="mt-3 text-xs leading-relaxed text-white/60">
                  {c.blurb}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 font-pixel text-[9px] text-torch">
                  OPEN <ExternalLink aria-hidden="true" className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bedrock floor */}
        <div
          aria-hidden="true"
          className="h-10 w-full"
          style={{
            backgroundImage:
              'repeating-conic-gradient(var(--bedrock) 0% 25%, #000 0% 50%)',
            backgroundSize: '32px 32px',
            opacity: 0.7,
          }}
        />
        <footer className="border-t-4 border-black bg-bedrock px-4 py-6 text-center">
          <p className="font-pixel text-[9px] leading-relaxed text-white/50">
            Built block by block · {new Date().getFullYear()} Alex Stone
          </p>
        </footer>
      </div>
    </section>
  )
}
