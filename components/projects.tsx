import { projects, type Project } from '@/lib/portfolio-data'

const oreColor: Record<Project['ore'], string> = {
  diamond: 'var(--ore-diamond)',
  emerald: 'var(--ore-emerald)',
  gold: 'var(--ore-gold)',
  amethyst: 'var(--ore-amethyst)',
}

function OreCluster({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="grid h-12 w-12 grid-cols-2 grid-rows-2 gap-1 border-2 border-stone-dark bg-stone-dark p-1"
    >
      <span className="bg-stone" />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span className="bg-stone" />
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-cave">
      {/* Cave ceiling: transition from dirt into stone with hanging blocks */}
      <div
        aria-hidden="true"
        className="h-10 w-full"
        style={{
          backgroundImage:
            'linear-gradient(var(--dirt-dark), var(--stone-dark))',
        }}
      />
      <div
        aria-hidden="true"
        className="flex justify-around"
        style={{ marginTop: '-2px' }}
      >
        {[16, 28, 12, 36, 20, 30, 14].map((h, i) => (
          <span
            key={i}
            className="w-10 bg-stone-dark block-3d"
            style={{ height: h }}
          />
        ))}
      </div>

      {/* Cave body */}
      <div
        className="relative"
        style={{
          backgroundImage:
            'linear-gradient(var(--cave), var(--cave-deep)), repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0 47px, rgba(0,0,0,0.25) 47px 48px), repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0 47px, rgba(0,0,0,0.25) 47px 48px)',
          backgroundBlendMode: 'multiply',
        }}
      >
        {/* scattered ore specks */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { top: '12%', left: '8%', c: 'var(--ore-gold)' },
            { top: '30%', left: '88%', c: 'var(--ore-diamond)' },
            { top: '55%', left: '5%', c: 'var(--ore-amethyst)' },
            { top: '72%', left: '92%', c: 'var(--ore-emerald)' },
            { top: '85%', left: '15%', c: 'var(--ore-gold)' },
          ].map((o, i) => (
            <span
              key={i}
              className="absolute h-4 w-4 block-3d"
              style={{ top: o.top, left: o.left, backgroundColor: o.c, opacity: 0.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:py-24">
          <h2 className="text-center font-pixel text-2xl text-cloud text-shadow-pixel sm:text-3xl">
            Projects
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-center leading-relaxed text-white/80">
            Deep in the mines, these are the rare ores I&apos;ve dug up and
            crafted into real things.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target='_blank'
                className="group block-3d block border-4 border-stone-dark bg-stone/25 p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-pixel text-sm text-cloud text-shadow-pixel-sm">
                    {project.title}
                  </h3>
                  <OreCluster color={oreColor[project.ore]} />
                </div>
                <p className="mt-4 leading-relaxed text-white/85">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="block-inset border-2 border-stone-dark bg-cave-deep px-2.5 py-1.5 text-xs font-medium text-white/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-block font-pixel text-[10px] text-torch text-shadow-pixel-sm group-hover:underline">
                  Mine it →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
