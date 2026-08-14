import { profile, about } from '@/lib/portfolio-data'

function Cloud({
  className,
  duration,
  delay = '0s',
  scale = 1,
}: {
  className?: string
  duration: string
  delay?: string
  scale?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ''}`}
      style={{
        animation: `float-cloud ${duration} linear ${delay} infinite`,
      }}
    >
      <div
        className="relative"
        style={{ transform: `scale(${scale})`, imageRendering: 'pixelated' }}
      >
        <div className="h-6 w-28 bg-cloud" />
        <div className="absolute -top-5 left-6 h-5 w-16 bg-cloud" />
        <div className="absolute -top-9 left-12 h-4 w-8 bg-cloud" />
        <div className="h-4 w-28 bg-cloud/80" />
      </div>
    </div>
  )
}

export function SkyAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-sky-top to-sky-bottom"
    >
      {/* Pixel sun */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-24 h-20 w-20 border-4 border-sun/40 bg-sun block-3d sm:right-16 sm:h-28 sm:w-28"
        style={{ animation: 'bob 6s ease-in-out infinite' }}
      />
      {/* Drifting clouds */}
      <Cloud className="top-28" duration="42s" scale={0.9} />
      <Cloud className="top-52" duration="60s" delay="-12s" scale={1.3} />
      <Cloud className="top-80" duration="50s" delay="-30s" scale={0.7} />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-36 text-center sm:pt-44">
        {/* Hero */}
        <div
          className="mb-8 h-30 w-30 border-4 border-cloud bg-sky-top/40 p-1 block-3d-strong sm:h-50 sm:w-50"
          style={{ animation: 'bob 5s ease-in-out infinite' }}
        >
          <img
            src="/skiTestPohoto.png"
            alt="Photo of me, Althan Nguyen"
            className="pixelated h-full w-full object-cover"
          />
        </div>
        <h1 className="font-pixel text-3xl leading-tight text-cloud text-shadow-pixel sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-5 font-pixel text-[10px] leading-relaxed text-cloud text-shadow-pixel-sm sm:text-sm">
          {profile.role}
        </p>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/95 sm:text-lg">
          {profile.tagline}
        </p>
        {/* About card as a floating grass block */}
        <div
          className="mt-20 w-full max-w-2xl text-left block-3d-strong"
        >
          {/* Grass top holds the heading */}
          <div className="block-3d border-4 border-grass-dark bg-grass/90 px-5 py-4 text-center">
            <h2 className="font-pixel text-lg text-cloud text-shadow-pixel-sm sm:text-xl">
              {about.heading}
            </h2>
          </div>
          {/* Dirt body */}
          <div className="block-3d border-4 border-dirt-dark bg-dirt/85 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-white/95">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-6 font-pixel text-[10px] text-torch text-shadow-pixel-sm">
              Inventory
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.inventory.map((item) => (
                <li
                  key={item}
                  className="block-inset border-2 border-stone-dark bg-stone px-3 py-2 text-xs font-medium text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 font-pixel text-[10px] text-cloud/90 text-shadow-pixel-sm">
          ↓ keep digging ↓
        </p>
      </div>
    </section>
  )
}
