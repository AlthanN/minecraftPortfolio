import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="relative bg-dirt">
      {/* Grass surface strip: the top of the ground */}
      <div aria-hidden="true" className="relative">
        <div className="h-6 w-full bg-grass block-3d" />
        <div
          className="h-10 w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, var(--grass) 0 40px, var(--grass-dark) 40px 80px)',
          }}
        />
      </div>

      {/* Dirt body with a subtle block grid */}
      <div
        className="relative"
        style={{
          backgroundImage:
            'linear-gradient(var(--dirt), var(--dirt-dark)), repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0 47px, rgba(0,0,0,0.12) 47px 48px), repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0 47px, rgba(0,0,0,0.12) 47px 48px)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
          <h2 className="text-center font-pixel text-2xl text-cloud text-shadow-pixel sm:text-3xl">
            Experience
          </h2>
          

          <ol className="mt-14 space-y-8">
            {experience.map((job, i) => (
              <li key={job.company} className="relative">
                <div className="block-3d border-4 border-wood-dark bg-wood">
                  {/* sign header bar */}
                  <div className="flex flex-col gap-1 border-b-4 border-wood-dark bg-wood-dark/40 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-pixel text-sm text-cloud text-shadow-pixel-sm">
                      {job.role}
                    </h3>
                    <span className="font-pixel text-[10px] text-torch text-shadow-pixel-sm">
                      {job.period}
                    </span>
                  </div>
                  <div className="px-5 py-5">
                    <p className="font-pixel text-[10px] text-grass text-shadow-pixel-sm">
                      {job.company}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 leading-relaxed text-white/95"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-3 w-3 flex-shrink-0 bg-grass block-3d"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < experience.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-8 h-8 w-2 bg-wood-dark"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
